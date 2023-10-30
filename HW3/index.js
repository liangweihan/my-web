const btnEl = document.getElementById("calculate");
const firstdividendInput = document.getElementById("first-dividend");
const seconddividendInput = document.getElementById("second-dividend");
const thirddividendInput = document.getElementById("third-dividend");
const fourthdividendInput = document.getElementById("fourth-dividend");
const fifthdividendInput = document.getElementById("fifth-dividend");

const cheappriceSpan = document.getElementById("cheapprice");
const reasonablepriceSpan = document.getElementById("reasonableprice");
const expensivepriceSpan = document.getElementById("expensiveprice");

function calculateprice() {
  const firstdividendvalue = parseFloat(firstdividendInput.value);
  const seconddividendvalue = parseFloat(seconddividendInput.value);
  const thirddividendvalue = parseFloat(thirddividendInput.value);
  const fourthdividendvalue = parseFloat(fourthdividendInput.value);
  const fifthdividendvalue = parseFloat(fifthdividendInput.value);

  const averageDividend = (firstdividendvalue + seconddividendvalue + thirddividendvalue + fourthdividendvalue + fifthdividendvalue) / 5;

  const cheappriceValue = (averageDividend * 100) / 7;
  cheappriceSpan.innerText = cheappriceValue.toFixed(2);

  const reasonablepriceValue = (averageDividend * 100) / 5;
  reasonablepriceSpan.innerText = reasonablepriceValue.toFixed(2);

  const expensivepriceValue = (averageDividend * 100) / 3;
  expensivepriceSpan.innerText = expensivepriceValue.toFixed(2);
}

btnEl.addEventListener("click", calculateprice);

