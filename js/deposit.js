/* 
1. Add event listener to the deposit button
2. get deposit amount from the deposit input field
2-5. convert string deposit amount to a number type

3. clear the deposit input field after getting the value
4. get the previous deposit total
5. calculate the new deposit total and set the value to the deposit total
6.get current balance total
7.calculate the new balance total and set it to the balance total element
*/

//step-1
document.getElementById("btn-deposit").addEventListener("click", () => {
  //step-2
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  //step-2.5
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step-3
  depositField.value = "";

  // validation check
  if (isNaN(newDepositAmount)) {
    alert("please provide a valid number");
    return;
  }
  // step-4

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalAmountString = depositTotalElement.innerText;
  const previousDepositTotalAmount = parseFloat(
    previousDepositTotalAmountString
  );

  //  step-5
  const newDepositTotal = previousDepositTotalAmount + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  //step-6:
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  console.log(previousBalanceTotal);

  // step-7:
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
