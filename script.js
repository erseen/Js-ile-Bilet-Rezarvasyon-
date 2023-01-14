const container=document.querySelector(".container");
const count=document.getElementById('count');
const amoun=document.getElementById('amount');
const select=document.getElementById('movie');


container.addEventListener("click",function(e){
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
        calculatetotal();
    
    }    

    });

function calculatetotal(){
    let selectedSeatCount=container.querySelectorAll('.seat.selected').length;
    let price=select.value;
    count.innerText=selectedSeatCount;
    amount.innerText=selectedSeatCount*price;
    
}