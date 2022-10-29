AOS.init({
  duration: 1200,
});

(function (){
  emailjs.init("user_u91gztpRrID-R71OI");
})();

function sendEmail(e){
  e.preventDefault();
  let name = document.getElementsByClassName("name")[0].value;
  let email = document.getElementsByClassName("email")[0].value;
  let msg = document.getElementsByClassName("msg")[0].value;

    var contactParams = {
      fullname : name,
      emailid : email,
      message : msg
      
    };
    console.log(contactParams);
    emailjs.send('service_avzu5ub','template_t84mfbr',contactParams).then(function (res) {console.log(res);})
}