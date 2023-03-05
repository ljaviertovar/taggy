import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
	name: string
}

export default async function handle(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { imageUrl } = req.body

	const apiKey = process.env.API_KEY_GOOGLE

	// El ID de búsqueda personalizada de Google
	const searchEngineId = process.env.CX_GOOGLE

	// La URL para hacer la solicitud a la API de búsqueda de Google
	const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&searchType=image&q=&imgUrl=${encodeURIComponent(
		imageUrl
	)}&num=3`

	console.log({ apiUrl })

	// Hacer una solicitud a la API de búsqueda de Google
	const response = await fetch(apiUrl)

	// Obtener los resultados de la respuesta
	const data = await response.json()

	// Retornar los resultados de la búsqueda
	console.log(data.items)

	res.status(200).json(data.items)
}
