<?php
$to="Kamogelorolva03@gmail.com.com";
$name=$_POST['name'];$email=$_POST['email'];$subject=$_POST['subject'];$message=$_POST['message'];
$body="Name: $name\nEmail: $email\n\n$message";
$headers="From: $email";
if(mail($to,$subject,$body,$headers)){echo "Enquiry sent successfully.";}else{echo "Failed to send enquiry.";}
?>
