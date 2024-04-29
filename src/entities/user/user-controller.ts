import { Request, Response } from "express";
import { User } from "./User-model";
import { log } from "console";


// -------------------GET-ALL-USERS-------------------------------------------------------------
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find({ select: ["id", "name", "surname", "email", "is_active"] })

        if (users.length === 0) {
            return res.status(404).json(
                {
                    success: false,
                    message: "No users found",
                }
            )
        }

        res.status(200).json(
            {
                suceess: true,
                message: "users retrieved successfully",
                data: users
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "users can't be retrieved",
                error: error
            }
        )
    }
}
// -------------------GET-PROFILE-------------------------------------------------------------

export const getProfile = async (req: Request, res: Response) => {

    try {
        console.log(req.tokenData);
        const userId = req.tokenData.userId;


        const profile = await User.findOne(
            {
                where: {
                    id: userId
                },
                select: {
                    id: true,
                    name: true,
                    surname: true,
                    email: true
                },
            })

        if (!profile) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            })
        }
        res.status(200).json({
            suceess: true,
            message: "Profile retrieved successfully",
            data: profile
        })

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Profile can't be retrieved",
                error: error
            }
        )
    }
}
// -------------------UPDATE USER-------------------------------------------------------------

export const updateUserById = async (req: Request, res: Response) => {
    try {

        const userId = req.tokenData.userId
        const userName = req.body.name
        const userSurname = req.body.surname

        const userToUpdate = await User.findOne(
            {
                where: {
                    id: userId,
                }
            }
        )
        if (!userToUpdate) {
            return res.status(404).json({
                success: false,
                messagge: "User not found",
            })
        }
        const userUpdated = await User.update(
            {
                id: userId
            },
            {
                name: userName,
                surname: userSurname
            }
        )

        if (!userUpdated) {
            return res.status(500).json({
                success: false,
                message: "User update failed",
            })
        }

        res.status(200).json({
            success: true,
            messagge: "User updated",
            data: userUpdated
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            messagge: "User can't be  updated",
            error: error
        })
    }
}

// -------------------DELETE USER-------------------------------------------------------------

export const deleteUser = async (req: Request, res: Response)=> {
    try {
        const userId = req.params.id
        const userToRemove: any = await User.findOneBy(
            {
                    id: parseInt(userId),
            }
        )
            
        const userDeleted = await User.remove(userToRemove)

        if (!userDeleted) {
            return res.status(500).json({
                success: false,
                message: "User deletion failed",
            });
        }
        res.status(200).json({
            success: true,
            messagge: "user deleted",
            data: userDeleted
        })





    } catch (error) {
        res.status(500).json({
            success: false,
            messagge: "User can't be  deleted",
            error: error
    
        })
    }
}