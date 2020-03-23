const express = require('express')
const helmet = require('helmet')

const server = express()


const session = require('express-session')



server.use(session({
	name:'accountSession',
	secret:'$3CR3TK3Y',
	cookie:{
		maxAge:1000 * 60 * 60,
		secure:false,
		httpOnly:true
	},
	resave:false,
	saveUninitialized:true

}))

	const register = require('../data/routes/register.js')
	const login = require('../data/routes/login.js')
	const logout = require('../data/routes/logout.js')
	const users = require('../data/routes/users.js')



server.use(helmet())


server.use('/api/register',register)
server.use('/api/login',login)
server.use('/api/logout',logout)
server.use('/api/users', auth, users)



//restricted session hook...thingy

function auth(req,res,next){
			if(req.session &&
				req.session.user){
				next()
			}else{
				res.status(401).send('<h1>Stay Out!</h1>')
			}
}

module.exports=server