// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "Production",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2021-08-31",
});

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
    console.log('comment submitted');
    
  res.status(200).json({ name: "Comment submitted" });
}
