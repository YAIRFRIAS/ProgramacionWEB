<?php

include "./partials/Connection.php";

$idTask = $_GET['id'];

try{
    $query = "select id, title, description from task where id = $idTask;";
    $result = $conn->query($query);
    $json = array();


    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        
        $json[] = [
            "id" => $row['id'],
            "title" => $row['title'],
            "description" => $row['description'],
        ];
    }

    $jsonString = json_encode($json[0]);

    echo $jsonString;

}catch(PDOException $e){
    // die($e->getMessage());
}