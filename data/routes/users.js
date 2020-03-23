const router = require('express').Router()
const DB_HOOKS = require('../DB-model-hooks.js')

		router.get('/', (req,res)=>{
			DB_HOOKS.getUsers()
			.then(users=>{
				res.status(201).json({data:users})
			})
			.catch(err=>{
				res.status(500).json({
					error:err,
					msg:'CANNOT GET USERS AT THIS TIME...'
				})
			})
		})




			module.exports = router
