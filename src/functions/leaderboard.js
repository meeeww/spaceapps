document.querySelector(".fa-ranking-star").addEventListener("click", () => {
  document.querySelector(".leaderboard").style.display = "flex";
  document.getElementById("closeLead").classList.add("active");
});

document.getElementById("closeLead").addEventListener("click", () => {
  document.querySelector(".leaderboard").style.display = "none";
  document.getElementById("closeLead").classList.remove("active");
});
