import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../user/User-model"
import { log } from "console"


//register
export const register = async (req: Request, res: Response) => {
    try {
        const name = req.body.name
        const surname = req.body.surname
        const email = req.body.email
        const password = req.body.password
       
        console.log('Request body:', req.body)
        if (!name || !email || !password) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Please enter name, surname, email and password"
                }
            );
        }

        if (password.length < 6 || password.length > 8) {
            return res.status(400).json({
                success: false,
                message: "The password must be between 6 and 8 characters."
            })
        }

        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Format email invalid"
                }
            )
        }

        // tratamos la data (encriptamos contraseña)

        const passwordEncrypted = bcrypt.hashSync(password, 6)
        console.log('Encrypted password:', passwordEncrypted)
        // guardamos datos del registro

        const newUser = await User.create({
            name: name,
            surname: surname,
            email: email,
            password: passwordEncrypted,
        }).save()
        console.log('New user:', newUser)
        res.status(201).json(
            {
                success: true,
                message: `User ${newUser.name} created successfully`,
                data: newUser
            }
        )

    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: "Error creating user",
            error: error.message
        })
    }
}

export const login = async (req: Request, res: Response) => {
    try {

        const email = req.body.email;
        const password = req.body.password;
        console.log('Request body:', req.body);
        

        if (!email || !password) {
            console.log(1);
            
            return res.status(400).json({
                success: false,
                message: "Please enter email and password",
            })
        }
        const user = await User.findOne(
            {
                where: {email: email},
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    name: true,
                    surname: true,
                    email: true,
                    password: true,
                    is_active: true,
                    role: {
                        id: true,
                        title: true
                    }
                }
            }
        )


        if (!user) {
            console.log(2);
            return res.status(400).json({
                success: false,
                message: "Email o Pasword invalid",
            })
        }
        const isValidPassword = bcrypt.compareSync(password, user.password);

        if (!isValidPassword) {
            console.log(3);
            
            return res.status(400).json({
                success: false,
                message: "Email o Pasword invalid",
            })
        }

        const token = jwt.sign(
            {
                userId: user.id,
                roleName: user.role.title,
                username: user.name
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "24h"
            }
        )
        res.status(200).json({
            success: true,
            message: "Login successful",
            token: token
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "User cant be logged",
            error: error.message
        })
    }
}