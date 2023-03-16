document.getElementById("btn-withdraw").addEventListener("click", function () {
    
    const newWithdrawAmount = getInputFieldById("withdraw-field");
    const previousWithdrawAmount = getElementValueById("withdraw-total");
    if (newWithdrawAmount > previousWithdrawAmount) {
        alert("Ato taka nai!!!");
        return;
    }
    const newWithdrawDispalyValue = newWithdrawAmount + previousWithdrawAmount;

    setElementNewValueById("withdraw-total", newWithdrawDispalyValue);

    //New balance calculation
    const previousBalance = getElementValueById("balance-total");
    const newBalance = previousBalance - newWithdrawAmount;
    setElementNewValueById("balance-total", newBalance);

})