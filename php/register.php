<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$fname = trim($request->fname);
$lname = trim($request->lname);
$pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$sql = "INSERT INTO users(fname,lname,password,email) VALUES ('$fname','$lname','$pwd','$email')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'fname' => $fname,
'lname' => $lname,
'pwd' => '',
'email' => $email,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>