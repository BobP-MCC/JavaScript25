function addme() {
    first = document.getElementById("fname").value;
    last = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    
    person = {
        "first": first,
        "last": last,
        "email": email,
        "phone": phone
    }

    const jsonString = JSON.stringify(person);

    document.getElementById("json-value").innerHTML = jsonString;
}