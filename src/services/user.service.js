const { User, Role } = require("../models/model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require("../models/model");

const generateJwt = (id,email,role,user_role) => {
    return jwt.sign(
		{
			id, email, role, user_role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}  

class userService {
  async login(req, res) {
    const user = await User.findOne({
      where: { id: 1}
    })
    if(!user) return res.json({status_code: "bad", msg: "user not exists"})

    return res.json({status_code: "good", msg: "user found", user})
  }

  async authorizationUser(req, res, next) {
	const { username, password } = req.body.data;

	const user = await User.findOne({
		attributes: ['login', 'password', 'roleId'],
		where: { login: username },
		include: {
			model: Role,
			attributes: [ 'role_name' ]
		}
	})

	let comparePassword = bcrypt.compareSync(password,user.password);

	if(!comparePassword){
		return res.json({success: false, message: 'указан не верный пароль'})
	}

	return res.json({ success: true, user })
  }

  async registrationUser(req, res, next) {
    try{
        const { username, password } = req.body.data;

		const candidate = await User.findOne( 
			{ 
				where: { login: username } 
			});

		if(candidate) {
			return res.json({success: false, message: 'Такой пользователь уже зарегистрирован, попробуй другой login'})
		}

		const hashPassword = await bcrypt.hash(password, 5)

		const user = await User.create({
			login: username, password: hashPassword, 
		})

		return res.json({success: true, message: 'Учётная запись успешно зарегистрирована'})
        
    } catch(error) {
        console.log('Ошибка сервера сервера: ', error)
    }
  }
}

module.exports = new userService()