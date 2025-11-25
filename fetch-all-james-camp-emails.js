const fs = require('fs');
const https = require('https');

const API_SECRET = 'HqnMmmKuIj7FxK2k2vbSNCfaSD9Fcg7MljKVtbsqoP4';

const fetchUrl = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
};

const fetchAllBroadcasts = async () => {
  let allBroadcasts = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    console.log(`Fetching page ${page}...`);
    const url = `https://api.convertkit.com/v3/broadcasts?api_secret=${API_SECRET}&page=${page}`;
    const result = await fetchUrl(url);

    if (result.broadcasts && result.broadcasts.length > 0) {
      allBroadcasts = allBroadcasts.concat(result.broadcasts);
      console.log(`Found ${result.broadcasts.length} broadcasts on page ${page}`);
      page++;
      await new Promise(resolve => setTimeout(resolve, 500));
    } else {
      hasMore = false;
    }
  }

  return allBroadcasts;
};

const fetchBroadcastDetails = async (id) => {
  const url = `https://api.convertkit.com/v3/broadcasts/${id}?api_secret=${API_SECRET}`;
  return await fetchUrl(url);
};

const main = async () => {
  console.log('Fetching all broadcasts...\n');
  const broadcasts = await fetchAllBroadcasts();

  console.log(`\nTotal broadcasts found: ${broadcasts.length}`);
  console.log('Now fetching full content for each broadcast...\n');

  const allEmails = [];
  let count = 0;

  for (const broadcast of broadcasts) {
    count++;
    console.log(`[${count}/${broadcasts.length}] Fetching: ${broadcast.subject}`);
    try {
      const fullBroadcast = await fetchBroadcastDetails(broadcast.id);
      allEmails.push(fullBroadcast.broadcast);
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Error fetching ${broadcast.id}:`, error.message);
    }
  }

  fs.writeFileSync(
    './james-camp-all-emails.json',
    JSON.stringify({
      total: allEmails.length,
      fetched_at: new Date().toISOString(),
      emails: allEmails
    }, null, 2)
  );

  console.log(`\n✓ Successfully fetched ${allEmails.length} complete emails!`);
  console.log('Saved to: james-camp-all-emails.json');
};

main();
