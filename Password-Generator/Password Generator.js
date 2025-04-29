let lenghtSlide = document.getElementById("lenghtSlide");
let sliderValue = document.getElementById("sliderValue");
let password = document.getElementById("password");
let upperCase = document.getElementById("upperCase");
let lowerCase = document.getElementById("lowerCase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let generator = document.getElementById("generator");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = lenghtSlide.value;//textContent and innerHTML are same but different in just some characterstics
lenghtSlide.addEventListener('input' , ()=>{
    sliderValue.textContent = lenghtSlide.value;

})//On which button or part you click so the "addEventListener" will apply on that button..
//e.g : lenghtSlide is a slide which you click or slide

generator.addEventListener('click',()=>{
    password.value=generateButton();//jis me show karwani ho usko pehle likhte jese hum ne password ko pehle likha
    //On which button or part you click so the "addEventListener" will apply on that button..
//e.g : generator is a button which you click..

})
let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*."//When checkboxes are selected, you will pick from these strings to form your password.


//Funtion to generate a button
function generateButton() {
    let genButton = "";//this button will store the final password
    let allChar = "";//it is used to combine all the selected characters
    allChar += upperCase.checked ? upperAlpha : "";
    allChar += lowerCase.checked ? lowerAlpha : "";//If lowerCase.checked is false (checkbox is not ticked), then add "" (nothing) to allChar.
    //if the checkbox is not selected so you still have to return something so in this case of nothing you used this term of empty strings "" whithout ist you will get error
    allChar += numbers.checked ? allNumbers : "";
    allChar += symbols.checked ? allSymbols : "";//Using Ternary condition (condition ? true : false).you check which checkboxes are ticked.If ticked,so add that group of characters to the allchar
    if(allChar == "" || allChar.length == 0){
        return genButton;
    }
    let i = 1;
    while(i<=lenghtSlide.value){
        genButton += allChar.charAt(Math.floor(Math.random() * allChar.length));//
        // let score = 10;
        //score += 5; // (same as score = score + 5)
        i++;
    }
    //we multiply the Math.random() with a number for how much lenght we needed.
    //Math.floor give us single value
    return genButton;

}
copyIcon.addEventListener('click', () => {
  
        navigator.clipboard.writeText(password.value);
        copyIcon.title = "copied";

});
