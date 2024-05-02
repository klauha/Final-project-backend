import { Request, Response } from "express";
import { Issue } from "./Issue-model";
import { EstadoDeIncidencia } from "../../database/migrations/1714209683768-issues";

export const createIssue = async (req: Request, res: Response) => {
    try {
        const { title, issueTypeId, departmentId, description } = req.body

        if (!title || !issueTypeId || !departmentId) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Missing required fields"
                }
            )
        }

        const newIssue = await Issue.create({
            title,
            description,
            issue_type: issueTypeId,
            department: departmentId,
            user:
            {
                id: req.tokenData.userId
            }

        }).save()        

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

export const updateIssueStatus = async (req: Request, res: Response) => {
    try {
        const issueId = parseInt(req.params.id)
        const issueStatus = req.body.issueStatus

        const issueToUpdate = await Issue.findOne({
            where: {
                id: issueId
            },
        })

        if (!issueToUpdate) {
            return res.status(404).json(
                {
                success: false,
                message: "Issue not found"
                }
            )
        }
        if (!(issueStatus in EstadoDeIncidencia)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Issue status not valid"
                }
            )
        }

        issueToUpdate.status = issueStatus
        await issueToUpdate.save()


        res.status(200).json(
            {
                success: true,
                message: "Issue updated successfully"
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "cant update issue"
            }
        )
    }

}
