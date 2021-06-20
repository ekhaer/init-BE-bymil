class UserController {
    static async getUser (req, res, next) {
        res.send('Get User Page!')
        console.log("get user controller")
    }

    static login(req, res, next) {
        let { email, password } = req.body
        console.log(email)
        User.findOne({ where : {
            email : email
            }
        })
        .then(data => {
            if (!data) {
                throw {
                    name : 'Unauthorized'
                }
            } else {
                //check password
                const isPswMatch = comparePsw(password, data.password);
                if (!isPswMatch) {
                    console.log("!unmatch");
                    throw {
                        name : 'Unauthorized'
                    }
                } else {
                    //generate jwt token
                    const payload = {
                        id : data.id,
                        email : data.email
                    }
                    const token = generateToken(payload)
                    res.status(200).json({ access_token : token })
                }
            }
        })
        .catch(err => {
            console.log(err, ">>>");
            next(err)
        })
    }
}

module.exports = UserController