import { Request, Response } from "express"
import { Department } from "./Departament-model"


export const getDepartament = async (req: Request, res: Response) => {
    try {
        const departaments = await Department.find()
        res.status(200).json({
            success: true,
            message: "Departaments retrieved",
            data: departaments
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Departaments can't be retrieved",
        })
    }
}