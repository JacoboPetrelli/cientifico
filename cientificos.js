urlImg = ["https://www.biografiasyvidas.com/biografia/v/fotos/volta.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aEvNJB0n_bH2ej7NruvxhZFDqq1hKf7UhGbFMhORCmye0oMBErMJKOmCG1YZZi5exWw&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpAi2fZ7otpWqc5MYSnAGul43SwLKxPbdUQ&usqp=CAU"]
nombres = ["Alessandro Volta", "Isaac Newton", "Charles Darwin"]
html = " "
for (i = 0; i<3; i++){
    html = html + `<div class = cientifico><img src = "${urlImg[i]}"/><p>${nombres [i]}</p></div>`
}
contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = html