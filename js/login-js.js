

const login_card = document.getElementsByClassName("login_card")[0]
const active_parent = document.getElementsByClassName("active_parent")[0]


const but_drop_down = document.getElementById("but_drop_down")
const close_login_card = document.getElementById("close_login_card")

// active_parent.classList.remove("actives")
// login_card.style.

// active_parent.style.Filter = "blur("+30 +"px)"

but_drop_down.addEventListener("click", show_login_card)
close_login_card.addEventListener("click", hidde_login_card)


function show_login_card(){

    active_parent.classList.add("actives")
    login_card.classList.remove("login_card_active")
    but_drop_down.classList.add("change_click")

}
function hidde_login_card(){
    active_parent.classList.remove("actives")
    login_card.classList.add("login_card_active")




}