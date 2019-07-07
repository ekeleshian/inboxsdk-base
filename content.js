 // "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'",


 // "background": {
 //    "scripts": ["inboxsdk.js", "background.js"],
 //    "persistent": true

  // },


 //       "<all_urls>",
 //        "webRequest",
 //        "webRequestBlocking",
 //      "chrome-extension://*"
 // 

// console.log(InboxSDK);

  InboxSDK.load('2', "sdk_source-emails_f7fef54d4d").then(sdk => {
     console.log(sdk)
  }).catch(e => {
  	console.warn(e);
  }).then(() => {
  	console.log('all promises resolved initial load');
  });