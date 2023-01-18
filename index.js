const form = document.querySelector('.contact_form');
function sendEmail(e){
    e.preventDefault();

   
    const name =  document.querySelector('.name'),
    email = document.querySelector('.email'),
    subject = document.querySelector('.subject'),
    message = document.querySelector('.message');

    Email.send({
      SecureToken : "3a57e32e-405f-49f6-b3ab-65e3c407174e",
      To : 'dummyjef11@gmail.com',
      From : email.value,
      Subject : subject.value,
      Body : message.value
  }).then(
    message => alert(message)
  ); 

}

form.addEventListener('submit',sendEmail );

