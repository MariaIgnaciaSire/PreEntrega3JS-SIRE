document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('loginButton');
    var loginForm = document.getElementById('loginForm');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();

        loginButton.style.display = 'none'; // Ocultar el botón de inicio de sesión
        loginForm.style.display = 'block'; // Mostrar el formulario al hacer clic en el botón
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Crear un objeto con los datos del usuario
        var userData = {
            username: username,
            password: password
        };

        // Verificar si ya existen datos de usuario almacenados
        var storedUserData = JSON.parse(localStorage.getItem('userData'));

        // Si ya existen datos de usuario, agregar los nuevos datos al array
        if (storedUserData && Array.isArray(storedUserData)) {
            storedUserData.push(userData);
        } else {
            // Si no hay datos de usuario almacenados, crear un nuevo array
            storedUserData = [userData];
        }

        // Convertir el array a una cadena JSON
        var userDataJSON = JSON.stringify(storedUserData);

        // Almacenar los datos del usuario en localStorage
        localStorage.setItem('userData', userDataJSON);

        // Redirigir a la página del cotizador después de iniciar sesión
        window.location.href = './Página/cotizador.html';
    });
});









