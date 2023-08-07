//******************************AD Detail sender   validation  start Here*****************************//.



$(document).ready(function(e) {

$('#submit_digital3').click(function(e) {
	e.preventDefault();

$("#error_msg3").css('color','red');

$email = $('#email3').val();
$mobile_no=$('#mobile_no3').val();
$name = $('#name3').val();
$message=$('#message3').val();
$subject=$('#subject3').val();

$recaptcha = document.forms["contactForm"]["g-recaptcha-response"].value;

// alert($recaptcha);

var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);

var valid = emailRegex.test($email);


 if($email == ""  &&  $name=="")

{
$('#error_msg3').html("Please enter mandatory fields");
$('#name3').focus();
}
else  if($name == "")
{
$('#error_msg').html("Please enter your name");
$('#name3').focus();
}	
else  if($email == "")
{
$('#error_msg3').html("Please enter the email ID");
$('#email3').focus();
}
else  if(!valid)
{
$('#error_msg3').html("Please enter the valid email ID");
$('#email').focus();
}
else if($mobile_no == "" || isNaN($mobile_no))
{
$('#error_msg3').html("Please enter the mobile phone number");
$('#mobile_no').focus();
}
else if($subject == "")
{	
$('#error_msg3').html("Please enter subject");
$('#subject3').focus();
}

else if($message == "")
{	
$('#error_msg3').html("Please enter message");
$('#message3').focus();
}
else if ($recaptcha=="") {
    $( '#error_msg3').text( "reCAPTCHA is mandatory" );
    
  }



else
{
$('#error_msg3').html(null);
$.ajax({
type: "POST",
cache: false,
url: "send-contact-mail3.php",
data: 'email='+ $email +'&name='+$name+'&mobile_no='+$mobile_no+'&message='+$message+"&subject="+$subject,
success: function(data) {
$("#error_msg3").css('color','green');
$("#error_msg3").html(data);
$("#email3").val(null);
$("#name3").val(null);
$("#mobile_no3").val(null);
$("#message3").val(null);
("#subject3").val(null);
}
});
}

});	
	
});		
//***





//******************************AD Detail sender   validation  start Here*****************************//.



$(document).ready(function(e) {

$('#submit_digital1').click(function(e) {
	e.preventDefault();

$("#error_msg1").css('color','red');

$email = $('#email2').val();

$mobile_no=$('#mobile_no2').val();
$name = $('#name2').val();
$business_name=$('#business_name').val();


$curr_web = $('#curr_web').val();
$ref_web = $('#ref_web').val();
$type_web = $('#type_web').val();
$brief_project = $('#brief_project').val();
$web_completion = $('#web_completion').val();
// var $captcha = $( '#recaptcha' ),
// response = grecaptcha.getResponse();
$ip_check = $('#ip_check').val();
//var captcha_response = grecaptcha.getResponse(widgetId1);	

//alert(captcha_response);

var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);

var valid = emailRegex.test($email);

 

 if($email == ""  &&  $name=="")

{
$('#error_msg1').html("Please enter mandatory fields");
$('#name2').focus();
}
else  if($name == "")
{
$('#error_msg1').html("Please enter your name");
$('#name2').focus();
}	
else if($business_name == "")
{	
$('#error_msg1').html("Please enter your business name");
$('#business_name').focus();
}
else if($mobile_no == "" || isNaN($mobile_no))
{
$('#error_msg1').html("Please enter the mobile phone number");
$('#mobile_no2').focus();
}

else  if($email == "")
{
$('#error_msg1').html("Please enter the email ID");
$('#email2').focus();
}
else  if(!valid)
{
$('#error_msg1').html("Please enter the valid email ID");
$('#email2').focus();
}

/*else if(captcha_response.length == 0)
{
    $( '#error_msg1').text( "reCAPTCHA is mandatory" );
	//return false;
    
  } */

else
{
$('#error_msg1').html(null);
$.ajax({
type: "POST",
cache: false,
url: "https://www.appindia.co.in/send-contact-mail11.php",
data: 'email='+ $email +'&name='+$name+'&mobile_no='+$mobile_no+'&business_name='+$business_name+'&curr_web='+$curr_web+'&ref_web='+$ref_web+'&type_web='+$type_web+'&brief_project='+$brief_project+'&web_completion='+$web_completion+'&ip_check='+$ip_check,
success: function(data) {
$("#error_msg1").css('color','green');
$("#error_msg1").html(data);
$("#email2").val(null);
$("#name2").val(null);
$("#mobile_no2").val(null);
$("#business_name").val(null);
$("#curr_web").val(null);

$("#ref_web").val(null);
$("#type_web").val(null);
$("#brief_project").val(null);
$("#web_completion").val(null);
}
});
}

});	
	
});		
//***






//******************************Contact Us  validation  start Here*****************************//.



$(document).ready(function(e) {

$('#submit_digital4').click(function(e) {
	e.preventDefault();

$("#error_msg4").css('color','red');

$email = $('#email4').val();
$mobile_no=$('#mobile_no4').val();
$name = $('#name4').val();
$message=$('#message4').val();
$subject=$('#subject4').val();

$recaptcha = document.forms["myForm"]["g-recaptcha-response"].value;

 // alert($recaptcha);

var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);

var valid = emailRegex.test($email);



 if($email == ""  &&  $name=="")

{
$('#error_msg4').html("Please enter mandatory fields");
$('#name4').focus();
}
else  if($name == "")
{
$('#error_msg4').html("Please enter your name");
$('#name4').focus();
}	
else  if($email == "")
{
$('#error_msg4').html("Please enter the email ID");
$('#email4').focus();
}
else  if(!valid)
{
$('#error_msg4').html("Please enter the valid email ID");
$('#email4').focus();
}
else if($mobile_no == "" || isNaN($mobile_no))
{
$('#error_msg4').html("Please enter the mobile phone number");
$('#mobile_no4').focus();
}
else if($subject == "")
{	
$('#error_msg4').html("Please enter subject");
$('#subject4').focus();
}

else if($message == "")
{	
$('#error_msg4').html("Please enter message");
$('#message4').focus();
}

else if ($recaptcha=="") {
    $( '#error_msg4').text( "reCAPTCHA is mandatory" );
   
  }


else
{
$('#error_msg4').html(null);
$.ajax({
type: "POST",
cache: false,
url: "send-contact-mail4.php",
data: 'email='+ $email +'&name='+$name+'&mobile_no='+$mobile_no+'&message='+$message+"&subject="+$subject,
success: function(data) {
$("#error_msg4").css('color','green');
$("#error_msg4").html(data);
$("#email4").val(null);
$("#name4").val(null);
$("#mobile_no4").val(null);
$("#message4").val(null);
("#subject4").val(null);
}
});
}

});	
	
});	







//******************************buy-taxi-android-app-onlin*****************************//.



$(document).ready(function(e) {

$('#submit_digital5').click(function(e) {
	e.preventDefault();

$("#error_msg5").css('color','red');

$email = $('#email5').val();
$mobile_no=$('#mobile_no5').val();
$name = $('#name5').val();
$message=$('#message5').val();
$subject=$('#subject5').val();

// $recaptcha = document.forms["myForm"]["g-recaptcha-response"].value;

 // alert($recaptcha);

var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);

var valid = emailRegex.test($email);



 if($email == ""  &&  $name=="")

{
$('#error_msg5').html("Please enter mandatory fields");
$('#name5').focus();
}
else  if($name == "")
{
$('#error_msg5').html("Please enter your name");
$('#name5').focus();
}	
else  if($email == "")
{
$('#error_msg5').html("Please enter the email ID");
$('#email5').focus();
}
else  if(!valid)
{
$('#error_msg5').html("Please enter the valid email ID");
$('#email5').focus();
}
else if($mobile_no == "" || isNaN($mobile_no))
{
$('#error_msg5').html("Please enter the mobile phone number");
$('#mobile_no5').focus();
}
else if($subject == "")
{	
$('#error_msg5').html("Please enter subject");
$('#subject5').focus();
}

else if($message == "")
{	
$('#error_msg5').html("Please enter message");
$('#message5').focus();
}

// else if ($recaptcha=="") {
//     $( '#error_msg4').text( "reCAPTCHA is mandatory" );
   
//   }


else
{
$('#error_msg5').html(null);
$.ajax({
type: "POST",
cache: false,
url: "send-contact-mail5.php",
data: 'email='+ $email +'&name='+$name+'&mobile_no='+$mobile_no+'&message='+$message+"&subject="+$subject,
success: function(data) {
$("#error_msg5").css('color','green');
$("#error_msg5").html(data);
$("#email5").val(null);
$("#name5").val(null);
$("#mobile_no5").val(null);
$("#message5").val(null);
("#subject5").val(null);
}
});
}

});	
	
});	






//******************************block chain*****************************//.



$(document).ready(function(e) {

$('#submit_digital_b4').click(function(e) {
	e.preventDefault();

$("#error_msg4").css('color','red');

$name = $('#b_name').val();
$phone=$('#b_phone').val();
$email = $('#b_email').val();
$website=$('#b_website').val();


//$recaptcha = document.forms["myForm"]["g-recaptcha-response"].value;

 // alert($recaptcha);

var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);

var valid = emailRegex.test($email);



 if($email == ""  &&  $name=="")

{
$('#error_msg4').html("Please enter mandatory fields");
$('#name4').focus();
}
else  if($name == "")
{
$('#error_msg4').html("Please enter your name");
$('#name4').focus();
}	
else  if($email == "")
{
$('#error_msg4').html("Please enter the email ID");
$('#b_email').focus();
}
else  if(!valid)
{
$('#error_msg4').html("Please enter the valid email ID");
$('#b_email').focus();
}
else if($phone == "" || isNaN($phone))
{
$('#error_msg4').html("Please enter the mobile  number");
$('#b_phone').focus();
}
else if($website == "")
{	
$('#error_msg4').html("Please enter message");
$('#b_website').focus();
}



else
{
$('#error_msg4').html(null);
$.ajax({
type: "POST",
cache: false,
url: "send-contact-mailb4.php",
data: 'name='+ $name +'&phone='+$phone+'&email='+$email+'&website='+$website,
success: function(data) {
$("#error_msg4").css('color','green');
$("#error_msg4").html(data);
$("#b_name").val(null);
$("#b_phone").val(null);
$("#b_email").val(null);
$("#b_website").val(null);

}
});
}

});	
	
});	









