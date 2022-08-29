export const minimal_args = [
  "--autoplay-policy=user-gesture-required",
  "--disable-background-networking",
  "--disable-background-timer-throttling",
  "--disable-backgrounding-occluded-windows",
  "--disable-breakpad",
  "--disable-client-side-phishing-detection",
  "--disable-component-update",
  "--disable-default-apps",
  "--disable-dev-shm-usage",
  "--disable-domain-reliability",
  "--disable-extensions",
  "--disable-features=AudioServiceOutOfProcess",
  "--disable-hang-monitor",
  "--disable-ipc-flooding-protection",
  "--disable-notifications",
  "--disable-offer-store-unmasked-wallet-cards",
  "--disable-popup-blocking",
  "--disable-print-preview",
  "--disable-prompt-on-repost",
  "--disable-renderer-backgrounding",
  "--disable-setuid-sandbox",
  "--disable-speech-api",
  "--disable-sync",
  "--hide-scrollbars",
  "--ignore-gpu-blacklist",
  "--metrics-recording-only",
  "--mute-audio",
  "--no-default-browser-check",
  "--no-first-run",
  "--no-pings",
  "--no-sandbox",
  "--no-zygote",
  "--password-store=basic",
  "--use-gl=swiftshader",
  "--use-mock-keychain",
];

export const config = {
  calendar: {
    selector:
      "#jqxTabs > div.jqx-tabs-content.jqx-widget-content.jqx-rc-b > div > div > div:nth-child(4) > div > div > div.box-content-home > div > div:nth-child(1)",
    url: "https://mybk.hcmut.edu.vn/stinfo/lichthi/ajax_lichhoc",
  },
  test_schedule: {
    selector:
      "#jqxTabs > div.jqx-tabs-content.jqx-widget-content.jqx-rc-b > div > div > div:nth-child(4) > div > div > div.box-content-home > div > div:nth-child(2)",
    url: "https://mybk.hcmut.edu.vn/stinfo/lichthi/ajax_lichthi",
  },
  grade: {
    selector:
      "#jqxTabs > div.jqx-tabs-content.jqx-widget-content.jqx-rc-b > div > div > div:nth-child(4) > div > div > div.box-content-home > div > div:nth-child(3)",
    url: "https://mybk.hcmut.edu.vn/stinfo/grade/ajax_grade",
  },
};
