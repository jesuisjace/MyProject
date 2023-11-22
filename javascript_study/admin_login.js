let userId = prompt ("Who's there?","");
if (userId == "Admin"){
    let userPw = prompt ("Password?","");
    if (userPw == "TheMaster"){
        alert ("Welcome!");
    }
    else if (userPw == null || userPw == ""){
        alert ("Cancelled");
    }
    else{
        alert("Wrong Password");
    }
}
else if (userId == null || userId == ""){
    alert("Cancelled");
}
else{
    alert("I don't know you");
}
