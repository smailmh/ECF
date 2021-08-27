function validate() { 
    var msg; 
    var str1 = document.getElementById("mdp1").value; 
    var str2 = document.getElementById ("mdp2").value;
    

    // vérifier si le mot de passe privoisire corresponds  à celui envoyé par mail

    if (str1.match( /[0-9]/g)==null ||
            str1.match( /[A-Z]/g)==null ||
            str1.match(/[a-z]/g) ==null ||
            str1.match( /[^a-zA-Z\d]/g) ==null ||
           str1.length <= 10
           )
           {
            msg = "<p>mot de passse invalide merci de recommencer.</p>";
           }
          
       
    else  if (str1 != str2)
    {
    msg = "<p> les deux mots de passe ne sont pas identiques</p>";
    document.getElementById("msg").innerHTML= msg; 
}
    else
        msg = "<p> Votre nouveau mot de passse est enregistré</p>";  
 
   document.getElementById("msg").innerHTML= msg; 
} 