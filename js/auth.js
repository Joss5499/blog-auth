const registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const user = {
            name,
            email,
            password
        };

        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Usuario registrado correctamente");

        window.location.href = "login.html";

    });

}
const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userFound = users.find(user => 
            user.email === email && user.password === password
        );

        if(userFound){

            localStorage.setItem("loggedUser", JSON.stringify(userFound));

            alert("Inicio de sesión exitoso");

            window.location.href = "dashboard.html";

        }else{

            alert("Correo o contraseña incorrectos");

        }

    });

}
const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.addEventListener("click", function(){

        localStorage.removeItem("loggedUser");

        alert("Sesión cerrada");

        window.location.href = "login.html";

    });

}