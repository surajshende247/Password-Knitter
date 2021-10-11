function defaultPassword() {
    var valid_characters = getValidCharacters();
    var password = generatePassword(valid_characters, 16);

    document.getElementById('pass').value = password;
    console.log(pass);

    document.getElementById("copyButtonIcon").className = "fas fa-copy me-4";
    document.getElementById("copyButtonText").innerHTML = "Copy";
}

function copyButton() {
    var copyText = document.getElementById("pass");
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copyButtonIcon").className = "fas fa-check me-4";
    document.getElementById("copyButtonText").innerHTML = "Copied!";
}

function Darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    element.classList.toggle("dark-mode-nav");
}

function getValidCharacters() {
    var valid_characters = 'abcdefghijklmnopqrstuvwxyz';

    if (document.getElementById('checknumbers').checked)
	valid_characters += '0123456789';

    if (document.getElementById('checksymbols').checked)
	valid_characters += '!@#$%&*';

    if (document.getElementById('checkuppercase').checked)
	valid_characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    return valid_characters;
}

function generatePassword(valid_characters, password_length) {
    var password = '';
    for (i = 1; i <= password_length; i++) {
        var index = Math.floor(Math.random() * valid_characters.length + 1);
        password += valid_characters.charAt(index);
    }
    return password;
}
