<?php
$db = mysqli_connect("localhost", "root", "", "flashmath");
switch ($_SERVER['REQUEST_METHOD']) {

  case "GET":
    $id = $_GET['userId'];
    if(isset($_GET['subject'])){
      $subject = $_GET['subject'];
    } else {
      $subject = null;
    }
    if(isset($_GET['difficulty'])){
      $difficulty = $_GET['difficulty'];
    } else {
      $difficulty = null;
    }
    if(isset($_GET['limit'])){
      $limit = $_GET['limit'];
    } else {
      $limit = null;
    }
    $q = "SELECT * FROM problems WHERE userId = '$id'";
    if($subject != null && $subject != 0){
      $q .= " AND operation = '$subject'";
    }
    if($difficulty != null && $difficulty != 0){
      $q .= " AND difficulty = '$difficulty'";
    }
    $q .= " ORDER BY id DESC";
    if($limit != null){
      $q .= " LIMIT $limit";
    }
    $result = $db->query($q)->fetch_all(MYSQLI_ASSOC);
    break;

  case "POST":
    $difficulty = $_GET['difficulty'];
    $success = $_GET['success'];
    $argOne = $_GET['argOne'];
    $argTwo = $_GET['argTwo'];
    $operation = $_GET['operation'];
    $correct = $_GET['correct'];
    $answer = $_GET['answer'];
    $userId = $_GET['userId'];
    $q = "INSERT INTO problems (difficulty, success, argOne, argTwo, operation, correct, answer, userId) VALUES ('$difficulty', '$success', '$argOne', '$argTwo', '$operation', '$correct', '$answer', '$userId')";
    $result = $db->query($q);
    break;

  case "PUT":
    $result = "success";
    break;

  case "DELETE":
    $result = "success";
    break;

}

$json = json_encode($result);
echo $json;

$db->close();
return;
?>