// ==UserScript==
// @name         Hide YouTube Shorts (Desktop)
// @version      1.1
// @description  Removes Shorts from Home, Subscriptions, and Search on desktop.
// @homepageURL  https://github.com/Neogamezzz/NoShortsPC/raw/main/Script.js
// @match        https://www.youtube.com/*
// ==/UserScript==

(() => {
  "use strict";

  const css = `
        /* Hides the "Shorts" button in the main navigation sidebar */
        a[title="Shorts"],

        /* Hides the entire shelf of Shorts on the Home, Subscriptions, and Search pages */
        ytd-rich-shelf-renderer[is-shorts],
        ytd-reel-shelf-renderer,

        /* Hides the Shorts shelf in search results */
        grid-shelf-view-model,

        /* Hides individual Shorts in search results or other mixed content lists */
        ytd-video-renderer:has(a[href^="/shorts"]),
        ytd-grid-video-renderer:has(a[href^="/shorts"]),

        /* Hides Shorts-related chips in search results */
        yt-chip-cloud-chip-renderer:has(yt-formatted-string[title="Shorts"]) {
            display: none !important;
        }`;

  document.head.appendChild(
    Object.assign(document.createElement("style"), { textContent: css })
  );

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length) {
        if (
          document.querySelector(
            'ytd-rich-shelf-renderer[is-shorts], ytd-reel-shelf-renderer, grid-shelf-view-model, ytd-video-renderer:has(a[href^="/shorts"])'
          )
        ) {}
      }
    }
  });

  // Start observing the body for changes in the element tree
  observer.observe(document.body, { childList: true, subtree: true });
})();
