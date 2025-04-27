let form = document.getElementById('form');
console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById('email').value;
    let password = document.getElementById('pwd').value;

    if (username == '' || password == '') {
        alert("Both fields are mandatory");
    } else {
        alert("Logged Successfully");
        window.location.reload();
    }
});

let password = document.getElementById('pwd');
let show_pwd = document.getElementById('show_pwd');
let emoji = document.getElementById('emoji');

show_pwd.addEventListener("click", (e) => {
    e.preventDefault();
    if (password.value != "") {
        if (password.type === "password") {
            password.type = "text";
            show_pwd.innerHTML = "Hide Password";
            emoji.innerHTML = "🙈";
        } else {
            password.type = "password";
            show_pwd.innerHTML = "Show Password";
            emoji.innerHTML = "🐵";
        }
    } else {
        alert("Heyy!!, please enter your password");
    }
});

let username = document.getElementById('email');
let submit_btn = document.getElementById("submit_btn");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");

username.addEventListener("keyup", () => {
    let validation = username.value.length < 8;
    if (validation) {
        username.classList.add("warning");
        username.classList.remove("success");
        submit_btn.disabled = true;
        error1.innerHTML = "Please enter at least 8 characters";
    } else {
        username.classList.add("success");
        username.classList.remove("warning");
        submit_btn.disabled = false;
        error1.innerHTML = "";
    }
});

password.addEventListener("keyup", () => {
    let validation = password.value.length < 8;
    if (validation) {
        password.classList.add("warning");
        password.classList.remove("success");
        submit_btn.disabled = true;
        error2.innerHTML = "Please enter at least 8 characters";
    } else {
        password.classList.add("success");
        password.classList.remove("warning");
        submit_btn.disabled = false;
        error2.innerHTML = "";
    }
});
