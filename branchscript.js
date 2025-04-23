document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("revealBranches");
    const branches = document.querySelector(".branches");

    // When button is clicked, toggle class on .branches
    button.addEventListener("click", function () {
      if (branches.classList.contains("show")) {
        branches.classList.remove("show");
      } else {
        branches.classList.add("show");
      }
    });
  });

