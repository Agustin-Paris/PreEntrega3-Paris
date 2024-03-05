document.getElementById('loginFormulario').addEventListener('submit', function(e) {
    e.preventDefault();
    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value; 

    if (usuario === "usuario" && password === "password"){ 
        localStorage.setItem("logCorrecto", true);

        window.location.href = '../index.html';
    } else {
        document.getElementById('mensajeLogin').innerText = "Credenciales incorrectas"; // Corregir el mensaje
    }
});

window.addEventListener('load', function() {
    if (localStorage.getItem('logCorrecto')) {
        window.location.href = "../index.html";
    }
});

console.log('hola');
