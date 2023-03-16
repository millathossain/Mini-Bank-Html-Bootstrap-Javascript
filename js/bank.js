


// Deposite calculation
document.getElementById("btn-deposite").addEventListener("click", function () {
    // get amount from input field
    const depositField = document.getElementById("deposite-field");
    const newDepositeAmount = parseFloat(depositField.value);
    // console.log(typeof newDepositeAmount);

    // Get previous Deposite amount
    const depositeTotalElement = document.getElementById("deposite-total");
    const previousDepositAmount = parseFloat(depositeTotalElement.innerText);

    // display deposite amount with update
    const displayDeposite = newDepositeAmount + previousDepositAmount;
    depositeTotalElement.innerText = displayDeposite;
    // console.log(depositTotal)

    // get balance elemnet and update
    const balanceElement = document.getElementById("balance-total");
    const previousBalance = parseFloat(balanceElement.innerText);

    const currentBalance = newDepositeAmount + previousBalance;
    balanceElement.innerText = currentBalance;


    // Clear input field
    depositField.value = "";
})


// Withdraw calculation
document.getElementById("btn-withdraw").addEventListener("click", function () {
     
    const withdrawField = document.getElementById("withdraw-field");
    const newWithDrawAmount = parseFloat(withdrawField.value);
    
    const withdrawElement = document.getElementById("withdraw-total");
    const previousWithdrawAmount = parseFloat(withdrawElement.innerText);

    const displayWithdraw = newWithDrawAmount + previousWithdrawAmount;
    withdrawElement.innerText = displayWithdraw;

    const balanceElement = document.getElementById("balance-total");
    const previousBalance = parseFloat(balanceElement.innerText);

    
    const currentBalance = previousBalance - newWithDrawAmount;
    balanceElement.innerText = currentBalance;


  
    withdrawField.value = "";
})