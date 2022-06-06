// var a=0
// var amount= document.getElementById('amount').addEventListener("submit",function(){

//     console.log("add"+ amount)
// })



document.querySelector('#form').addEventListener('submit',submitFunction);
var data=JSON.parse(localStorage.getItem('user')) || [];
function userDetails(name,email,address,amount){
    this.name = name;
    this.email=email;
    this.address= address;
    this.amount=amount;
}

function submitFunction(){

    event.preventDefault();

    
    var name= document.querySelector('#name').value;
    var email= document.querySelector('#email').value;
    var address= document.querySelector('#address').value;
    var amount= document.querySelector('#amount').value;

    let dataObj = new userDetails(name,email,address,amount);
    data.push(dataObj)
    localStorage.setItem('user', JSON.stringify(data));
    // name='';
    // email='';
    // address='';
    // amount='';

}