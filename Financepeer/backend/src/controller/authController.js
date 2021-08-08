import { hash } from '../utils/hashPass.js';
import userSchema from '../schema/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const userSignup = async(req,res) => {
    try{
        const { name, email, password } = req.body;

        let user = await userSchema.find({email: email});

        if(user.length){
            return res.status(400).json({
                data: {},
                errors: [
                    {
                        value: req.body.email,
                        msg: 'User already exists',
                        param: 'email',
                        location: 'body',
                    },
                ],
                message: 'Unable to create user'
            });
        }

        const hashPassword = await hash(password, 10);
        
        user = new userSchema({
            name,
            email,
            password: hashPassword,
        });

        await user.save();
        res.status(200).json({
            data: {},
            errors: [],
            message: 'Signed Up Successfully'
        });
    }catch(err){
        console.log(err.message)
    }
}

export const userLogin = async(req,res) => {
    try{
        const { email, password } = req.body;
        const user = await userSchema.findOne({ email: email });
        if(!user){
            return res.status(400).json({
                data: {},
                errors: [
                    {
                        value: email,
                        msg: `User does not exist`,
                        param: 'email',
                        location: 'body',
                    },
                ],
                message: 'User not found!'
            });
        }
        const matchPassword = bcrypt.compareSync(password, user.password);
        if(!matchPassword){
            return res.status(400).json({
                data: {},
                errors: [
                    {
                        value: password,
                        msg: 'Invalid Password',
                        params: 'password',
                        location: 'body',
                    },
                ],
                message: 'Unable to login'
            });
        }
        else{
            const token = jwt.sign(
                { id: user._id, name: user.name }, 
                'secret',
                {
                    expiresIn: '1h'
                }
            );
            return res.status(200).json({
                token: token,
                data: {
                    name: user.name,
                    email: user.email
                },
                message: 'Logged in Successfully'
            });

        }
    }catch(err){
        console.log(err.message)
    }
}