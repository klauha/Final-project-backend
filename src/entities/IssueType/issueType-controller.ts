import { Request, Response } from "express"
import { IssueType } from "./IssueType-model"

export const getIssueType = async (req: Request, res: Response) => {
    try {
        const issueTypes = await IssueType.find()
        res.status(200).json({
            success: true,
            message: "IssueTypes retrieved",
            data: issueTypes
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "IssueTypes can't be retrieved",
        })
    }
}