import { hash, verify } from "argon2";
import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { User } from "../entity/User";


export const getMyUser:RequestHandler = async (req,res) => {

  // no tines una session activa
  if(!req.session._userId){
    res.status(403).json({
      error:'No access'
    })
  }

  const user = await User.findOne(req.session._userId)
  res.json({user})
}
export const register: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(400).json({
      errors: errors.array(),
    });

  }

  let { name, email, password } = req.body;
  try {
    password = await hash(password);

    const user = await User.create({ name, password, email }).save();
    // ok
    req.session._userId = user.id
    res.json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const login: RequestHandler = async (req, res) => {
  let { email, password } = req.body;
  
  const errors = validationResult(req);
  if (!errors.isEmpty())
  return res.status(400).json({
    error:true,
    errors: errors.array(),
  });
  

  try {
    const user = await User.findOne({ email });
    if (!user){
      return res.status(400).json({
        error: "Incorrect Credentials",
      });

    }

    const valid = await verify(user.password, password);
    if (!valid){
      return res.status(400).json({
        error: "Incorrect Credentials",
      });

    }
    
      
    } catch (error) {

      return res.status(400).json({
        error:error.message
      });

    }
};
