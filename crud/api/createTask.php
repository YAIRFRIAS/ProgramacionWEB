<?php

include "./partials/Connection.php";

try {

    if (isset($_POST)) {
        $data = file_get_contents("php://input");
        $task = json_decode($data, true);
        $title = $task["title"];
        $id = $task["id"];
        $idUser = $task["idUser"];
        $description = $task["description"];
        echo $id;
        echo $title;
    }
    $query = "INSERT INTO task (title,idUser,description) values ('$title',$idUser,'$description');";

    if ($conn->query($query)) {
        echo "Se ha actualizado la tarea";
    } else {
        echo "No se ha actualizado la tarea";
    }
    
} catch (PDOException $e) {
    die($e->getMessage());
}