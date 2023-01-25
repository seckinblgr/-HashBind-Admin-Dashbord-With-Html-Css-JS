function checkAdmin(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; 
 

    if (email ==="" || password ==="") {
        alert("Lütfen Alanları Doldurunuz !")
    }
    else if(!(email ==="admin@hashbind.com" && password ==="admin1234")) {   
        alert("Kullanıcı Adı veya Şifre Yanlış !")
    }
    else if(email === "admin@hashbind.com" && password === "admin1234") {   
        setTimeout(() => {
            location.href ="./overview.html"
        }, 1500); 
    }
    
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}


//admin bilgileri
//admin@hashbind.com
//admin1234