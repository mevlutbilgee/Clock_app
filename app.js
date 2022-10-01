const containerDiv = document.querySelector(".container");
const calenderDiv = document.querySelector(".calender");
const weekdayDiv = document.querySelector(".weekday");
const clockDiv = document.querySelector(".clock");

function showTime() {
  let date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();
  let clock = date.toLocaleTimeString();

  calenderDiv.innerHTML = `${date.getDate()}.${months[month]}   -  ${year} `;
  weekdayDiv.innerHTML = `${days[day]}`;
  clockDiv.innerHTML = clock;
}
// console.log(date);
setInterval(showTime, 1000);
