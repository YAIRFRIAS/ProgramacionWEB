export async function getAllUsers(){

    const resp = await fetch("/crud/api/getUsers.php");
    const resolve = await resp.json();

    return resolve
}

export async function getTasks(idUser = 0){
    const resp = await fetch(`/crud/api/getTasks.php?idUser=${idUser}`);
    const resolve = await resp.json();
    
    return resolve;
}

export async function getTask(idTask = 0){
    const resp = await fetch(`/crud/api/getTask.php?id=${idTask}`);
    const resolve = await resp.json();
    return resolve;
}

export async function deleteTask(idTask){
    const resp = await fetch(`/crud/api/getTask.php?id=${idTask}`);
    const resolve = await resp.json();
    return resolve;
}