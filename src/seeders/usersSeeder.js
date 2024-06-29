const { User, Role } = require('../models/model.js');
const sequelize = require('../db.js')

async function seedUsers() {
    await sequelize.sync();
    const roleAdmin = await Role.findOne(
        {
            where: {
                role_name: 'admin'
            }
        }
    )

    const roleUser = await Role.findOne(
        {
            where: {
                role_name: 'user'
            }
        }
    )
    const userAdmin = await User.create(
        { 
            login: 'admin', 
            password: 'admin',
            roleId: roleAdmin.id
        });

    const userUser = await User.create(
        {
            login: 'usert14',
            password: 'user123',
            roleId: roleUser.id
        }
    ) 
  
    const users = [
        userAdmin,
        userUser
    ];
  
    let user;
    for (let i; i < users.length; i++) {
        user = users[i];
        await User.create(user);
        i++;
    }
  }

module.exports = { seedUsers };