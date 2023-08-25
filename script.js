let copy = document.getElementById('copy');
let password = document.getElementById('password');
let generate = document.getElementById('generate');
let copied = document.getElementById('copied');

function generatePass(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&/()=?_‚:~';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

generate.addEventListener('click', function(){
    password.value = generatePass(document.getElementById('num').value);
    copied.innerHTML = '';
});

copy.addEventListener('click', function(){
    navigator.clipboard.writeText(password.value);
    copied.innerHTML = 'Copied';
});