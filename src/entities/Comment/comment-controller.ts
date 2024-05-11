import { Request, Response } from "express"
import { Issue } from "../issue/Issue-model"
import { Comment } from "./Comment-model"
import { User } from "../user/User-model"

export const createComment = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.userId
        const { issueId, comment } = req.body
        const issueFound = await Issue.findOne({
            where: {
                id: issueId,
                user: {
                    id: userId
                }
            }
        })

        if (!issueFound) {
            return res.status(404).json({
                success: false,
                message: "Issue not found",
            })
        }
        if (issueFound.status ==='CERRADA') {
            return res.status(400).json({
                success: false,
                message: "Can't add comments to a closed issue",
            })
        }


        const newComment = await Comment.create({
            issue: issueFound,
            content:comment,
            user:
            {
                id: req.tokenData.userId
            }
        }).save();

        res.status(201).json({
            success: true,
            message: "Comment created",
            data: newComment
        })

    } catch (error:any) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Comment can't be created",
            error:error.message
        })
    }
}

export const getCommentsByIssue = async (req: Request, res: Response) => {
    try {
        const issueId = parseInt(req.params.id)
        const issueFound = await Issue.findOne({
            where: {
                id: issueId
            }, relations:["user", "comments", "comments.user"]
        })    
        res.status(200).json({
            success: true,
            message: "Comments retrieved",
            data: issueFound
        })
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: "Comments can't be retrieved",
            error:error.message
        })  
    }
}                   