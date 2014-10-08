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
    $q .= " AND success = '1'";
    $q .= " ORDER BY id DESC";
    if($limit != null){
      $q .= " LIMIT $limit";
    }
    $result['correct'] = sizeof($db->query($q)->fetch_all(MYSQLI_ASSOC));
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
    $q .= " AND success = '0'";
    $q .= " ORDER BY id DESC";
    if($limit != null){
      $q .= " LIMIT $limit";
    }
    $result['wrong'] = sizeof($db->query($q)->fetch_all(MYSQLI_ASSOC));
    break;

  case "POST":
    $result = "success";
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