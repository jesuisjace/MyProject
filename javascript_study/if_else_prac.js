let login = prompt('What is your role?','')
message = (login == 'employee') ? 'Hello.' :
    (login == 'executive') ? 'Welcome.' :
    (login == '') ? 'Please login':
    '';
alert(message);