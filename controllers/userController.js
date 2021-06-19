class UserController {
    static async getUser (req, res, next) {
        res.send('Get User Page!')
        console.log("get user controller")
    }
}

module.exports = UserController