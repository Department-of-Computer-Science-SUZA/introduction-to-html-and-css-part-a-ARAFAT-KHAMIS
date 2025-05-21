
  function validateCard() {
    const cardNum = document.getElementById("cardNumber").value.trim();
    const errorDiv = document.getElementById("error");
    const successDiv = document.getElementById("success");
    errorDiv.innerText = "";
    successDiv.innerText = "";

 
    const patterns = [
      { type: "American Express", regex: /^3[47][0-9]{13}$/ },
      { type: "MasterCard", regex: /^5[1-5][0-9]{14}$/ },
      { type: "VISA", regex: /^4([0-9]{12}|[0-9]{15})$/ },
      { type: "Discover", regex: /^6011[0-9]{11,12}$/ },
      { type: "Diners Club", regex: /^30[0-5][0-9]{11,13}$/ }
    ];

    for (let pattern of patterns) {
      if (pattern.regex.test(cardNum)) {
        successDiv.innerText = `Valid ${pattern.type} card`;
        return false; 
      }
    }

    errorDiv.innerText = "Invalid credit card number. Please check your entry.";
    return false;
  }
