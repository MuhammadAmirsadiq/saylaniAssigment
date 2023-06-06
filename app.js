let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
let product = document.getElementById("product-title");



function submitButton() {


  tempAmount = totalAmount.value;
  //empty or negative input
  if (tempAmount === "" || tempAmount < 0) {
    alert("Value cannot be empty or negative");
  } else {

    //Set Budget
    amount.innerHTML = tempAmount;
    //Set Balance
    balanceValue.innerText = tempAmount - userAmount.innerText;
    //Clear Input Box
    totalAmount.value = "";
  }
};

   //arrayForObject = []
function addMore() {
  
  


  let product = document.getElementById("product-title").value;
  let amount = document.getElementById("user-amount").value;
  let date = document.getElementById("date").value;
  let Discription = document.getElementById("Discription").value;
  let Pdate = document.getElementById("Pdate").value;
  
  
  if ( amount < 0 || amount === "" && product==="" && date==="" && Discription ==="" && Pdate==="" ) {
    alert("Value cannot be empty or negative");
  } else {
  

   let expense = document.getElementById("list");

  let expenditure = parseInt(amount);

  let sum = parseInt(expenditureValue.innerText) + expenditure;
  expenditureValue.innerText = sum;

 const totalBalance = tempAmount - sum;
 balanceValue.innerText = totalBalance;

  let box = document.createElement("div");
  box.classList.add("flex")
  expense.appendChild(box);
  // box.innerHTML = `<p class="product">${date}</p><p class="amount">${amount}</p><p class="amount">${product}</p><p class="amount">${Discription}</p><p class="amount">${Pdate}</p> `;

  const obj=[
    {
      date:date,
      product:product,
      amount:amount,
      dis: Discription,
      pdate:Pdate


    },
  ]
  const obj2=obj.map(paste);
function paste(a){
  box.innerHTML = `<p class="product">${a.date}</p><p class="amount">${a.amount}</p><p class="amount">${a.product}</p><p class="amount">${a.dis}</p><p class="amount">${a.pdate}</p> `;

}



//  obj.push(date,amount,product,Discription,Pdate);


}

document.getElementById("product-title").value="";
document.getElementById("user-amount").value="";
 document.getElementById("date").value="";
 document.getElementById("Discription").value="";
 document.getElementById("Pdate").value="";
}



