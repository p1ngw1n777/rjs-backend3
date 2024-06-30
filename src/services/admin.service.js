const { User, Transaction, Role } = require("../models/model");
require("../models/model");

class adminService {
  async allUser(req, res) {
	try{
		const user = await User.findAll({
			include: {
				model: Role,
				attributes: [ 'role_name' ]
			},
			attributes: [ 'id', 'login', 'password', 'email',],	
		});
		if(!user) return res.json({status_code: "bad", msg: "user not exists"})
            
    const columns = [ 
        { 
            Header: '№', 
            accessor: 'id'
        },
        { 
            Header: 'Имя пользователя',
            accessor: 'login'
        }, 
        {
            Header: 'Пароль',
            accessor: 'password'
        }, 
        { 
            Header: 'Email', 
            accessor: 'email'
        },
        {
            Header: 'Роль',
            accessor: 'role.role_name'
        }
    ]

		return res.json({ columns: columns, users: user})
	}
	catch(error) {
		console.log(error)
	}
  }

  async allRole(req, res) {
	try{
		const role = await Role.findAll({
			attributes: [ 'id', 'role_name'],	
		});
		if(!role) return res.json({status_code: "bad", msg: "user not exists"})
	
        const columns = [ 
        { 
            Header: '№', 
            accessor: 'id'
        },
        { 
            Header: 'Имя роли',
            accessor: 'role_name'
        }
    ]

		return res.json({ columns: columns, users: role})
	}
	catch(error) {
		console.log(error)
	}
  }

  async allTransactions(req, res) {
	try{
		const transaction = await Transaction.findAll({
            include: {
                model: User,
                attributes: [ 'login' ]
            },
			attributes: [ 'id', 'count', 'type', 'date' ],	
		});
		if(!transaction) return res.json({status_code: "bad", msg: "user not exists"})
	
		return res.json(transaction)
	}
	catch(error) {
		console.log(error)
	}
  }

//   async allCategories(req, res) {
// 	try{
// 		const role = await Role.findAll({
// 			attributes: [ 'id', 'role_name'],	
// 		});
// 		if(!role) return res.json({status_code: "bad", msg: "user not exists"})
	
// 		return res.json(role)
// 	}
// 	catch(error) {
// 		console.log(error)
// 	}
//   }
}

module.exports = new adminService()