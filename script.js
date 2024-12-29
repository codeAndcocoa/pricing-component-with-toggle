"use strict";
const toggleBtn = document.getElementById("price-switch");
const numberNine = document.querySelectorAll(".nine");

const displayNine =() => {
    if(toggleBtn.checked) {
        numberNine.forEach((num) => {
            num.style.display = "inline-block";
          });
      }else{
        numberNine.forEach((num) => {
            num.style.display = "none";
          });
      }
};

document.addEventListener("DOMContentLoaded",()=>{

    toggleBtn.addEventListener("change", () => {
        displayNine();
      });

      document.addEventListener('keydown', (e) => {
        if(e.key == 'ArrowRight'){
            toggleBtn.checked = true;
            displayNine();
        }
        else if(e.key == 'ArrowLeft'){
            toggleBtn.checked = false;
            displayNine();
        }
      })
      
      
});