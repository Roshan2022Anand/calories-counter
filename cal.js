//accessing all the elements from the HTML document 
const totalCalories = document.getElementById("user-total-calories");
const breakfastBox = document.getElementById("breakfast");
const lunchBox = document.getElementById("lunch");
const snacksBox = document.getElementById("snacks");
const dinnerBox = document.getElementById("dinner");
const exerciseBox = document.getElementById("exercise");
const selectedOpt = document.getElementById("opts");
const optEnterBtn = document.getElementById("opt-enter");
const calcBtn = document.getElementById("calcBtn");
const netCalories = document.getElementById("result-calories");
const displayTotalCalories = document.getElementById("total-calories")
const displayConsumedCalories = document.getElementById("calories-consumed");
const displayBurnedCalories = document.getElementById("calories-burned");
//declaring all the global variable
let caloriesConsumed = 0;
let caloriesBurned = 0;
optEnterBtn.addEventListener("click" , ()=>{
    let option = selectedOpt.options[selectedOpt.selectedIndex];
    document.getElementById(option.value).innerHTML += `
    <label class="block-label">
    Name : <input type="text" required>
    Calories : <input type="number" max-length="6" class="input" required>
    </label>`;
    if(option.value != "exercise"){
        caloriesConsumed++;
    }else{
        caloriesBurned++;
    }
})
calcBtn.addEventListener("click" , ()=>{
    let totalConsumed = 0;
    let totalBurned = 0;
    if(totalCalories.value == ""){
        totalCalories.style = 'animation: error 400ms ease-in-out 0s 1;';
    }else{
        document.querySelector("#result-stats").style.display = "block";
        for(let i=0;i<caloriesConsumed;i++){
            let consumed = Number(document.getElementsByClassName("input")[i].value);
            totalConsumed += consumed;
        }
        for(let i=0;i<caloriesBurned;i++){
            let burned = Number(exerciseBox.getElementsByClassName("input")[i].value);
            totalBurned += burned;
        }
        let balance = totalCalories.value - totalConsumed + totalBurned;
        if(balance < 0){
            // surples
            netCalories.innerText = `${balance*-1} Calories surplus`
            netCalories.style.color = 'red';
        }else{
            // deficite
            netCalories.innerText = `${balance} Calories deficte`
        }
        displayTotalCalories.innerText = `${totalCalories.value} Total calories`;
        displayConsumedCalories.innerText = `${totalConsumed} Calories consumed`;
        displayBurnedCalories.innerText = `${totalBurned} calories burned`
    }
})