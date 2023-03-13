import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
	const { tags } = req.body

	let text = tags.join(" ")

	const { data } = await axios({
		method: "POST",
		url: "https://api.openai.com/v1/chat/completions",
		headers: {
			Authorization: `Bearer ${process.env.OPENIA_AUTH}`,
			"Content-Type": "application/json",
		},
		data: {
			max_tokens: 400,
			temperature: 0.5,
			model: "gpt-3.5-turbo",
			messages: [
				{ role: "system", content: "You are a helpful Community Manager" },
				{
					role: "user",
					content: `Write 3 short inspirational qoutes for an Instagram post. Use the instructions below:\nUse a natural tone.\nAdd no more than 5 emojis.\nUse the following keywords as a context: ${text.trim()}.\nDon't return hashtags.`,
				},
			],
		},
	})

	const choices = data.choices
	let message = choices[0].message.content

	res.status(200).json(message)
}
