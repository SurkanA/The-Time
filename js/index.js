// DayJS
dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

// First second of the page
const place = dayjs.tz.guess();
document.getElementById("currentPlace").textContent += `${place}`;

let utc = 0;
const time = dayjs.utc().utcOffset(utc).format("HH:mm:ss");
document.getElementById("currentTime").textContent = `${time}`;

const date = dayjs().utc().utcOffset(utc).format("dddd, DD MMMM YYYY");
document.getElementById("currentDate").textContent = `${date}`;

// Update every second
setInterval(() => {
  const time = dayjs.utc().utcOffset(utc).format("HH:mm:ss");
  document.getElementById("currentTime").textContent = `${time}`;

  const date = dayjs().utc().utcOffset(utc).format("dddd, DD MMMM YYYY");
  document.getElementById("currentDate").textContent = `${date}`;
}, 1000);

// MicroModal
MicroModal.init({
  onShow: (modal) => console.info(`${modal.id} is shown`), // [1]
  onClose: (modal) => console.info(`${modal.id} is hidden`), // [2]
  openTrigger: "data-custom-open", // [3]
  closeTrigger: "data-custom-close", // [4]
  disableScroll: true, // [5]
  disableFocus: false, // [6]
  awaitCloseAnimation: false, // [7]
  debugMode: false, // [8]
});

// Interaction with menu
var button = document.querySelector(".displayBotton");
button.addEventListener("click", function () {
  MicroModal.show("timezone-modal");
});
document
  .querySelector(".modal__btn-primary")
  .addEventListener("click", function () {
    const select = document.getElementById("timezone-select");
    // Update current place
    document.getElementById("currentPlace").textContent = `${select.value}`;
    MicroModal.close("timezone-modal");

    const timezoneOffsets = {
      "America/Tijuana": -8,
      "America/Los_Angeles": -8,
      "America/Phoenix": -7,
      "America/Denver": -7,
      "America/Chicago": -6,
      "America/Mexico_City": -6,
      "America/New_York": -5,
      "America/Bogota": -5,
      "America/Lima": -5,
      "America/Caracas": -4,
      "America/Santo_Domingo": -4,
      "America/Buenos_Aires": -3,
      "America/Santiago": -3,
      "America/Brasilia": -2,
      "Atlantic/Azores": -1,
      "Europe/London": 0,
      "Europe/Berlin": 1,
      "Europe/Madrid": 1,
      "Europe/Paris": 1,
      "Europe/Rome": 1,
      "Europe/Istanbul": 2,
      "Asia/Baghdad": 3,
      "Asia/Tehran": 3,
      "Asia/Dubai": 4,
      "Asia/Kabul": 4,
      "Asia/Karachi": 5,
      "Asia/Colombo": 5,
      "Asia/Kolkata": 5,
      "Asia/Almaty": 6,
      "Asia/Dhaka": 6,
      "Asia/Yangon": 7,
      "Asia/Jakarta": 7,
      "Asia/Krasnoyarsk": 8,
      "Asia/Shanghai": 8,
      "Asia/Tokyo": 9,
      "Asia/Seoul": 9,
      "Australia/Sydney": 10,
      "Australia/Melbourne": 10,
      "Australia/Brisbane": 10,
      "Australia/Hobart": 11,
      "Australia/Lord_Howe": 11,
    };

    utc =
      timezoneOffsets[document.getElementById("timezone-select").value] || 0;
  });
