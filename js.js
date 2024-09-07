function Calculate() {
  const AmountTotal = document.getElementById("Amount");
  const RateTotal = document.getElementById("Rate");
  const YearsTotal = document.getElementById("Years");
  const TextAmount = document.getElementById("Text");

  let Rate = Number(RateTotal.value / 100);
  let Amount = Number(AmountTotal.value);
  let Years = Number(YearsTotal.value);


  if(Amount<0 || isNaN(Amount)){
    Amount=0;
  }


  if(Years<0 || isNaN(Years)){
    Years=0;
  }


  if(Rate<0 || isNaN(Rate)){
    Rate=0;
  }

  const Result = Amount * Math.pow(1 + Rate / 1, 1 * Years);
  TextAmount.textContent =` $${Result}`;
}
