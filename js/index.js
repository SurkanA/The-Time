// DayJS
dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

// First second of the page
if (localStorage.getItem("place") !== null) {
  const place = localStorage.getItem("place");
  document.getElementById("currentPlace").textContent += `${place}`;
} else {
  const place = dayjs.tz.guess();
  document.getElementById("currentPlace").textContent += `${place}`;
}

if (localStorage.getItem("utc") !== null) {
  var utc = localStorage.getItem("utc");
  const time = dayjs.utc().utcOffset(utc).format("HH:mm:ss");
  document.getElementById("currentTime").textContent = `${time}`;
} else {
  var utc = 0;
  const time = dayjs.utc().utcOffset(utc).format("HH:mm:ss");
  document.getElementById("currentTime").textContent = `${time}`;
}

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

    switch (document.getElementById("timezone-select").value) {
      case "Pacific/Kiritimati":
      case "Pacific/Apia":
        utc = -11;
        break;
      case "Pacific/Honolulu":
        utc = -10;
        break;
      case "Pacific/Anchorage":
        utc = -9;
        break;
      case "America/Tijuana":
      case "America/Los_Angeles":
        utc = -8;
        break;
      case "America/Phoenix":
      case "America/Denver":
        utc = -7;
        break;
      case "America/Chicago":
      case "America/Mexico_City":
        utc = -6;
        break;
      case "America/New_York":
      case "America/Bogota":
      case "America/Lima":
        utc = -5;
        break;
      case "America/Buenos_Aires":
      case "America/Santiago":
        utc = -3;
        break;
      case "America/Brasilia":
        utc = -2;
        break;
      case "Atlantic/Azores":
        utc = -1;
        break;
      case "Europe/London":
        utc = 0;
        break;
      case "Europe/Berlin":
      case "Europe/Madrid":
      case "Europe/Paris":
      case "Europe/Rome":
        utc = 1;
        break;
      case "Europe/Istanbul":
        utc = 2;
        break;
      case "Asia/Baghdad":
      case "Asia/Tehran":
        utc = 3;
        break;
      case "Asia/Dubai":
      case "Asia/Kabul":
        utc = 4;
        break;
      case "Asia/Karachi":
      case "Asia/Colombo":
      case "Asia/Kolkata":
        utc = 5;
        break;
      case "Asia/Almaty":
      case "Asia/Dhaka":
        utc = 6;
        break;
      case "Asia/Yangon":
      case "Asia/Jakarta":
        utc = 7;
        break;
      case "Asia/Krasnoyarsk":
      case "Asia/Shanghai":
        utc = 8;
        break;
      case "Asia/Tokyo":
      case "Asia/Seoul":
        utc = 9;
        break;
      case "Australia/Perth":
        utc = 8;
        break;
      case "Australia/Sydney":
      case "Australia/Melbourne":
      case "Australia/Brisbane":
        utc = 10;
        break;
      case "Pacific/Auckland":
        utc = 12;
        break;
      default:
        utc = 0;
        break;
    }
    localStorage.setItem("utc", utc);
    localStorage.setItem("place", select.value);
  });
