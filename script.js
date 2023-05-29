// // script.js
// const daysTag = document.querySelector(".days"),
//   currentDate = document.querySelector(".current-date"),
//   prevNextIcon = document.querySelectorAll(".icons span"),
//   dateInput = document.getElementById("date-input");

// // getting new date, current year and month
// let date = new Date(),
//   currYear = date.getFullYear(),
//   currMonth = date.getMonth();

// // storing full name of all months in array
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// let firstDayofMonth; // declare the variable outside the function

// const renderCalendar = () => {
//   firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // getting first day of month
//   let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
//     lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
//     lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
//   let liTag = "";

//   for (let i = firstDayofMonth; i > 0; i--) {
//     // creating li of previous month last days
//     liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
//   }

//   for (let i = 1; i <= lastDateofMonth; i++) {
//     // creating li of all days of current month
//     // adding active class to li if the current day, month, and year matched
//     let isToday =
//       i === date.getDate() &&
//       currMonth === new Date().getMonth() &&
//       currYear === new Date().getFullYear()
//         ? "active"
//         : "";
//     let isSelected =
//       i === dateInput.valueAsDate?.getDate() &&
//       currMonth === dateInput.valueAsDate?.getMonth() &&
//       currYear === dateInput.valueAsDate?.getFullYear()
//         ? "selected"
//         : "";
//     liTag += `<li class="${isToday} ${isSelected}">${i}</li>`;
//   }

//   for (let i = lastDayofMonth; i < 6; i++) {
//     // creating li of next month first days
//     liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
//   }
//   currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
//   daysTag.innerHTML = liTag;

//   const dayElements = daysTag.querySelectorAll("li");
//   dayElements.forEach((dayElement) => {
//     dayElement.addEventListener("click", () => {
//       const selectedDate = new Date(currYear, currMonth, dayElement.innerText);
//       if (selectedDate >= date) {
//         dateInput.valueAsDate = selectedDate;
//         renderCalendar();
//       }
//     });
//   });
// };

// renderCalendar();

// prevNextIcon.forEach((icon) => {
//   // getting prev and next icons
//   icon.addEventListener("click", () => {
//     // adding click event on both icons
//     // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
//     currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

//     if (currMonth < 0 || currMonth > 11) {
//       // if current month is less than 0 or greater than 11
//       // creating a new date of current year & month and pass it as date value
//       date = new Date(currYear, currMonth, new Date().getDate());
//       currYear = date.getFullYear(); // updating current year with new date year
//       currMonth = date.getMonth(); // updating current month with new date month
//     } else {
//       date = new Date(); // pass the current date as date value
//     }
//     renderCalendar(); // calling renderCalendar function
//   });
// });

// dateInput.addEventListener("input", (event) => {
//   const selectedDate = new Date(event.target.value);
//   if (!isNaN(selectedDate.getTime())) {
//     currYear = selectedDate.getFullYear();
//     currMonth = selectedDate.getMonth();
//     renderCalendar();
//   }
// });



const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const prevNextIcon = document.querySelectorAll(".icons span");
const dateInput = document.getElementById("date-input");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

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

let firstDayofMonth;

const toggleSelectedDateClass = (dayElement) => {
  const isSelected = dayElement.classList.contains("selected-date");
  if (isSelected) {
    dayElement.classList.remove("selected-date");
  } else {
    dayElement.classList.add("selected-date");
  }
};

const renderCalendar = () => {
  firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    let isSelected =
      i === dateInput.valueAsDate?.getDate() &&
      currMonth === dateInput.valueAsDate?.getMonth() &&
      currYear === dateInput.valueAsDate?.getFullYear()
        ? "selected-date"
        : "";
    liTag += `<li class="${isToday} ${isSelected}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;

  const dayElements = daysTag.querySelectorAll("li");
  dayElements.forEach((dayElement) => {
    dayElement.addEventListener("click", () => {
      const selectedDate = new Date(currYear, currMonth, dayElement.innerText);
      if (selectedDate >= date) {
        dateInput.valueAsDate = selectedDate;
        toggleSelectedDateClass(dayElement);
      }
    });
  });
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth  : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});

dateInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const selectedDate = new Date(dateInput.value);
    if (!isNaN(selectedDate.getTime())) {
      currYear = selectedDate.getFullYear();
      currMonth = selectedDate.getMonth();
      renderCalendar();
      const dayElements = daysTag.querySelectorAll("li");
      dayElements.forEach((dayElement) => {
        if (dayElement.innerText === selectedDate.getDate().toString()) {
          toggleSelectedDateClass(dayElement);
        }
      });
    }
  }
}
);


