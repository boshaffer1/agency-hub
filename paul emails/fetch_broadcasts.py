import requests
import json
import time
import os

API_SECRET = "_i-t0IOvYXxI8Lt6D4PzXOJ30ODODbDADFhj6K8YjaM"

with open('broadcasts.json', 'r') as f:
    data = json.load(f)

broadcasts = data['broadcasts']

for i, broadcast in enumerate(broadcasts):
    broadcast_id = broadcast['id']
    subject = broadcast['subject']
    
    # Clean filename
    safe_subject = "".join(c for c in subject if c.isalnum() or c in (' ', '-', '_')).rstrip()
    safe_subject = safe_subject[:100]  # Limit length
    
    print(f"Fetching {i+1}/{len(broadcasts)}: {subject}")
    
    # Get full broadcast details
    url = f"https://api.convertkit.com/v3/broadcasts/{broadcast_id}?api_secret={API_SECRET}"
    response = requests.get(url)
    
    if response.status_code == 200:
        full_data = response.json()
        
        # Save as JSON
        filename = f"{broadcast_id}_{safe_subject}.json"
        with open(filename, 'w') as f:
            json.dump(full_data, f, indent=2)
        
        # Save HTML content separately if exists
        if 'broadcast' in full_data and 'content' in full_data['broadcast']:
            html_filename = f"{broadcast_id}_{safe_subject}.html"
            with open(html_filename, 'w') as f:
                f.write(full_data['broadcast']['content'])
        
        print(f"  ✓ Saved {filename}")
    else:
        print(f"  ✗ Error: {response.status_code}")
    
    # Rate limiting
    time.sleep(0.5)

print(f"\n✓ Complete! Fetched {len(broadcasts)} broadcasts")
