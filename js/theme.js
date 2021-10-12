const setTheme = (theme) => (document.documentElement.className = theme);
const input = document.querySelector(".range");

input.addEventListener("change", function () {
  if (input.value === "1") {
    setTheme("dark");
  } else if (input.value === "2") {
    setTheme("light");
  } else if (input.value === "3") {
    setTheme("purple");
  }
});
