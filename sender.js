const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const nameWarning = document.getElementById("name-warning");
const emailWarning = document.getElementById("email-warning");
const messageWarning = document.getElementById("message-warning");
const button = document.getElementById("send-button");

nameField.addEventListener('change', (event) => {
    if (event.target.value.length > 0) {
        nameWarning.style.display = 'none';
    }
});

emailField.addEventListener('change', (event) => {
    if (event.target.value.length > 0) {
        emailWarning.style.display = 'none';
    }
});

messageField.addEventListener('change', (event) => {
    if (event.target.value.length > 0) {
        messageWarning.style.display = 'none';
    }
});

const req = new XMLHttpRequest();
req.timeout = 1000;

button.onclick = () => {
    button.innerText = "Send";
    if (nameField.value.length == 0 || emailField.value.length == 0 || messageField.value.length == 0) {
        
        if (nameField.value.length == 0) {
            nameWarning.style.display = 'initial';
        }

        if (emailField.value.length == 0) {
            emailWarning.style.display = 'initial';
        }

        if (messageField.value.length == 0) {
            messageWarning.style.display = 'initial';
        }
    } else {
        let data = {
            name: nameField.value,
            email: emailField.value,
            message: messageField.value
        }

        let json = JSON.stringify(data);
    
        req.open("POST", "https://www.joserigel.me/contactme");
        req.setRequestHeader("Content-Type", "application/json");
        req.send(json);
    }
}

req.ontimeout = handleError;
req.onerror = handleError;

function handleError() {
    showError('Could not send form', false);
}

req.onreadystatechange = () => {
    if (req.readyState == 4) {
        showError('Message Sent!', true);
    }
}