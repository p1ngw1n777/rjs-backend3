const { Role } = require('../models/model.js');


async function seedRoles() {
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
    
    // for (const role of roles) {
    //   await Role.create(role);
    // }

    
  }

module.exports = { seedRoles };