const inputs = document.querySelectorAll('input[type= "text"], input[type="password"]');

const pseudoChecker = (value) => {
   const pseudoContainer = document.querySelector('.pseudoContainer');
   const errorDisplay = document.querySelector('pseudo-countainer > span');

   if (value.length > 0 && (value.length < 3 || value.length > 20))
   {
       pseudoContainer.classList.add("error");
       errorDisplay.textContent = "Le pseudo doit faire entre 3 et 20 caractéres";
   } else if (!value.match(/^[a-zA-Z0-9_.]*$/)) {
       pseudoContainer.classList.add("error");
       errorDisplay.textContent = 
       "Le pseudo ne doit pas contenir de caractéres spéciaux";
   } else{
       pseudoContainer.classList.remove("error");
       errorDisplay.textContent = "";
   }
};

const emailChecker = (value) => {
    console.log(value);
};

const passwordChecker = (value) => {
    console.log(value);
};

const confirmChecker = (value) => {
    console.log(value);
};

inputs.forEach((inputs) => {
    inputs.addEventListener('input', (e) =>{
        switch(e.target.id){
            case "pseudo":
                pseudoChecker(e.target.value);
                break;
            case "email":
               emailChecker(e.target.value);
               break;
            case "password":
                passwordChecker(e.target.value);
                break;
            case "confirm" :
                confirmChecker(e.target.value);
                break;
                default:
                    nul;

        }
       
    });
});
