document.getElementById('reload').addEventListener('click', function(){
    let r = (Math.random() + 1).toString(36).substring(2);
    document.getElementById('password').value = r;
 })