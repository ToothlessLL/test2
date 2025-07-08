fetch('http://frostnibblebot.railway.internal:3000/api/public/dl/uxD6EBDq/config.json')
.then(result => console.log(result))
.catch(err => console.error(err));
