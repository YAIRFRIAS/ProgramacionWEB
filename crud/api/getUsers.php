<?php

include "./partials/Connection.php";

try{
    $query = "select * from `user`;";
    $result = $conn->query($query);
    $json = [];


    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        
        $json[] = [
            "id" => $row['id'],
            "fullname" => "{$row['firstname']} {$row['lastname']}"
        ];
    }

    $jsonString = json_encode($json);

    echo $jsonString;

}catch(PDOException $e){
    // die($e->getMessage());
}