importScripts("ads-list.js");

chrome.runtime.onInstalled.addListener(() => {
  updateAdBlockRules();
});

function updateAdBlockRules() {
  let rules = ads_list.map((domain, index) => ({
    id: index + 1, // Unique ID for each rule
    priority: 1,
    action: { type: "block" },
    condition: {
      urlFilter: domain, // Block the domain
      resourceTypes: ["script", "image", "xmlhttprequest", "sub_frame"]
    }
  }));

  // Remove old rules before adding new ones
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: rules.map(rule => rule.id),
    addRules: rules
  });
}
