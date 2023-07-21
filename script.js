function goTop() {
  window.scrollTo(0, 0);
}

function setThings() {
  document.getElementById("heading").style.bottom =
    document.getElementById("searchBoxContainer").offsetHeight / 2 + "px";
}

function openMenu() {
  document.querySelector("#entrance nav").classList.add("active");
  document.querySelector("#menuClose").classList.add("active");
}

function closeMenu() {
  document.querySelector("#entrance nav").classList.remove("active");
  document.querySelector("#menuClose").classList.remove("active");
}

// ----------------------- Assign Date -----------------------
let today = new Date(),
  year = today.getFullYear(),
  month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1,
  day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate(),
  timeStamp = Date.now();
  let date = new Date(timeStamp + 2629800000);
  let maxDate = {
    year: date.getFullYear(),
    month: date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
    day: date.getDate()
  }

Array.from(document.querySelectorAll(".datePicker")).forEach((datePicker) => {
  datePicker.value = `${year}-${month}-${day}`;
  datePicker.setAttribute("min", `${year}-${month}-${day}`);
  datePicker.setAttribute("max", `${maxDate.year}-${maxDate.month}-${maxDate.day}`);
});



// ------------------------- Touch Slider ---------------------
var scrollPosition = 0,
  chosenSlider,
  startedScrolling = false;

if (window.screen.width > 740) {
  Array.from(document.querySelectorAll(".touchSlider")).forEach((slider) => {
    slider.addEventListener("mousedown", (e) => {
      slider.classList.add("active");
      startPosition = e.pageX;
      chosenSlider = slider.id;
      startScrolling();
    });
    slider.addEventListener("mouseup", (e) => {
      slider.classList.remove("active");
      document
        .getElementById(slider.id)
        .removeEventListener("mousemove", startScroll);
      startPosition = e.pageX;
      scrollPosition = document.getElementById(slider.id).scrollLeft;
      startedScrolling = false;
    });
    slider.addEventListener("mouseleave", (e) => {
      slider.classList.remove("active");
      document
        .getElementById(slider.id)
        .removeEventListener("mousemove", startScroll);
      startPosition = e.pageX;
      scrollPosition = document.getElementById(slider.id).scrollLeft;
      startedScrolling = false;
    });

    slider.addEventListener("scroll", () => {
      if (!startedScrolling) {
        scrollPosition = document.getElementById(slider.id).scrollLeft;
      }
    });
  });
}

function startScrolling() {
  document
    .querySelector(`#${chosenSlider}.active`)
    .addEventListener("mousemove", startScroll);
}

function startScroll(e) {
  startedScrolling = true;
  document
    .getElementById(chosenSlider)
    .scrollTo(scrollPosition + startPosition - e.pageX, 0);
}
