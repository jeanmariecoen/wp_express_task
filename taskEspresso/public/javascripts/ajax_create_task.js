var liste_taches = document.getElementById("liste_taches");
document.getElementById("create_task").addEventListener("click", create_task, false);

function create_task(e)
{
  e.preventDefault();

  // récupérer les values du formulaire
  var titre_tache = document.getElementById("titre_tache").value;
  var description_tache = document.getElementById("description_tache").value;
  // var utilisateur= document.getElementById("utilisateur").value;

  // préparer le json
  var nouvelle_tache = JSON.stringify({'post_title': titre_tache, 'post_content': description_tache});

  // préparer la requête
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost/wp-task-jpl/wp-json/taskManager/v0/task', true);
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

  xhr.send(nouvelle_tache);
};
