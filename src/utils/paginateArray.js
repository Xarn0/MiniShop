export default function paginateArray(data, itemsPerPage = 10) {
	if (!Array.isArray(data)) return;
	const totalAllPages = Math.ceil(data.length / itemsPerPage);
	const pages = [];

	for (let i = 0; i < totalAllPages; i++) {
		pages.push({
			page: i + 1,
			items: data.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
		});
	}
	return pages;
}
