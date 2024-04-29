const BreakfastMenu = document.querySelectorAll(".Breakfast")
const Launch = document.querySelectorAll(".Launch")
const Dinner = document.querySelectorAll(".Dinner")
const menu = document.querySelectorAll(".menu")
const btnList = document.querySelector("#btnList")
console.log(BreakfastMenu)
console.log(Dinner)
console.log(Launch)
console.log(btnList)

btnList.addEventListener("click", showMenu)

function showMenu(e) {
    if(e.target.tagName === "BUTTON"){
        
        let buttonName = e.target.innerText;
        console.log(buttonName)
        //버튼이름을 클래스에포함한 메뉴 요소만 보이고 
        //나머지는 숨김
        menu.forEach(menu => {
            if (buttonName === "All" || menu.classList.contains(buttonName)) {
                menu.style.display = "block";
            } else {
                menu.style.display = "none";
            }
        });
    }
    
}


