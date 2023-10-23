// Todo list
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delite";

        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        checkbox.onchange = function () {
            if (checkbox.checked) {
                taskLabel.style.textDecoration = "line-through";
            } else {
                taskLabel.style.textDecoration = "none";
            }
        };

        li.appendChild(checkbox);
        li.appendChild(taskLabel);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

document.getElementById("addButton").addEventListener("click", addTask);


//registration
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function (event) {
        let errors = [];

        if (nameInput.value.trim() === '') {
            errors.push('Name is required');
        }

        if (emailInput.value.trim() === '') {
            errors.push('Email is required');
        } else if (!isValidEmail(emailInput.value)) {
            errors.push('Invalid email format');
        }

        if (passwordInput.value.trim() === '') {
            errors.push('Password is required');
        }

        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission
            errorMessages.innerHTML = errors.join('<br>');
        } else {
            errorMessages.innerHTML = ''; // Clear any previous error messages
        }
    });

    function isValidEmail(email) {
        // This is a simple email validation function, you can use a more complex one if needed.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Prevent form submission when the input fields lose focus
    nameInput.addEventListener('blur', function () {
        if (nameInput.value.trim() === '') {
            errorMessages.innerHTML = 'Name is required';
        } else {
            errorMessages.innerHTML = '';
        }
    });

    emailInput.addEventListener('blur', function () {
        if (emailInput.value.trim() === '') {
            errorMessages.innerHTML = 'Email is required';
        } else {
            errorMessages.innerHTML = '';
        }
    });

    passwordInput.addEventListener('blur', function () {
        if (passwordInput.value.trim() === '') {
            errorMessages.innerHTML = 'Password is required';
        } else {
            errorMessages.innerHTML = '';
        }
    });
});


//timer

let countdownInterval;
let currentTime = 0;
const timerDisplay = document.getElementById('timer');
const durationInput = document.getElementById('duration');

function startTimer() {
    clearInterval(countdownInterval);

    const duration = parseInt(durationInput.value);

    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid duration.');
        return;
    }

    currentTime = duration;
    updateTimerDisplay();
    countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (currentTime > 0) {
        currentTime--;
        updateTimerDisplay();
    } else {
        clearInterval(countdownInterval);
        alert('Timer has ended!');
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
}

//Script for accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Function for tab
function openCity(evt, playerName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(playerName).style.display = "block";
    evt.currentTarget.className += " active";
}
