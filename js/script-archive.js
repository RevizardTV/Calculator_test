const insertNumber =(numberSent)=>{
    //const numberAdd=Number(calcButton.innerText);
    const currentValue=(Number(displayValue.innerText))*10;
    console.log("NumberAdd:",numberSent.toString());
    console.log("addNumber activated!");
    displayValue.innerText=(currentValue+numberSent).toString();

};

const addNumbers =()=>{
    console.log("Add numbers started")
    numberStore.innerText=(Number(numberStore)+Number(displayValue.innerText)).toString();
    displayValue.innerText="0";
}

const resetCalc=()=>{
    displayValue.innerText="0";
};

let storedNum=0;
const numberStore=document.getElementById("storedNum");

const consoleChecker=()=>console.log("1");
const consoleButton=document.getElementById("Console");
consoleButton.addEventListener("click",consoleChecker);


const displayValue=document.getElementById("calcNum");
displayValue.innerText="0";
const calcButtons=document.querySelector(".buttonGrid");

calcButtons.addEventListener("click",(event)=>{
    if(event.target.classList.contains("buttonItems")){
        console.log("Button pressed!");
        const value=event.target.innerText;
        if(!(Number.isNaN(Number(value))))
        {
            insertNumber(Number(value));
        }
        else if(value==="+")
        {
            addNumbers()
        }
        else if(value==="-")
        {

        }

    }



});




displayValue.addEventListener("click",()=>{console.log(1)});
console.log(1);

const resetter=document.getElementById("Reset");
resetter.addEventListener("click",()=>{displayValue.innerText=0;});

    /*
const consoleCheck=document.getElementById("Console");
consoleCheck.addEventListener("click",()=>{console.log("1")});
*/