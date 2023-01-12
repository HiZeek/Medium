// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../sanity";

export default function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { _id, name, email, comment } = JSON.parse(req.body);

    try {
        client.create({
            _type: 'comment',
            post: {
                _type: 'reference',
                _ref: _id
            },
            name,
            email,
            comment
        });
    } catch (error) {
        return res.status(500).json({ message: `Couldn't submit comment`, error})
    }
  res.status(200).json({ name: "Comment submitted" });
}
