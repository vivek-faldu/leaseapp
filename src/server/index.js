const app = require('express')();
const http = require('http').Server(app);

const PORT = process.env.PORT || 3231
app.listen(PORT, ()=>{
	console.log("Connected to port:" + PORT);
});


 

