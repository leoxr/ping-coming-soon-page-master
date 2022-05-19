const email = document.getElementById('email');

const validate = () => {
    email.addEventListener('focusout', ()=> {
        let validateEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.value.match(validateEmail)){
        email.classList.remove('border-error');
        email.nextElementSibling.classList.add('hidden')
       
    
    } else {
        email.classList.add('border-error');
        email.nextElementSibling.classList.remove('hidden');
        email.classList.add('emailPh')
        email.placeholder = 'example@email/com';
  
    }
    })
    
}
validate()