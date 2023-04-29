<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}
 
if ($_SERVER['REQUEST_METHOD'] !== 'POST') :
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Request!.Only POST method is allowed',
    ]);
    exit;
endif;

require 'db_connect.php';
$database = new Operations();
$conn = $database->dbConnection();
$data = json_decode(file_get_contents("php://input"));
//print_r($data);


 
try { 
    $bname = htmlspecialchars(trim($data->bname));
    $package = htmlspecialchars(trim($data->package));
    $cno = htmlspecialchars(trim($data->cno));
    $cname = htmlspecialchars(trim($data->cname));
    $cexp = htmlspecialchars(trim($data->cexp));
    $cvv = htmlspecialchars(trim($data->cvv));

 
    $query = "INSERT INTO `payment`(
    bname,
    package,
    cno,
    cname,
    cexp,
    cvv
    ) 
    VALUES(
    :bname,
    :package,
    :cno,
    :cname,
    :cexp,
    :cvv
    )";
 
    $stmt = $conn->prepare($query);
 
    
    $stmt->bindValue(':bname', $bname, PDO::PARAM_STR);
    $stmt->bindValue(':package', $package, PDO::PARAM_STR);
    $stmt->bindValue(':cno', $cno, PDO::PARAM_STR);
    $stmt->bindValue(':cname', $cname, PDO::PARAM_STR);
    $stmt->bindValue(':cexp', $cexp, PDO::PARAM_STR);
    $stmt->bindValue(':cvv', $cvv, PDO::PARAM_STR);
   
    
    if ($stmt->execute()) {
 
        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Data Inserted Successfully.'
        ]);
        exit;
    }
    echo json_encode([
        'success' => 0,
        'message' => 'There is some problem in data inserting'
    ]);
    exit;
 
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}
?>