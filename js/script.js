function defaultPassword(){
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
        
    for (i = 1; i <= 16; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
            
        pass += str.charAt(char)
    }
        
    document.getElementById('pass').value = pass;
    console.log(pass);

    document.getElementById("copyButtonIcon").className = "fas fa-copy me-4"
    document.getElementById("copyButtonText").innerHTML = "Copy"
}

function copyButton(){
    var copyText = document.getElementById("pass")
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copyButtonIcon").className = "fas fa-check me-4"
    document.getElementById("copyButtonText").innerHTML = "Copied!"
}

function Darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    element.classList.toggle("dark-mode-nav");
  }