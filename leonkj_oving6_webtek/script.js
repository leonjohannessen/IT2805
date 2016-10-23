/* constant references to the form fields */
const incomeField = document.getElementById('income');
const wealthField = document.getElementById('wealth');
const taxField    = document.getElementById('tax');

/* method to calculate the tax */
function calculateTax(income, wealth) {
  return income * 0.35 + wealth * 0.25;
}

/* method to update the tax-field value */
function updateTaxField(value) {
  taxField.value = value;
}

/* event listener for input in the incomeField

  calculate tax based on the values of incomefield and wealthfield
  update the taxfield with the new tax value

---------------------------------------------------------------------- */
incomeField.addEventListener('input', function(){
  let tax = calculateTax(incomeField.value, wealthField.value)
  updateTaxField(tax);
});

/* event listener for input in the wealthField

  calculate tax based on the values of incomefield and wealthfield
  update the taxfield with the new tax value

---------------------------------------------------------------------- */
wealthField.addEventListener('input', function(){
  let tax = calculateTax(incomeField.value, wealthField.value)
  updateTaxField(tax);
});

/* NOTE: for begge event-listerene hadde det kanskje vaert bedre aa
skrive om funksjonene, slik at man ikke bruker anonyme funksjoner */
