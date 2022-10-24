export const getMostFrequentObject = (array, key) => {
	let object = {}
	array.forEach(element =>{
		object[element[key]] ??=0
		object[element[key]] += 1
	})

	const elementsSorted = Object.entries(object).sort((a,b) => b[1] - a[1])

	return elementsSorted[0][0]
}

