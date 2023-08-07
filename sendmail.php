<?php
ob_start();

	
if(isset($_POST['email']) )
{


	// print_r($_POST);

	// exit;
	
	//$_POST['email']=trim($_POST['email']);
	
	
	            $email=trim($_POST['email']);
				$name=trim($_POST['name']);
			    $website=trim($_POST['website']);
			    $subject=trim($_POST['subject']);
			    $message=trim($_POST['message']);
			    



			         




//$to="bisht4858@gmail.com,ashwaria@seoindiacompany.org,ashwaria@sevenstarwebsolutions.com,support@appindia.com";

$to="tarani@stws.io";



	$subject="cheapkloud  Contact Query - cheapkloud";
$from="support@cheapkloud.com";
 
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: '.$from . "\r\n";
/*if($send_me_cpoyad==1)
{
$headers .= 'Cc: '.$from . "\r\n";
}*/
	$matter='
	<html>
	<head>
	<title>cheapkloud Contact Query - cheapkloud</title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	</head>
	<body>
	<table>
	
	<tr>
	<td colspan="2"> Dear Admin,<br> Someone wants to be  contact with you.</td>
	
	</tr>

	
	<tr>
	<td>Name:</td>
	<td>'.$name.'</td>
	</tr>
	<tr>
	<td>Email.:</td>
	<td>'.$email.'</td>
	</tr>
	<tr>
	<td>Website:</td>
	<td>'.$website.'</td>
	</tr>
     
  
	<tr>
	<td>Subject:</td>
	<td>'.$subject.'</td>
	</tr>

	<tr>
	<td>Message:</td>
	<td>'.$message.'</td>
	</tr>

	

	
	</table>
	</body>
	</html>
	';
	$yes=mail($to,$subject,$matter,$headers);
	if($yes)
	{
	    
	    	echo ("Thanks we'll contact you as soon as possible");
	    	
//       echo "<script language='javascript' type='text/javascript'>";

// echo "window.location.href='/'";
// echo "</script>";
	}

	else
	{
		echo ("Your e-mail will not be sent. Please try again");
	}
 }
 
 // Join us query

?>

