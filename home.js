document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("first");
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = document.getElementById("add-pin").value;

    const availabeBalance = parseInt(document.getElementById("availabe-balance").innerText);

    const totalNewAvaiableBalance = amount + availabeBalance;

    document.getElementById("availabe-balance").innerText = totalNewAvaiableBalance
  });
