function emailSend(){

	var FirstName = document.getElementById('name').value;
	var Email = document.getElementById('email').value;
	
	
	var Message = document.getElementById('textarea').value;

	
	var messageBody = "FirstName : " + FirstName +
	"<br/> <br/> Email : " + Email +
	"<br/> <br/> Message : " + Message;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "support@devray.in",
    Password : "391251FE484CA92AFD45E4085F67725B4368",
    To : 'support@devray.in ',
    From : "support@devray.in",
    Subject : "New Contact Form Submission",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}