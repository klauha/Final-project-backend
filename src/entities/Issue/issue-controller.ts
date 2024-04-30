import { Request, Response } from "express";
import { Issue } from "./Issue-model";
import { EstadoDeIncidencia } from "../../database/migrations/1714209683768-issues";
import { IssueType } from "../issueType/IssueType-model";
import { Department } from "../departament/Departament-model";

export const createIssue = async (req: Request, res: Response) => {
    try {
        const { title, issueTypeId, departmentId, description, userId } = req.body

        if (!title || !issueTypeId || !departmentId || !userId) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Missing required fields"
                }
            )
        }
        const newIssue = Issue.create({
            title,
            description,
            issue_type: issueTypeId,
            department: departmentId,
            user:
            {
                id: req.tokenData.userId
            }

        })

        res.status(201).json(
            {
                success: true,
                message: "Issue created successfully"
            }
        )
    } catch (error) {

        res.status(500).json(
            {
                success: false,
                message: "cant create issue"
            }
        )
    }
}

export const deleteIssue = async (req: Request, res: Response) => {

    try {
        const issueId = parseInt(req.params.id)

        const issueToDelete = await Issue.findOne({
            where: {
                id: issueId
            },
        })

        if (!issueToDelete) {
            return res.status(404).json({
                success: false,
                message: "Issue not found to delete on DB"
            })
        }
        await Issue.delete(
            { id: issueId }
        )

        res.status(201).json(
            {
                success: true,
                message: "Issue deleted successfully"
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "cant delete issue"
            }
        )
    }






}