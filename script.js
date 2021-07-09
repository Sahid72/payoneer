// "use strict"

// login button event handelar 
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    document.getElementById("login-area").style.display = "none";
   var transactionArea = document.getElementById("transaction-area");
   transactionArea.style.display = "block";
})



// making fn to update deposit and total balance
function updateBalance (id,input){

    const currentBalance = parseFloat(document.getElementById(id).innerText);
    // input balance 
    const inputBalance = parseFloat(document.getElementById(input).value) ;
    //   calculating total balance 
    const totalBalance = currentBalance + inputBalance;
    // pushing balance to right place 
    document.getElementById(id).innerText = totalBalance;
}

function vanishInput(id){
document.getElementById(id).value = "";
}
// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(event){

        updateBalance("deposit","depositAmount");
        updateBalance("balanceAmount","depositAmount");
        vanishInput("depositAmount");
})


// making function to calculate total withdraw and update total balance 
function withdrawBalance(id, input){
    const currentBalance = parseFloat(document.getElementById(id).innerText);
    const currentInput =parseFloat( document.getElementById(input).value );
    const totalBalance = currentBalance - currentInput;
    document.getElementById(id).innerText = totalBalance;
}

// withdraw btn Event handler 

const withdrawBtn = document.getElementById("withdrawbtn");
withdrawBtn.addEventListener("click", function(){

updateBalance("totalwithdraw","withdrawAmount");
withdrawBalance("balanceAmount","withdrawAmount")
    vanishInput("withdrawAmount");


})



  