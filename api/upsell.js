const WHOP_API = "https://api.whop.com/api/v5";
const DEAL_ADVISORY_PLAN_ID = "plan_G4q2wMMQu2ZRn";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { payment_id } = req.body;
  if (!payment_id) return res.status(400).json({ error: "Missing payment_id" });

  const apiKey = process.env.WHOP_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "Server misconfigured" });

  const headers = {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  };

  try {
    const paymentRes = await fetch(`${WHOP_API}/payments/${payment_id}`, { headers });
    if (!paymentRes.ok) return res.status(400).json({ error: "Invalid payment_id" });
    const payment = await paymentRes.json();

    const methodsRes = await fetch(`${WHOP_API}/payments/${payment_id}/payment_methods`, { headers });
    if (!methodsRes.ok) return res.status(400).json({ error: "No payment methods found" });
    const methods = await methodsRes.json();

    const paymentMethodId = methods.data?.[0]?.id;
    if (!paymentMethodId) return res.status(400).json({ error: "No saved payment method" });

    const chargeRes = await fetch(`${WHOP_API}/checkout_requests`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        plan_id: DEAL_ADVISORY_PLAN_ID,
        user_id: payment.user_id,
        payment_method_id: paymentMethodId
      })
    });

    const chargeData = await chargeRes.json();

    if (!chargeRes.ok) {
      console.error("Charge failed:", chargeData);
      return res.status(400).json({ error: chargeData.message || "Charge failed" });
    }

    return res.status(200).json({
      success: true,
      charge_id: chargeData.id,
      message: "Upgrade successful!"
    });

  } catch (err) {
    console.error("Upsell error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
