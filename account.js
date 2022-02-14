// For Deposit and update balance
document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputDeposit = document.getElementById('deposit-field').value;
    const currentBalance = document.getElementById('balance-dollar').innerText;
    const previousDeposit = document.getElementById('deposit-dollar').innerText;
    let currentBalanceNumber = Number(currentBalance);
    let inputDepositNumber = Number(inputDeposit);
    if (!isNaN(inputDepositNumber)) {
        let totalDeposit = Number(previousDeposit)+Number(inputDeposit);
        document.getElementById('deposit-dollar').innerText = totalDeposit;
        currentBalanceNumber += inputDepositNumber;
        document.getElementById('balance-dollar').innerText = currentBalanceNumber;
        document.getElementById('deposit-field').value = '';
    }
    else {
        alert("Please enter number as a amount");
    }
});
// For withdraw and update balance
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const inputWithdraw = document.getElementById('withdraw-field').value;
    const currentBalance = document.getElementById('balance-dollar').innerText;
    const previousWithdraw = document.getElementById('withdraw-dollar').innerText;
    let currentBalanceNumber = Number(currentBalance);
    let inputWithdrawNumber = Number(inputWithdraw);
    if (!isNaN(inputWithdrawNumber)) {

        let totalWithdraw = Number(previousWithdraw)+Number(inputWithdraw);

        document.getElementById('withdraw-dollar').innerText = totalWithdraw;
        currentBalanceNumber -= inputWithdrawNumber;
        document.getElementById('balance-dollar').innerText = currentBalanceNumber;
        document.getElementById('withdraw-field').value = '';
    }
    else {
        alert("Please enter number as a amount");
    }
});