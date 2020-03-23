const express = require('express')
const router = express.Router()
const DB_HOOKS = require('../DB-model-hooks.js')
const bcrypt = require('bcryptjs')

	
	router.use(express.json())
	
			router.post('/', (req,res)=>{
				const client = req.body


					const hash_count = process.env.HASHING_ROUNDS || 8
			const hash = bcrypt.hashSync(client.password,hash_count)
			client.password = hash

				DB_HOOKS.postUser(client)
				.then(newUser=>{
					res.status(201).json({
						msg:'SUCCESSFUL!!',
						data:newUser})
				})
				.catch(err=>{
					res.status(201).json({
					error:err,
					msg:"CANNOT REGISTER USER AT THIS TIME"
				})
					})
		})





			module.exports = router