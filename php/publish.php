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

class Operations
{
    private $db_host = 'localhost';
    private $db_name = 'angdb';
    private $db_username = 'root';
    private $db_password = '';
 
    public function dbConnection()
    { 
        try {
            $conn = new PDO('mysql:host=' . $this->db_host . ';dbname=' . $this->db_name, $this->db_username, $this->db_password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $e) {
            echo "Connection error " . $e->getMessage();
            exit;
        }
    }
}

$database = new Operations();
$conn = $database->dbConnection();
$data = json_decode(file_get_contents("php://input"));
//print_r($data);


 
try { 
    $fname = htmlspecialchars(trim($data->fname));
    $lname = htmlspecialchars(trim($data->lname));
    $aemail = htmlspecialchars(trim($data->aemail));
    $btitle = htmlspecialchars(trim($data->btitle));
    $bgenre = htmlspecialchars(trim($data->bgenre));
    $bsummary = htmlspecialchars(trim($data->bsummary));

 
    $query = "INSERT INTO `applications`(
    fname,
    lname,
    aemail,
    btitle,
    bgenre,
    bsummary
    ) 
    VALUES(
    :fname,
    :lname,
    :aemail,
    :btitle,
    :bgenre,
    :bsummary
    )";
 
    $stmt = $conn->prepare($query);
 
    
    $stmt->bindValue(':fname', $fname, PDO::PARAM_STR);
    $stmt->bindValue(':lname', $lname, PDO::PARAM_STR);
    $stmt->bindValue(':aemail', $aemail, PDO::PARAM_STR);
    $stmt->bindValue(':btitle', $btitle, PDO::PARAM_STR);
    $stmt->bindValue(':bgenre', $bgenre, PDO::PARAM_STR);
    $stmt->bindValue(':bsummary', $bsummary, PDO::PARAM_STR);
   
    
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