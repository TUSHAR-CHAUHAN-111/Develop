import bcrpt from 'bcryptjs';
import  Jwt  from 'jsonwebtoken';
import User from "../model/user.js";


export const singIn = async(req,res) =>{
    const {email,password} = req.body;
    console.log(req.body);
    try {
        const existUser = await User.findOne({email});
        if(!existUser) return  res.status(404).json({message:"USER DOESN'T EXIST."});
        const isPassword = await bcrpt.compare(password,existUser.password);
        if(!isPassword) return res.status(400).json({message:"INVALID CREDENTIALS."});
        const token = Jwt.sign({email:existUser.email,id:existUser._id},"test",{expiresIn:"1h"});
        res.status(200).json({result:existUser,token});

    } catch (error) {
        res.status(500).json({message:"Something Want to Wrong."});
    }
}

export const singUp = async(req,res) =>{
    const {email,password,confirmPassword,firstName,lastName} = req.body;
    try {
        const existUser = await User.findOne({email});
        if(existUser) return  res.status(400).json({message:"USER ALREADY EXISTS."});
        if(password !== confirmPassword) return res.status(400).send({message:"PASSWORD DON'T MATCH"});
        const hashPassword = await bcrpt.hash(password,12);
        const result = await User.create({email,password:hashPassword,name:`${firstName} ${lastName}`});
        const token = Jwt.sign({email:result.email,id:result._id},"test",{expiresIn:"1h"});
        res.status(200).json({result,token});

    } catch (error) {
        res.status(500).json({message:"Something Want to Wrong."});
    }
}