import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../user/User-model";

//register
export const register = async (req: Request, res: Response) => {
    try {
        const { name, surname, email, password } = req.body;

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

        // guardamos datos del registro

        const newUser = await User.create({
            email: email,
            password: passwordEncrypted,
            // first_name: firstName,
            // last_name: lastName

        }).save()

        res.status(201).json(
            {
                success: true,
                message: 'User registered successfully',
                data: newUser
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "user can't be registered",
            error: error
        })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        // RECUPERAR INFO

        const email = req.body.email;
        const password = req.body.password;

        console.log("123");


        // validacion de email password

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are needed",
            })
        }
        const user = await User.findOne(
            {
                where: {
                    email: email
                },
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    password: true,
                    email: true,
                    role: {
                        id: true,
                        name: true
                    }
                }
            }
        )
        console.log(user);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Email o Pasword invalid",
            })
        }
        const isValidPassword = bcrypt.compareSync(password, user.password);
    
        if (!isValidPassword) {
            return res.status(400).json({
                success: false,
                message: "Email o Pasword invalid",
            })
        }

        const token = jwt.sign(
            {
                userId: user.id,
                roleName: user.role.name,
                username: user.first_name
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "2h"
            }

        )

        console.log(112);


        res.status(200).json({
            success: true,
            message: "user logged",
            token: token
        })




    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "user cant be logged",
            error: error.message
        })
    }
}