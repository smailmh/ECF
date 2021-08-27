function validate() { 
  var msg; 
  var str = document.getElementById("mdp").value; 
  
  if (str.match( /[0-9]/g)==null || 
         str.match( /[A-Z]/g)==null || 
          str.match(/[a-z]/g)==null || 
          str.match( /[^a-zA-Z\d]/g)==null || 
         str.length <= 10
      ) 
     msg = "<p> mot de passe invalide </p>"; 
  else 
     msg =" <p> mot de passe valide</p>"; 
    document.getElementById("msg").innerHTML= msg; 
} 
