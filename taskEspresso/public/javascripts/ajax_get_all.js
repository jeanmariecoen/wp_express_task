var all_task = document.getElementsByClassName("all_tasks");
var liste_taches = document.getElementById("liste_taches");

for (let i = 0; i < all_task.length; i++) 
{
    all_task[i].addEventListener("click", mettreAjour, false);
}
 
function mettreAjour()
{
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () 
    {
        if (xhr.readyState == 4) 
        {
            if (xhr.status == 200)
            var myObj = JSON.parse(this.responseText);
            console.log(myObj);
            
            // boucle pour afficher les titres de toutes les tâches
            if(liste_taches.innerHTML === "")
            {
                for (var i = 0; i<myObj.length; i++)
                {
                    liste_taches.innerHTML += '<div style=text-align:center;margin-bottom:1rem;border-style:outset;width:25%;font-weight:900;font-size:1.5rem;background-color:black;color:#ffcc66;>' + myObj[i].post_title + '<br><div style=width:100%;font-weight:100;font-size:1.2rem;background-color:#ffcc66;color:black;>' + myObj[i].post_content + '<p>'+ myObj[i].post_date+'</p></div></div>';                
                }
            }
            else
            {
               
                    liste_taches.innerHTML += '<div style=text-align:center;margin-bottom:1rem;border-style:outset;width:25%;font-weight:900;font-size:1.5rem;background-color:black;color:#ffcc66;>' + myObj[0].post_title + '<br><div style=width:100%;font-weight:100;font-size:1.2rem;background-color:#ffcc66;color:black;>' + myObj[0].post_content + '</div></div>';       

                
            }
        }            
    }


    //Envoie le titre du film ou de la série dans la page likes.php
    xhr.open('GET', 'http://localhost/wp-task-jpl/wp-json/taskManager/v0/task', true);
    xhr.send();        
    }
