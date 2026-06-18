# Anton-Coin-Giver
Menu to change your game coins on Anton app. (Not just visual)

> **⚠️ Disclaimer:** This repository is for **educational purposes only**. It is designed to help developers understand frontend vulnerabilities and secure their applications. Do not use this code on systems you do not own or have explicit permission to test.
> 
## 🚀 Installation Guide

You can run this script using a Userscript Manager extension. The process is similar for both major browsers.

### For Google Chrome
1. Install the [Page Manipulator](https://chromewebstore.google.com/detail/page-manipulator/mdhellggnoabbnnchkeniomkpghbekko) extension from the Chrome Web Store.
2. If you get a 'cannot manipulate this page' error, simply reload the tab. (Also, make sure you are not on the browser's default new tab page)."
3. Click the Page Manipulation icon in your extension bar and select JavaScript.
4. Click on + New +.
5. Give it a name like: Anton-Free-Coins. And then click on Make.
6. Paste the entire JavaScript code from `coin-giver.js` into the editor.
7. Add the domain: **https://anton.app** on the left to the active list.
8. Click on the checkbox to activate.
9. Click on Manipulate.
10. Click reload.

*I'm too lazy to give a tutorial to use it on firefox...*
*Sorry...*

## 💻 Usage

Once installed and enabled, navigate to the target web application:
1. A **floating yellow coin icon** will appear in the bottom right corner of the screen.
2. Click the icon to open the **Coin Menu**.
3. Enter the desired numerical value into the input field.
4. Click **Update**.
5. The script will intercept the local function, send the payload to the server, and automatically reload the page to reflect the changes.

Have fun. :D

*And don't use for free coins. :)*

Just kidding. Use it for what you want.
