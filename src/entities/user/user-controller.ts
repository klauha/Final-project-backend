import { Request, Response } from "express";
import { User } from "./User-model";



export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find()

        res.status(200).json({
            suceess: true,
            message: "users retrieved successfully",
            data: users
        })
        
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