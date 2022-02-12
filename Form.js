function validate(){

var username=document.forms["myform"]["uname"].value; 
var password=document.forms["myform"]["pwd"].value;




if(username=="admin")
{

	if(password=="123")
	{
	    alert("Login Succesfull");
	    	  open("http://localhost/Student%20Management%20System/index.php");
	}
	else{
		alert("Incorrect username or password");
	}
}
else{
		alert("Incorrect username or password");
}


}


