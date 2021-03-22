window.addEventListener("DOMContentLoaded", () => {
  const targetEl = document.querySelector("p");

  const datalist = [1, 2, 3, 4, [5, 6, [7]]];

  targetEl.innerHTML += `datalist is ${subHtml}`;
});
