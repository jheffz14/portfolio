const form = document.querySelector('.contact_form');
function sendEmail(e){
    e.preventDefault();

   
    const name =  document.querySelector('.name'),
    email = document.querySelector('.email'),
    subject = document.querySelector('.subject'),
    message = document.querySelector('.message');

    Email.send({
      SecureToken : "6da88830-f58a-4fae-b848-7ed322cdcc18",
      To : 'dummyjef11@gmail.com',
      From : email.value,
      Subject : subject.value,
      Body : message.value
  }).then(
    message => alert(message)
  ); 

}

form.addEventListener('submit',sendEmail );

