const { User } = require("../models/model");

require("../models/model");

class userService {
  async login(req, res) {
    const user = await User.findOne({
      where: { id: 1}
    })
    if(!user) return res.json({status_code: "bad", msg: "user not exists"})

    return res.json({status_code: "good", msg: "user found", user})
  }
}

module.exports = new userService()