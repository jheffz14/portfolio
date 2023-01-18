const form = document.querySelector('.contact_form');
function sendEmail(e){
    e.preventDefault();

   
    const name =  document.querySelector('.name'),
    email = document.querySelector('.email'),
    subject = document.querySelector('.subject'),
    message = document.querySelector('.message');

    Email.send({
      SecureToken : "89753ebc-f111-48cb-b2a0-e8e069b4ab8c",
      To : 'dummyjef11@gmail.com',
      From : email.value,
      Subject : subject.value,
      Body : message.value
  }).then(
    message => alert(message)
  ); 

}

form.addEventListener('submit',sendEmail );

