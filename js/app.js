const libros = [
    {
        "titulo": "El principito",
        "autor": "Antoine de Saint-Exupéry",
        "genero": "Novela infantil",
        "year": "1943"
    },
    {
        "titulo": "1984",
        "autor": "George Orwell",
        "genero": "Ciencia Ficción",
        "year": "1949"
    },
    {
        "titulo": "Viaje al centro de la tierra",
        "autor": "Julio Verne",
        "genero": "Ciencia Ficción",
        "year": "1862"
    },
    {
        "titulo": "Moby Dick",
        "autor": "Herman Melville",
        "genero": "Novela de aventuras",
        "year": "1851"
    },
    {
        "titulo": "La guerra de los mundos",
        "autor": "H G Wells",
        "genero": "Ciencia Ficción",
        "year": "1898"
    },
    {
        "titulo": "El amor en los tiempos de cólera",
        "autor": "Gabriel Garcia Marquez",
        "genero": "Novela de amor",
        "year": "1985"
    },
    {
        "titulo": "EL extraño caso del doctor Jekyll y el señor Hyde",
        "autor": "Robert Louis Stevenson",
        "genero": "Ciencia Ficción",
        "year": "1886"
    }
];

for (const libro of libros) {
    if(libro.genero === "Ciencia Ficción" && libro.year < 1900){
        document.querySelector("#box").insertAdjacentHTML("beforeend",`
            <div class="libro">
                <h1>${libro.titulo}</h1>
                <h2>${libro.autor}</h2>
                <p>Genero: ${libro.genero} - Año: ${libro.year}</p>
            </div>
        `);
    }
    
}