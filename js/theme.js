const setTheme = (theme) => (document.documentElement.className = theme);
const input = document.querySelector(".range");
setTheme("dark");

input.addEventListener("change", function () {
  if (input.value === "1") {
    setTheme("dark");
  } else if (input.value === "2") {
    setTheme("light");
  } else if (input.value === "3") {
    setTheme("purple");
  }
  console.log(input.value);
});

// let i = document.querySelector('input'),
//     o = document.querySelector('output');

// o.innerHTML = i.value;

// // use 'change' instead to see the difference in response
// i.addEventListener('input', function () {
//   o.innerHTML = i.value;
// }, false);
