const TRACKING_PLACEHOLDER_PIXEL_ID = "COLOCAR_PIXEL_ID_AQUI";
const WHATSAPP_URL_PATTERN = /(wa\.me|api\.whatsapp\.com)/i;

function isMetaPixelReady() {
  return typeof window.fbq === "function";
}

function trackMetaEvent(eventName) {
  if (!isMetaPixelReady()) {
    return;
  }

  window.fbq("track", eventName);
}

function trackLead() {
  trackMetaEvent("Lead");
}

function trackContact() {
  trackMetaEvent("Contact");
}

function getTrackFlags(element) {
  return new Set(
    (element.dataset.track || "")
      .split(/\s+/)
      .map((flag) => flag.trim().toLowerCase())
      .filter(Boolean)
  );
}

function isWhatsAppLink(element) {
  return element instanceof HTMLAnchorElement && WHATSAPP_URL_PATTERN.test(element.href);
}

function shouldSkipTracking() {
  return !window.META_PIXEL_ID || window.META_PIXEL_ID === TRACKING_PLACEHOLDER_PIXEL_ID;
}

document.addEventListener("click", (event) => {
  if (shouldSkipTracking()) {
    return;
  }

  const target = event.target;

  if (!(target instanceof Element)) {
    return;
  }

  // Um único listener cobre os CTAs atuais e futuros sem anexar eventos repetidos.
  const clickableElement = target.closest("a, button");

  if (!(clickableElement instanceof HTMLElement)) {
    return;
  }

  const trackFlags = getTrackFlags(clickableElement);
  const isWhatsApp = isWhatsAppLink(clickableElement);

  if (trackFlags.has("lead")) {
    trackLead();
  }

  if (trackFlags.has("contact") || trackFlags.has("whatsapp") || isWhatsApp) {
    trackContact();
  }
});
