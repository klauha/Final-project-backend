// import { Request, Response } from "express"
// import { Issue } from "../issue/Issue-model"
// import { Comment } from "./Comment-model"
// import { User } from "../user/User-model"


//         export const createComment = async (req: Request, res: Response) => {
//             try {
//                 const userId = req.tokenData.userId
//                 const { issueId, comment } = req.body
//                 const issueFound = await Issue.findOne({
//                     where: {
//                         id: issueId,
//                         user: {
//                             id: userId
//                         }
//                     }
//                 })

//                 if (!issueFound) {
//                     return res.status(404).json({
//                         success: false,
//                         message: "Issue not found",
//                     })
//                 }
//                 const user = await User.findOne(
//                     {
//                         where: {
//                             id: userId
//                         }
//                     }
//                 )

            


//                 .
//                 const newComment = Comment.create(
//                     {
//                         issue: issueFound,
//                         user: userId,
//                         comment: comment
//                     }
//                 ).save()

//                 res.status(201).json({
//                     success: true,
//                     message: "Comment created",
//                     data: newComment
//                 })

//             } catch (error) {
//                 console.error(error);
//                 res.status(500).json({
//                     success: false,
//                     message: "Comment can't be created",
//                 })
//             }
//         }
    