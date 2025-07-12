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
