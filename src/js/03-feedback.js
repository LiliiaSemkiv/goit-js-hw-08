import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textareaEl = form.querySelector("textarea[name='message']");
const emailEl = form.querySelector("input[name='email']");
const STORAGE_KEY = "feedback-form-state";
const formData = {
    email: "",
    message: ""
};

form.addEventListener('input', throttle(onFieldInput, 500));
form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', onLoadPage);

function onFormSubmit(e) {
    e.preventDefault();
    
    if (formData.email.trim() !== "" && formData.message.trim() !== "") {
        console.log(formData);
        form.reset();
        localStorage.removeItem(STORAGE_KEY);
        clearFormData();
    }
}

function onFieldInput(e) {
    const { value, name } = e.target;
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onLoadPage() {
    const returnData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (returnData) {
        emailEl.value = returnData.email;
        textareaEl.value = returnData.message;
        formData.email = returnData.email;
        formData.message = returnData.message;
    }
}

function clearFormData() {
    formData.email = "";
    formData.message = "";
}