document.addEventListener("DOMContentLoaded", function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Typed roles
  var typed = document.getElementById("typed-role");
  if (typed && !reduce) {
    var roles = [
      { text: "browser automations", color: "#f2711c" },
      { text: "data pipelines", color: "#1f9d8a" },
      { text: "n8n workflows", color: "#e8497a" },
      { text: "ML classifiers", color: "#8b5cf6" },
      { text: "live dashboards", color: "#2f80ed" },
    ];
    var cursor = document.querySelector(".typed-cursor");
    var r = 0;
    var c = 0;
    var deleting = false;
    var tick = function () {
      var word = roles[r].text;
      typed.textContent = word.slice(0, c);
      typed.style.color = roles[r].color;
      if (cursor) cursor.style.color = roles[r].color;
      if (!deleting && c === word.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
      if (deleting && c === 0) {
        deleting = false;
        r = (r + 1) % roles.length;
      }
      c += deleting ? -1 : 1;
      setTimeout(tick, deleting ? 35 : 70);
    };
    tick();
  }

  // Count-up numbers
  var countUp = function (el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var start = null;
    var step = function (ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / 1200, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  // Scroll reveal
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          if (e.target.classList.contains("stat-num")) countUp(e.target);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".projects .col, .cv .card, .stat, .news, .post-list li, .flow-diagram").forEach(function (n) {
      n.classList.add("reveal");
      io.observe(n);
    });
    document.querySelectorAll(".stat-num").forEach(function (n) {
      io.observe(n);
    });
  }
});
