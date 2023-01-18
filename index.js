const form = document.querySelector('.contact_form');
function sendEmail(e){
    e.preventDefault();

   
    const name =  document.querySelector('.name'),
    email = document.querySelector('.email'),
    subject = document.querySelector('.subject'),
    message = document.querySelector('.message');

    Email.send({
      SecureToken : "1ec2d0b5-0118-4cfc-988d-a461615e7eab",
      To : 'dummyjef11@gmail.com',
      From : email.value,
      Subject : subject.value,
      Body : message.value
  }).then(
    message => alert(message)
  ); 

}

form.addEventListener('submit',sendEmail );

