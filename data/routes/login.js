const express = require('express')
const router = express.Router()
const DB_HOOKS = require('../DB-model-hooks.js')
const bcrypt = require('bcryptjs')




	router.use(express.json())

			router.post('/', (req,res)=>{
				const {username, password} = req.body
					console.log('body in req', req.body)
					console.log('session in req', req.session)


				DB_HOOKS.verifyUser({username})
				.then(([user])=>{
					console.log('user in db', user)

					if(
						user && bcrypt.compareSync(password,user.password)
						){
						req.session.user={
							id:user.id,
							username:user.username
						}
					}

					res.status(201).json({
						msg:'SUCCESSFUL!!',
						data:user
					})
				})
				.catch(err=>{
					res.status(201).json({
					error:err,
					msg:"CANNOT GET USER AT THIS TIME"
				})
					})
		})

	






			module.exports = router
