const {validationResult} = require('express-validator')
const userService = require('../service/user.service')
const {generateToken} = require('../../utils/jwt')

const register = async (req, res) => {

  const error = validationResult(req)

  if(!error.isEmpty()){
    return res.status(400).json({
      errors: error.array()
    })
  }

  const {name, email, password} = req.body

  try {
    const newUser = await userService.createUser({name, email, password})
    const token = generateToken(newUser)

    return res.status(200).json({
      message: 'user register successfully',
      user: {
        name: user.name,
        role: user.role,
      },
      token,
    })
    
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      error: error
    })
  }
}

const login = async (req, res) => {
  const error = validationResult(req)

  if(!error.isEmpty()){
    return res.status(400).json({
      errors: error.array()
    })
  }

  const {email, password} = req.body

  try{

    const userExists = await userService.loginUser({email, password})
    const token = generateToken(user);

    return res.status(200).json({
      message: "Login successful",
      user: {
        name: user.name,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Authentication failed",
      error: err.message,
    });
  }
}

module.exports = {register, login}