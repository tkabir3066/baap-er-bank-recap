/* 
1. add event listener to the withdraw button
2. get the withdraw amount from the withdraw input field
2.5- convert string withdraw amount to a number type

3. clear the withdraw input field after getting the value

4. get the previous withdraw total

5. calculate the new withdraw total and set the value to the withdraw total
6.get current balance total
7.calculate the new balance total and set it to the balance total element
*/

// step-1
document.getElementById("btn-withdraw").addEventListener("click", () => {
  // step-2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //   step-3

  withdrawField.value = "";

  // validation check
  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return;
  }

  // step-4
  const withdrawTotalElm = document.getElementById("withdraw-total");
  const previousWithdrawTotalAmountString = withdrawTotalElm.innerText;
  const previousWithdrawTotalAmount = parseFloat(
    previousWithdrawTotalAmountString
  );

  //step-5
  const newWithdrawTotalAmount =
    previousWithdrawTotalAmount + newWithdrawAmount;
  withdrawTotalElm.innerText = newWithdrawTotalAmount;

  // step-6

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
