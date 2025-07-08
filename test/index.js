fetch('http://frostnibblebot.railway.internal:8080/api/public/dl/uxD6EBDq/config.json')
.then(result => console.log(result))
.catch(err => console.error(err));
