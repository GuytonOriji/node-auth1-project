const express = require('express')
const router = express.Router()
const DB_HOOKS = require('../DB-model-hooks.js')
const bcrypt = require('bcryptjs')




	router.use(express.json())

			router.post('/', (req,res)=>{
					if(req.session){
						req.session.destroy(err=>{
							if(err){
								res.status(500).json({msg:"sorry you cant logout bro..."})
							}else{
								res.status(201).json({loggedOut:"logged out..."})
							}
						})
					}else{
						res.status(401).json({msg:"you were never logged here...ever.."})
					}
		})

	






			module.exports = router
