const server = require('./api/server.js')




const PORT = process.env.PORT || 2400


server.listen(PORT, ()=>{
	console.log(`listening on port ${PORT}`)
})