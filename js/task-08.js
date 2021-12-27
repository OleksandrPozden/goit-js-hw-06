const formRef = document.querySelector(".login-form");

formRef.addEventListener('submit', submitHandler);

function submitHandler(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const resultData = {}
    formData.forEach((value,key)=>{
        resultData[key] = value;
    })
    for(const key in resultData){
        if(!resultData[key]){
            alert("Все поля должны быть заполнены!");
            return false;
        }
    }
    console.log(resultData)
    e.currentTarget.reset();
}
