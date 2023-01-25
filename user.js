let name = document.getElementById("name")
let userName = document.getElementById("username")
let email = document.getElementById("email")
let city = document.getElementById("city")
let street = document.getElementById("street")
let photo = document.getElementById("image")

let data = fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    users.forEach(element => {
        name.innerHTML = element.name; 
        userName.innerHTML = element.username;
        email.innerHTML = element.email;
        city.innerHTML = element.address.city;
        street.innerHTML = element.address.street;   
    }); 
});

let image = fetch("https://jsonplaceholder.typicode.com/photos")
.then(response => response.json())
.then(img => {
    img.forEach(element => {
        photo.innerHTML = element.thumbnailUrl;
    });
});