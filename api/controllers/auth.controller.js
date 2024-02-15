import User from  '../models/user.models.js';
import { errorHandlers } from '../utils/error.js';
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"


// 1. SIGN UP:
export const signup = async (req,res,next) => {
  console.log(req.body);
  const {email, password} = req.body;

  if (!email || !password || email === '' || password === '') {
    return next(errorHandlers(400,'Missing fields'));
  }

  // hash the password
  const hashedPassword = bcryptjs.hashSync(password, 10);

  // save the data into the Database using User model
  const newUser = new User({
    email,
    password: hashedPassword
  })

  try {
    await newUser.save();
    res.json("Sign Up successful")
  } catch (error) {
    next(error)
  }
}

export const signin = async (req,res,next) => {
  const {email, password} = req.body

  if (!email || !password || email === '' || password === '') {
    next(errorHandlers(403,"Email or Password is incorrect"));
  }

  try {
    // find user in the database
    const validUser = await User.findOne({email})
    if (!validUser) {
      return next(errorHandlers(403, "No account found with this Email"))
    }

    // check if the password is correct
    const isValidPassword = await bcryptjs.compareSync(password, validUser.password)

    if (!isValidPassword) {
      return next(errorHandlers(403, 'Wrong password'))
    }

    // authenticate the password using JWT
    const token = jwt.sign({id: validUser._id}, process.env.SECRET_KEY)

    const {password: pass, ...rest} = validUser._doc

    // send back a response without the password to keep it secure
    res.status(200).cookie("access_token", token, {
      httpOnly: true,
    }).json(rest)

  } catch (error) {
    next(error)
  }
}