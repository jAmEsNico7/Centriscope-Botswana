const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}
function sendEmail(){
    Email.send({
         Host:"smtp.gmail.com",
         Username:" ",
         Passowrd: "password",
         To:'info@centriscope.co.bw',
         From:document.getElementById("email").value,
         Subject:"This is the subject",
         Body: "Name:"+ document.getElementById("name").value
         +"<br> Email:"+ document.getElementById("email").value
         +"<br> Phone Number:"+ document.getElementById("phone").value
         +"<br> Message:"+ document.getElementById("message").value
        
        }). then(
        message=> alert(message)

    );
}