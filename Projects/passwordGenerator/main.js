//Password generator
function generateStrongPassword() {
    var strongPassword = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    for (var i = 0; i < 20; i++)
        strongPassword += possible.charAt(Math.floor(Math.random() * possible.length));
        console.log(strongPassword);

        document.getElementById("password").innerHTML = strongPassword;

    return strongPassword;
}

function generateEasyPassword() {
    var easyPassword = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 10; i++)
        easyPassword += possible.charAt(Math.floor(Math.random() * possible.length));
        console.log(easyPassword);

        document.getElementById("password").innerHTML = easyPassword;

    return easyPassword;
}