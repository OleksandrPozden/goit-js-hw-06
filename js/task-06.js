const inputFieldRef = document.querySelector("input#validation-input");

inputFieldRef.addEventListener('blur', e => {
    if(e.currentTarget.dataset.length == e.currentTarget.value.trim().length){
        if (!e.currentTarget.classList.replace("invalid","valid")){
            e.currentTarget.classList.add("valid");
        }
    }
    else{
        if (!e.currentTarget.classList.replace("valid","invalid")){
            e.currentTarget.classList.add("invalid");
        }
    }
    console.log(e.currentTarget);
})