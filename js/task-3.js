const userName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

userName.addEventListener('input', (e) => {
    if (e.currentTarget.value === "") {
        nameOutput.textContent = "Anonymous"
    } else {
        nameOutput.textContent = e.currentTarget.value.trim();
    }
    
}) 