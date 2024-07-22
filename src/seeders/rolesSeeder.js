const { Role } = require('../models/model.js');
const sequelize = require('../db.js')

async function seedRoles() {
    await sequelize.sync();
    const roleAdmin = await Role.create(
        { 
            role_name: 'admin'
        });
    const roleUser = await Role.create(
        { 
            role_name: 'user'
        });
  
    const roles = [
        roleAdmin,
        roleUser
    ];
  
    let role;
    for (let i; i < roles.length; i++) {
        role = roles[i];
        await Role.create(role);
        i++;
    }
  }

module.exports = { seedRoles };