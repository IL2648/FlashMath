<?php
$db = mysqli_connect("localhost", "root", "", "flashmath");
switch ($_SERVER['REQUEST_METHOD']) {

  case "GET":
    $result = "success";
    break;

  case "POST":
    $username = $_GET['username'];
    $password = $_GET['password'];
    $q = "SELECT id FROM users WHERE username = '$username' AND password = '$password'";
    $result = $db->query($q)->fetch_assoc();
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