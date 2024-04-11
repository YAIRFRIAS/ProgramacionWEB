<?php

include "./partials/Connection.php";

$idTask = $_GET['id'];

try{
    $query = "DELETE FROM task where id = $idTask;";
    $result = $conn->query($query);


    $conn->query($query);

}catch(PDOException $e){
    echo $e;
}