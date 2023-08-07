 
//******************************Contact Us  validation  start Here*****************************//.
 
$(document).ready(function(e) {

$('#submit_digital4').click(function(e) {
  e.preventDefault();

$("#error_msg4").css('color','red');

let email = $('#email').val();
let name = $('#name').val();
let website = $('#website').val();
let subject= $('#subject').val();
let message=$('#message').val();
 
//$recaptcha = document.forms["myForm"]["g-recaptcha-response"].value;

 // alert($recaptcha);

var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);

var valid = emailRegex.test(email);
 
 if(email == ""  &&  name=="")

{
$('#error_msg4').html("Please enter mandatory fields");
$('#name').focus();
}
else  if(name == "")
{
$('#error_msg4').html("Please enter your name");
$('#name').focus();
} 
else  if(email == "")
{
$('#error_msg4').html("Please enter the email ID");
$('#email').focus();
}
else  if(!valid)
{
$('#error_msg4').html("Please enter the valid email ID");
$('#email').focus();
}
/* else if($mobile_no == "" || isNaN($mobile_no))
{
$('#error_msg4').html("Please enter the mobile phone number");
$('#mobile_no4').focus();
} */
else if(website == "")
{ 
$('#error_msg4').html("Please enter Website");
$('#website').focus();
}

else if(subject == "")
{ 
$('#error_msg4').html("Please enter subject");
$('#subject').focus();
}

else if(message == "")
{ 
$('#error_msg4').html("Please enter message");
$('#message').focus();
}
 
 /* else if ($recaptcha=="") {
    $( '#error_msg4').text( "reCAPTCHA is mandatory" );
   
  } */


else
{
$('#error_msg4').html(null);
$.ajax({
type: "POST",
cache: false,
url: "sendmail.php",
data: 'email='+ email +'&name='+name+'&website='+website+'&subject='+subject+"&message="+message,
success: function(data) {
$("#error_msg4").css('color','green');
$("#error_msg4").html(data);
 
$("#email").val('');
$("#name").val('');
$("#website").val('');
$("#subject").val('');
$("#message").val('');
}
});
}

}); 
  
}); 






