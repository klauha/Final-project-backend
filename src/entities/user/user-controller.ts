import { Request, Response } from "express";
import { User } from "./User-model";


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

        const userId = req.tokenData.userId;

        const profile = await User.findOne(
            {
                where:
                {
                    id: userId

                },select: ["id", "name", "surname", "email", "is_active"]
            }
        )
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