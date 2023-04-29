<?php header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE');
header('Access-Control-Allow-Headers: content-type or other');
header('Content-Type: application/json');


//Please create users database inside phpmysql admin and create userdetails tabel and create id, email and username fields
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "angdb";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


//Add user
if(isset($_POST['myName']))
{
    $sql = "INSERT INTO otp (name,email,otp)
        VALUES ( '".$_POST['myName']."', '".$_POST['myEmail']."','".$_POST['myOtp']."')";
     if (mysqli_query($conn,$sql)) {
        $data = array("data" => "You Data added successfully");
            echo json_encode($data);
        } else {
            $data = array("data" => "Error: " . $sql . "<br>" . $conn->error);
            echo json_encode($data);
            
        }
}

elseif(isset($_POST['userid']))
{
    $trp = mysqli_query($conn, "SELECT * from otp where id =".$_POST['otpsid']);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    print json_encode($rows);
}
//Delete user
elseif(isset($_POST['deleteid']))
{
    $sql = mysqli_query($conn, "DELETE from otp where id =".$_POST['deleteid']);
    if ($sql) {
        
        $data = array("data" => "Record deleted successfully");
        echo json_encode($data);
      } else {
      
        $data = array("data" =>"Error deleting record: " . mysqli_error($conn));
        echo json_encode($data);
      }
}
else
{
    //get all users details
    $trp = mysqli_query($conn, "SELECT * from otp ORDER BY id DESC");
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }

   

    print json_encode($rows);
}

die();