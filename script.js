const adviceNumber = document.querySelector(".advice-number");
const advice = document.querySelector(".advice");
const diceBtn = document.querySelector(".dice");

getAdvice();

diceBtn.addEventListener("click", getAdvice);

async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");

  const { slip } = await res.json();

  //in case of getting the same advice in a row
  if (adviceNumber.textContent == slip.id) {
    let id = Number(adviceNumber.textContent) + 1;

    const res = await fetch(`https://api.adviceslip.com/advice/${id}`);

    const { slip } = await res.json();

    adviceNumber.textContent = slip.id;
    advice.textContent = `"${slip.advice}"`;
  } else {
    adviceNumber.textContent = slip.id;
    advice.textContent = `"${slip.advice}"`;
  }
}
