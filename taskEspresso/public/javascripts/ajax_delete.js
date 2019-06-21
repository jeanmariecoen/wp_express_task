
function deleteTask(event)
{
    console.log('sfsf');
    var tacheCliquer=e.currentTarget;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () 
    {
        if (xhr.readyState == 4) 
        {
            if (xhr.status == 200)
            
            var myObj = tacheCliquer;
            console.log(tacheCliquer);
            
            // boucle pour afficher les titres de toutes les tâches
           
        }            
    }


    //Envoie le titre du film ou de la série dans la page likes.php
    xhr.open('DELETE', 'http://localhost/wp-task-jpl/wp-json/taskManager/v0/task', true);
    xhr.send();        
    }
