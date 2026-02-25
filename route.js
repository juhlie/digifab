import home from "./pages/home.js";
import lab1 from "./pages/lab1.js";
import lab2 from "./pages/lab2.js";
import lab3 from "./pages/lab3.js";
import lab4 from "./pages/lab4.js";

const routes = {
  "/": home,
  "#lab1": lab1,
  "#lab2": lab2,
  "#lab3": lab3,
  "#lab4": lab4,
};

const getPath = () => {
  return window.location.hash;
};

const render = () => {
  const path = getPath();
  const content = routes[path] || home;
  document.querySelector("main").innerHTML = content;
};

render();
window.addEventListener("hashchange", render); // render on every hash change, including back/forward buttons
