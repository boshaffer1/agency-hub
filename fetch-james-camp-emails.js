const fs = require('fs');
const https = require('https');

const API_SECRET = 'HqnMmmKuIj7FxK2k2vbSNCfaSD9Fcg7MljKVtbsqoP4';
const broadcasts = require('./james-camp-broadcasts.json').broadcasts;

const fetchBroadcast = (id) => {
  return new Promise((resolve, reject) => {
    const url = `https://api.convertkit.com/v3/broadcasts/${id}?api_secret=${API_SECRET}`;

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

const fetchAll = async () => {
  const allEmails = [];

  for (const broadcast of broadcasts) {
    console.log(`Fetching broadcast ${broadcast.id}: ${broadcast.subject}`);
    try {
      const fullBroadcast = await fetchBroadcast(broadcast.id);
      allEmails.push(fullBroadcast.broadcast);
      await new Promise(resolve => setTimeout(resolve, 500)); // Rate limiting
    } catch (error) {
      console.error(`Error fetching ${broadcast.id}:`, error.message);
    }
  }

  fs.writeFileSync(
    './james-camp-emails-full.json',
    JSON.stringify({ emails: allEmails }, null, 2)
  );

  console.log(`\nFetched ${allEmails.length} emails successfully!`);
};

fetchAll();
