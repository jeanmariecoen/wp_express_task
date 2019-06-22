// var liste_taches = document.getElementById("liste_taches");
boutons_delete = document.getElementsByClassName("supprimer");

for (var i = 0; i < boutons_delete.length; ++i)
{
    boutons_delete[i].addEventListener("click", delete_task, false)
}

function delete_task(e)
{
    var tacheCliquee = e.currentTarget;
    var task_id = tacheCliquee.dataset.taskId;
    console.log(task_id);

    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'http://localhost/wp-task-jpl/wp-json/taskManager/v0/task/'+task_id, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Ajax
    xhr.onreadystatechange = function () 
    {
        if (xhr.readyState == 4) 
        {
            if (xhr.status == 200)
            {
                mettreAjour();
            };
        }; 
    };           

    xhr.send(task_id);   
};
