const p = document.getElementById("p");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus")

function showHide(){
    p.classList.toggle('show');
}

function plusShow(){
    plus.style.display = 'none';
    minus.style.display = 'flex'
}

function minusShow(){
    plus.style.display = 'flex';
    minus.style.display = 'none'
}