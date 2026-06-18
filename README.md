# Anton-Coin-Giver
Menu to change your game coins on Anton app. (Not just visual)

> **⚠️ Disclaimer:** This repository is for **educational purposes only**. It is designed to help developers understand frontend vulnerabilities and secure their applications. Do not use this code on systems you do not own or have explicit permission to test.

## 📖 The Vulnerability Explained
Many modern web applications use frontend loggers or state managers to send user progress to the backend (e.g., `log.log({ event: "addCoins", value: 100 })`). 

If the backend implicitly trusts these incoming requests without validating the logic server-side (Server Authority), users can easily manipulate the frontend via the browser's Developer Tools or Userscripts to send arbitrary values. This script provides a visual interface to demonstrate this exact exploit.

## 🚀 Installation Guide

You can run this script using a Userscript Manager extension. The process is similar for both major browsers.

### For Google Chrome
1. Install the [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) extension from the Chrome Web Store.
2. Click the Tampermonkey icon in your extension bar and select **"Create a new script..."**.
3. Delete the default template code.
4. Paste the entire JavaScript code from `main.js` into the editor.
5. Add the appropriate `@match` tag at the top to specify the target URL (e.g., `// @match https://*.example-app.com/*`).
6. Click **File > Save** (or `Ctrl+S`).

### For Mozilla Firefox
1. Install the [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) add-on from the Firefox Add-ons site.
2. Click the extension icon and select **"Create a new script"** (or the `+` icon).
3. Clear the default metadata block.
4. Paste the code from `main.js` into the editor.
5. Ensure the `@match` tag points to your testing environment.
6. Click **Save & Close**.

## 💻 Usage

Once installed and enabled, navigate to the target web application:
1. A **floating yellow coin icon** will appear in the bottom right corner of the screen.
2. Click the icon to open the **Coin Menu**.
3. Enter the desired numerical value into the input field.
4. Click **Update**.
5. The script will intercept the local function, send the payload to the server, and automatically reload the page to reflect the changes.
