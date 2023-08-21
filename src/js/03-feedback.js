import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const textarea = document.querySelector("textarea[name='message']")
const STORAGE_KEY = "feedback-form-state"; 


form.addEventListener('input', throttle(onFormSubmit, 500))

returnTextarea()

function onFormSubmit(e){
    e.preventDefault();

    e.target.reset(); 
    localStorage.removeItem(STORAGE_KEY)
    
}

// form.addEventListener('input', onForm)

// function onForm(e){
//     formData[e.target.email] = e.target.value

//     console.log(formData)
// }

form.addEventListener('input', onTextareaInput)

form.addEventListener('submit', onTextareaInput)

function onTextareaInput(e){
    const value = e.target.value;
    
    console.log(value)

    localStorage.setItem(STORAGE_KEY, value)


}

function returnTextarea(){
    const returnMessage = localStorage.getItem(STORAGE_KEY)

    if(returnMessage){
        console.log(returnMessage);
        textarea.value = returnMessage;
    }
}