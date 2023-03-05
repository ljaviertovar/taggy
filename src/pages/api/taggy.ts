import type { NextApiRequest, NextApiResponse } from "next"

import * as taggyTags from "@/data/tagsByCategories"

import { Tag, Taggy } from "@/types"

export default function handler(req: NextApiRequest, res: NextApiResponse<Taggy[]>) {
	const { tagsDetected } = req.body

	let allTags: string[] = []

	// const taggyAdapter = (tags: string[], selected = false) => {
	// 	return tags
	// 		.filter(tag => tagsDetected.includes(tag) && !allTags.includes(tag))
	// 		.map(tag => {
	// 			allTags.push(tag)
	// 			return { name: tag, selected }
	// 		})
	// }

	const taggyAdapter = (tags: string[], selected = false): Tag[] => {
		const found = tags.filter(tag => tagsDetected.includes(tag) && !allTags.includes(tag))

		if (found.length && !selected) {
			return tags.map(tag => {
				allTags.push(tag)
				return { name: tag, selected }
			})
		} else if (found.length) {
			return found.map(tag => {
				allTags.push(tag)
				return { name: tag, selected }
			})
		}

		return []
	}

	const getOtherTopTags = (topTags: string[]) => {
		let count = 0
		let otherTags: string[] = []
		const topMatch = topTags.filter(tag => tagsDetected.includes(tag))

		for (let tag of topTags) {
			if (!topMatch.includes(tag) && !otherTags.includes(tag) && count < 6) {
				otherTags.push(tag)
				allTags.push(tag)
				count++
			}
		}

		return otherTags.map(tag => {
			return { name: tag, selected: false }
		})
	}

	const getRestKewords = () => {
		return tagsDetected.filter((tag: string) => !allTags.includes(tag))
	}

	const topTags = taggyAdapter(taggyTags.top100, true)
	const otherTopTags = getOtherTopTags(taggyTags.top100)
	const art = taggyAdapter(taggyTags.art)
	const bussiness = taggyAdapter(taggyTags.bussiness)
	const contest = taggyAdapter(taggyTags.contest)
	const fashion = taggyAdapter(taggyTags.fashion)
	const fitness = taggyAdapter(taggyTags.fitness)
	const foodAndBeverage = taggyAdapter(taggyTags.foodAndBeverage)
	const holiday = taggyAdapter(taggyTags.holiday)
	const likesAndFollows = taggyAdapter(taggyTags.likesAndFollows)
	const music = taggyAdapter(taggyTags.music)
	const nature = taggyAdapter(taggyTags.nature)
	const pet = taggyAdapter(taggyTags.pet)
	const photography = taggyAdapter(taggyTags.photography)
	const reels = taggyAdapter(taggyTags.reels)
	const techAndGadgets = taggyAdapter(taggyTags.techAndGadgets)
	const travel = taggyAdapter(taggyTags.travel)
	const wedding = taggyAdapter(taggyTags.wedding)
	const allKewords = taggyAdapter(getRestKewords())

	res.status(200).json([
		{
			category: "TOP Hashtags",
			tags: topTags,
		},
		{
			category: "Other trends Hashtags",
			tags: otherTopTags,
		},
		{
			category: "Art",
			tags: art,
		},
		{
			category: "Bussines",
			tags: bussiness,
		},
		{
			category: "Contest",
			tags: contest,
		},
		{
			category: "Fashion",
			tags: fashion,
		},
		{
			category: "Fitness",
			tags: fitness,
		},
		{
			category: "Food and Beverage",
			tags: foodAndBeverage,
		},
		{
			category: "Holiday",
			tags: holiday,
		},
		{
			category: "Likes and Follows",
			tags: likesAndFollows,
		},
		{
			category: "Music",
			tags: music,
		},
		{
			category: "Nature",
			tags: nature,
		},
		{
			category: "Pet",
			tags: pet,
		},
		{
			category: "Photography",
			tags: photography,
		},
		{
			category: "Reels",
			tags: reels,
		},
		{
			category: "Tech and Gadgets",
			tags: techAndGadgets,
		},
		{
			category: "Travel",
			tags: travel,
		},
		{
			category: "Wedding",
			tags: wedding,
		},
		{
			category: "Keywords Detected",
			tags: allKewords,
		},
	])
}
