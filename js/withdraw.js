document.getElementById("btn-withdraw").addEventListener("click", function () {

    const newWithdrawAmount = getInputFieldById("withdraw-field");
    const previousWithdrawAmount = getElementValueById("withdraw-total");

    const newWithdrawDispalyValue = newWithdrawAmount + previousWithdrawAmount;


    //New balance calculation
    const previousBalance = getElementValueById("balance-total");
    if (newWithdrawAmount > previousBalance) {
        alert("Ato taka nai!!!");
        return;
    } else {
        setElementNewValueById("withdraw-total", newWithdrawDispalyValue);

        const newBalance = previousBalance - newWithdrawAmount;
        setElementNewValueById("balance-total", newBalance);
    }


})