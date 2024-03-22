class NotaAlumnos{
    constructor(id, apellido,nombre, nota1, nota2, nota3){
        this.id = id,
        this.apellido = apellido,
        this.nombre = nombre,
        this.nota1 = nota1,
        this.nota2 = nota2,
        this.nota3 = nota3
    }
} 
const alumnosArray = [
    new NotaAlumnos("1","Martinez","Pedro",4,8,10),
    new NotaAlumnos("2", "Gomez", "Maria", 7, 9, 8),
    new NotaAlumnos("3", "Lopez", "Juan", 6, 6, 7),
    new NotaAlumnos("4", "Rodriguez", "Ana", 9, 8, 7),
    new NotaAlumnos("5", "Fernandez", "Luis", 6, 7, 8),
    new NotaAlumnos("6", "Perez", "Laura", 8, 9, 10),
    new NotaAlumnos("7", "Gonzalez", "Sofia", 5, 6, 7),
    new NotaAlumnos("8", "Diaz", "Carlos", 8, 7, 6),
    new NotaAlumnos("9", "Sanchez", "Pablo", 7, 8, 9),
    new NotaAlumnos("10", "Rojas", "Marina", 9, 9, 9),
]


const alumnosContainer = document.getElementsByClassName('alumnos-container')[0]; // Asegúrate de obtener el primer elemento si hay varios con la misma clase

function agregarCards(alumnos) {
 
    alumnosContainer.innerHTML = '';
    alumnos.forEach(alumno => {
       
        const card = document.createElement('div');
        card.classList.add('card');
        const promedio = (alumno.nota1 + alumno.nota2 + alumno.nota3) / 3;
        card.style.backgroundColor = promedio >= 7 ? 'green' : 'red';
        card.innerHTML = `
            <ul>
                <li ><p>${alumno.id}</p></li>
                <li><h3>${alumno.apellido}</h3></li>
                <li><h3>${alumno.nombre}</h3></li>
                <li><p>${alumno.nota1}</p></li>
                <li><p>${alumno.nota2}</p></li>
                <li><p>${alumno.nota3}</p></li>
                <li><p>Promedio: ${promedio.toFixed(2)}</p></li>
            </ul>
        `;
        alumnosContainer.appendChild(card);
    });
}

document.getElementById('buscarBtn').addEventListener('click', function() {
    const busqueda = document.getElementById('buscarAlumno').value.toLowerCase();
    const resultadosBusqueda = alumnosArray.filter(alumno => 
        alumno.id.toLowerCase().includes(busqueda) || 
        alumno.nombre.toLowerCase().includes(busqueda) || 
        alumno.apellido.toLowerCase().includes(busqueda)
    );
    agregarCards(resultadosBusqueda);
});

document.getElementById('buscarAlumno').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('buscarBtn').click();
    }
});



document.getElementById('formularioAlumno').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const id = document.getElementById('id').value;
    const apellido = document.getElementById('apellido').value;
    const nombre = document.getElementById('nombre').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    const nuevoAlumno = new NotaAlumnos(id, apellido, nombre, nota1, nota2, nota3);
    alumnosArray.push(nuevoAlumno);
    alumnosContainer.innerHTML = '';
    agregarCards(alumnosArray); 

    document.getElementById('formularioAlumno').reset();
});


document.getElementById('buscarBtn').addEventListener('click', function() {
    const busqueda = document.getElementById('buscarAlumno').value.toLowerCase();
    const resultadosBusqueda = alumnosArray.filter(alumno => 
        alumno.id.toLowerCase().includes(busqueda) || 
        alumno.nombre.toLowerCase().includes(busqueda) || 
        alumno.apellido.toLowerCase().includes(busqueda));
    agregarCards(resultadosBusqueda);
});

document.getElementById('buscarAlumno').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('buscarBtn').click();
    }
});


agregarCards(alumnosArray);



