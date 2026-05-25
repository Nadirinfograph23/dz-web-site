// تحسينات على البطاقات والأزرار
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const cardImg = card.querySelector("img");
  const cardTitle = card.querySelector(".card-title");
  const cardDesc = card.querySelector(".card-desc");

  card.addEventListener("mouseover", () => {
    card.style.background = "#337ab7";
    cardImg.style.transform = "scale(1.1)";
    cardTitle.style.fontSize = "18px";
    cardDesc.style.fontSize = "14px";
  });

  card.addEventListener("mouseout", () => {
    card.style.background = "#f7f7f7";
    cardImg.style.transform = "scale(1)";
    cardTitle.style.fontSize = "16px";
    cardDesc.style.fontSize = "12px";
  });
});

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.background = "#337ab7";
  });

  button.addEventListener("mouseout", () => {
    button.style.background = "#2f343a";
  });
});