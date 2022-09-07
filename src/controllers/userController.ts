import { Request, Response } from 'express';
import { User } from '../models/User';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};


export const addUser = (req: Request, res: Response) => {
    let name = req.body.name;
    let age = req.body.age

    let user = new User()
    user = User.build({
        name: name
    })

    if(age == ''){
        user.age = 18
    }else{
        user.age = age
    }

    user.save()

    res.redirect('/')
}


export const excluir = async (req: Request, res: Response) => {
    let id: string = req.params.id;
    let result = await User.findAll({
        where: {
            id
        }
    })
    if(result.length > 0){
        let usuario = result[0]
        await usuario.destroy()
    }
    
    res.redirect('/')
}