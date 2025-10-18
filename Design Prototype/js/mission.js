document.addEventListener("DOMContentLoaded", () => {
  const missions = document.querySelectorAll(".mission-item");
  const progressBar = document.getElementById("progress");
  const pieces = document.querySelectorAll(".puzzle-piece");
  let completed = 0;

  missions.forEach((mission, index) => {
    mission.addEventListener("click", () => {
      if (!mission.classList.contains("completed")) {
        mission.classList.add("completed");
        pieces[index].classList.add("active");
        completed++;

        const progress = (completed / missions.length) * 100;
        progressBar.style.width = `${progress}%`;
      }
    });
  });

  document.querySelector(".start-btn").addEventListener("click", () => {
    completed = 0;
    missions.forEach(m => m.classList.remove("completed"));
    pieces.forEach(p => p.classList.remove("active"));
    progressBar.style.width = "0%";
  });
});

// 选择器
const progressBar  = document.getElementById("progress");
const progressText = document.getElementById("progressText");

// … 点击任务后：
const progress = (completed / missions.length) * 100;
progressBar.style.width = `${progress}%`;
progressText.textContent = `${completed}/${missions.length} (${Math.round(progress)}%)`;

// … Reset 时：
completed = 0;
progressBar.style.width = "0%";
progressText.textContent = `0/${missions.length} (0%)`;
