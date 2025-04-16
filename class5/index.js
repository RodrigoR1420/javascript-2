let username 

document.getElementById('submit').onclick = function(){
    username = document.getElementById('MyText').value
    document.getElementById('MyH1').textContent = `Hello ${username}`
}