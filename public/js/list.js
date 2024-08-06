async function getImages () {
	const apiKey = "uG1og2BBDQveA1KvQ2jnwRW9uXAzJbvGeL8zCVxiJhrSXFJMMVUMfIRD"
	const url = "https://api.pexels.com/v1/search?per_page=1&query=";
	const favorites = document.querySelectorAll('.landmark-wrapper');

	favorites.forEach(async favEl => {
		const country = favEl.dataset.country;
		const res = await fetch(url + country, {
			headers: {
				Authorization: apiKey
			}
		});
		const data = await res.json();

		const img = favEl.querySelector('img');

		img.src = data.photos[0].src.medium;
	})

}

getImages();
