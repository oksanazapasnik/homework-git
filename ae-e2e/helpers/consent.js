// Consent / ad guard.

const BLOCK_RE =
  /(fundingchoicesmessages\.google\.com|googlesyndication\.com|doubleclick\.net|adservice\.google\.|pagead|funding.?choices|cookiechoices)/i;

const HIDE_CSS = `
  .fc-consent-root,
  .fc-dialog-overlay,
  .fc-dialog,
  [class*="fc-dialog"] {
    display: none !important;
    pointer-events: none !important;
  }
  html, body { overflow: auto !important; }
`;

/**
 * Install the guard on a page.
 * @param {import('@playwright/test').Page} page
 */
async function installConsentGuard(page) {
  await page.route(BLOCK_RE, (route) => route.abort());

  await page.addInitScript((css) => {
    const inject = () => {
      if (document.getElementById('__consent_killer__')) return;
      const style = document.createElement('style');
      style.id = '__consent_killer__';
      style.textContent = css;
      (document.head || document.documentElement).appendChild(style);
    };
    inject();
    document.addEventListener('DOMContentLoaded', inject);
  }, HIDE_CSS);
}

/**
 * Instantly drop any consent overlay from the DOM. 
 * @param {import('@playwright/test').Page} page
 */
async function killConsentOverlay(page) {
  await page
    .evaluate(() => {
      document
        .querySelectorAll('.fc-consent-root, .fc-dialog-overlay')
        .forEach((el) => el.remove());
    })
    .catch(() => {
    });
}

module.exports = { installConsentGuard, killConsentOverlay, BLOCK_RE };
