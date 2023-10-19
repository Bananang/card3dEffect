const card = document.querySelectorAll(".card");
const card_list = document.querySelectorAll(".card_inner");

window.addEventListener("load", ()=>{
    card.forEach(el => {
        el.classList.add("active");
    });
});

card_list.forEach( el => {
    el.addEventListener("click", (e)=>{
        e.currentTarget.classList.toggle("flipped");
    });
});


