// Scroll To Top Button
let btn = document.querySelector(".to-top");
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Scroll Page Progress
let scroller = document.querySelector(".scroller");

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

// Skills Progress
let skillsSection = document.querySelector(".our-skills");
let skillsSpans = document.querySelectorAll(".the-progress span");

// Statistics Counting
let statsSection = document.querySelector(".stats");
let statsSpans = document.querySelectorAll("span.number");
let started = false;

window.onscroll = function () {
  // Skills Section
  if (window.scrollY >= skillsSection.offsetTop - 150) {
    skillsSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
    // Statistics Section
    if (window.scrollY >= statsSection.offsetTop - 100) {
      if (!started) {
        statsSpans.forEach((span) => startCounting(span));
      }
      started = true;
    }
  }
  // Scroll To Top Button
  if (window.scrollY >= 600) {
    btn.style.opacity = "1";
  } else {
    btn.style.opacity = "0";
  }
};

function startCounting(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent === goal) {
      clearInterval(count);
    }
  }, 3000 / goal);
}


// Count Down From The Current Time To The End Of The Year

// The End Of The Year Date To Countdown To
let currentYear = new Date().getFullYear();

let countDownData = new Date(`Dec 31, ${currentYear} 23:59:59`).getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownData - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff <= 0) {
    clearInterval(counter);

    document.querySelector(".days").innerHTML = "00";
    document.querySelector(".hours").innerHTML = "00";
    document.querySelector(".minutes").innerHTML = "00";
    document.querySelector(".seconds").innerHTML = "00";
  }
}, 1000);
