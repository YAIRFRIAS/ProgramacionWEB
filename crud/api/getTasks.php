<?php

include "./partials/Connection.php";

$idUser = $_GET['idUser'];

try{
    $query = "select t.id, u.firstname, t.title from `user` u inner join task t on u.id = t.idUser where idUser = $idUser;";
    $result = $conn->query($query);
    $json = [];


    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        
        $json[] = [
            "id" => $row['id'],
            "firstname" => $row['firstname'],
            "title" => $row['title']
        ];
    }

    $jsonString = json_encode($json);

    echo $jsonString;

}catch(PDOException $e){
    // die($e->getMessage());
}