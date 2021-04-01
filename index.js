function checkforblank()
{
    if (document.getElementById('username').value == "")
    { alert('Please enter your username');
    return false; 
} else {
    alert('Logging you in');
    return true;
}
}


