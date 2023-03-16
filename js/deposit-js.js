document.getElementById("btn-deposite").addEventListener("click", function () {

    const newDepositAmount = getInputFieldById("deposite-field");
    if (isNaN(newDepositAmount) || newDepositAmount<0) {
        alert("Invalid Input(NaN)");
        return;
    }
    const previousDeposit = getElementValueById("deposite-total");

    const newDepositTotal = newDepositAmount + previousDeposit;
    setElementNewValueById("deposite-total", newDepositTotal);

    // new Balance calculation
    const previousBalance = getElementValueById("balance-total");
    const newBalance = previousBalance + newDepositAmount;
    setElementNewValueById("balance-total", newBalance);

})