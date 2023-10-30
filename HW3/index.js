const btnEl = document.getElementById("calculate");
const firstdividendInput = document.getElementById("first dividend");
const seconddividenddInput = document.getElementById("second dividend");
const thirddividendInput = document.getElementById("third dividend");
const fourthdividendInput = document.getElementById("fourth dividend");
const fifthdividendInput = document.getElementById("fifth dividend");

const cheappriceSpan = document.getElementById("cheapprice");
const reasonablepriceSpan = document.getElementById("reasonableprice");
const expensivepriceSpan = document.getElementById("expensiveprice");

function calculateprice() {
  const firstdividendvalue = firstdividendInput.value;
  const seconddividenddvalue = seconddividenddInput.value;
  const thirddividendvalue = thirddividendInput.value;
  const fourthdividendvalue = fourthdividendInput.value;
  const fifthdividendvalue = fifthdividendInput.value;

  const cheappriceValue = ((firstdividendvalue+seconddividenddvalue+thirddividendvalue+fourthdividendvalue+fifthdividendvalue)/5)*100/7;
  cheappriceSpan.innerText = cheappriceValue.toFixed(2);
  const reasonablepriceValue = ((firstdividendvalue+seconddividenddvalue+thirddividendvalue+fourthdividendvalue+fifthdividendvalue)/5)*100/5;
  reasonablepriceSpan.innerText = reasonablepriceValue.toFixed(2);
  const cheapppriceValue = ((firstdividendvalue+seconddividenddvalue+thirddividendvalue+fourthdividendvalue+fifthdividendvalue)/5)*100/3;
  cheappriceSpan.innerText = cheapppriceValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
