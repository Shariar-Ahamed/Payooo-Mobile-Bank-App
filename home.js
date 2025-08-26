const validPin = 1234;

//Note function to get innerText (availabeBalance getInnerText)
  function getInnerText(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);

    return elementValueNumber;
  }


//Note functon to set innerText
  function setInnerText(value){
    const availabeBalanceElement = document.getElementById("availabe-balance");
    availabeBalanceElement.innerText = value;
  }




//Todo ------add money feature------
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("first");
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);

    // const availabeBalance = parseInt(document.getElementById("availabe-balance").innerText);
    const availabeBalance = getInnerText("availabe-balance")

    //* Current information
    if(accountNumber.length <11) {
      alert("Please provide valid account number");
      return;
    }

    if(pin !== validPin ){
      alert("Please provide valid pin number")
      return;
    }

    const totalNewAvaiableBalance = amount + availabeBalance;

    // document.getElementById("availabe-balance").innerText = totalNewAvaiableBalance
    setInnerText(totalNewAvaiableBalance);
  });




//Todo------Toggling feature------

  document.getElementById("add-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"

  })

  document.getElementById("cash-out-button").addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"

  })




//Todo ------Cashout money feature------
  document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault()
    
    const amount = parseInt (document.getElementById("withdraw-amount").value);
    // const availabeBalance = parseInt(document.getElementById("availabe-balance").innerText);
    const availabeBalance = getInnerText("availabe-balance");

    //* Current validation information
    const validPin = 1234;
    const agentNumber = document.getElementById("agent-number").value.trim(); // ফাঁকা স্পেস বাদ
    const pin = parseInt(document.getElementById("withdraw-pin").value);
    
    if(agentNumber.length !== 11 || isNaN(agentNumber)) {
      alert("Please provide valid 11 digit account number");
      return;
    }

    if(pin !== validPin ){
      alert("Please provide valid 4 Dugit Pin number")
      return;
    }

    if(amount > availabeBalance){
    alert("Not enough balance to withdraw");
    return;
    }

    const totalNewAvaiableBalance = availabeBalance - amount;

    // document.getElementById("availabe-balance").innerText = totalNewAvaiableBalance;
    setInnerText(totalNewAvaiableBalance);
})