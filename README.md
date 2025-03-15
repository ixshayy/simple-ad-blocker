# Simple Ad Blocker Chrome Extension

## Overview
This is a **lightweight ad blocker** for Chrome that blocks ads based on a predefined list of domains. The extension uses the **Declarative Net Request API (DNR)** in **Manifest V3** to efficiently block unwanted ads without requiring extra CPU resources.

## Features
- Blocks ads from 10,000+ known advertising domains.
- Uses Chrome's **Declarative Net Request API** for efficient blocking.
- Works across all websites (`<all_urls>` permission required).

## Installation Guide
### Step 1: Download or Clone the Repository
You can either clone the repository using Git or download the ZIP file:

```sh
git clone https://github.com/ixshayy/simple-ad-blocker.git
```

Or download the ZIP and extract it.

### Step 2: Load the Extension in Chrome
1. Open **Google Chrome**.
2. Go to **chrome://extensions/** in the address bar.
3. Enable **Developer Mode** (toggle switch in the top-right corner).
4. Click **Load unpacked** and select the **extracted folder** (where `manifest.json` is located).
5. The extension will now be installed and active.


## Modifying the Block List
To add or remove blocked domains:
1. Open `ads-list.js`.
2. Add new domains to the `ads_list` array.
3. Save the file and reload the extension in Chrome (Disable and re-enable it in **chrome://extensions/**).


