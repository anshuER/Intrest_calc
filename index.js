console.log("hi");
//var value1=document.getElementById("bank-balance-1");
//console.log(value1);

function calculate(x) {}

function calc() {
  let bankBalance1 = Number(document.getElementById('bal1').value)
  let bankBalance2 = Number(document.getElementById('bal2').value)
  let bankBalance3 = Number(document.getElementById('bal3').value)

  let updateBankBalance1 = document.getElementById('val1')
  let updateBankBalance2 = document.getElementById('val2')
  let updateBankBalance3 = document.getElementById('val3')
  let bankBalances = [bankBalance1, bankBalance2, bankBalance3]

  for(let i = 0; i < bankBalances.length; i++){
    bankBalances[i] = Number(bankBalances[i])
    if(bankBalances[i] > 200000){
      bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1
      bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.002
    } else if (bankBalances[i] > 100000 ) {
      bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.05
      bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.0005
    } else {
      bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03
    }
  }

  updateBankBalance1.value = bankBalances[0]
  updateBankBalance2.value = bankBalances[1]
  updateBankBalance3.value = bankBalances[2]

}
