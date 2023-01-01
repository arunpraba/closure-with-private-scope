import "./styles.css";

const addClickCounter = (selector) => {
  let count = 0;
  document.querySelector(selector).addEventListener("click", function () {
    count += 1;
    this.innerHTML = `${count} times clicked`;
  });
};

addClickCounter("#click-me");

addClickCounter(".click-me");
