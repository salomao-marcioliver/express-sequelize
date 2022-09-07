import { Request, Response } from 'express';
import { User } from '../models/User';

export const home = async(req: Request, res: Response)=>{

    const users = await User.findAll()

    //build + save
    /*const user = User.build({
        name: 'Lara',
        age: 4
    });
    await user.save();
    */

    /*
    //create
    const user = await User.create({
        name: 'Theo',
        age: 7
    })
    */

    res.render('pages/home', {
        users
    });
};