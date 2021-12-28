const formRef = document.querySelector(".login-form");

formRef.addEventListener('submit', submitHandler);

function submitHandler(e){
    e.preventDefault();
    const fieldsRef = e.currentTarget.elements;
    const email = fieldsRef.email.value.trim();
    const password = fieldsRef.password.value.trim();

    if(!email || !password){
        alert("Все поля должны быть заполнены!")
        return false;
    }
    
    const resultData = {
        email,
        password
    }
    console.log(resultData)
    e.currentTarget.reset();
}
