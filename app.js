const containerDiv = document.querySelector(".container");
const calenderDiv = document.querySelector(".calender");
const weekdayDiv = document.querySelector(".weekday");
const clockDiv = document.querySelector(".clock");
const hourDiv = document.querySelector(".hour");
const minuteDiv = document.querySelector(".minute");
const secondDiv = document.querySelector(".second");

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
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  calenderDiv.innerHTML = `${date.getDate()}.${months[month]}   -  ${year} `;
  weekdayDiv.innerHTML = `${days[day]}`;
  hourDiv.innerHTML = `${hour}`;
  minuteDiv.innerHTML = `${minute} `;
  secondDiv.innerHTML = `${second}`;
}
// console.log(date);
setInterval(showTime, 1000);
