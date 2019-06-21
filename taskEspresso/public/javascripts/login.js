var liste_taches = document.getElementById("liste_taches");
document.getElementById("login").addEventListener("click", seLogguer, false);

function seLogguer(e)
{
  e.preventDefault();
  var userForm = document.getElementById("user").value;
  var passwordForm = document.getElementById("password").value;

  var infoLoggin = JSON.stringify({'user': userForm, 'password': passwordForm});
  // console.log(nouvelle_tache);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost/wp-task-jpl/wp-json/taskManager/v0/task', true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () 
  {
      if (xhr.readyState == 4) 
      {
          if (xhr.status == 200)
          {
            // var myObj = JSON.parse(this.responseText);
            // console.log(xhr.responseText);
            // console.log('la tâche est créée');
            // for (var i = 0; i<myObj.length; i++)
            // {
           
            // }
            // appel à la fonction 1 pour réainitialiser les tâches  
          };
      };            
  };

  xhr.send(infoLoggin);
  // liste_taches.innerHTML = "";
  setTimeout(mettreAjour, 3000)
 
}
