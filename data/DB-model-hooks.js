const DB = require('./connect.js')


module.exports={
	getUsers,
	postUser,
	deleteUser,
	verifyUser
}

	


		async function getUsers(id){
				if(id){
					return DB('users')
					.where({id})
					.first()

				}else{
					return DB('users')
				}
		}



async function postUser(user){
					return DB('users')
					.insert(user)
					.then(id=>{
					return getUsers(id[0])
					})

		}




async function deleteUser(id){
				if(id){
					return DB('users')
					.where({id})
					.del()
					.then(done=>{
						return getUsers()
					})

				}else{
					return false
				}
		}



async function verifyUser(name){
				if(name){
					return DB('users')
					.where(name)
		}

		}






