fetch('http://frostnibblebot.railway.internal:8080/files/config.json')
.then(result => console.log(result));
fetch('http://frostnibblebot.railway.internal:8080/api/public/config.json')
.then(result => console.log(result));
