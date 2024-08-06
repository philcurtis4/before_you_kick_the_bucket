const list = document.querySelector('.list');
const test = [
  {
    landmark_name: 'Zoo',
    country_name: 'Philly'
  },
  {
    landmark_name: 'Boardwalk',
    country_name: 'AC'
  }
]

function displayFavs(favs) {
  for (const fav of favs) {
    list.insertAdjacentHTML('beforeend', `
  <section class="size-40 bg-teal-400 rounded-lg p-3 m-3">
    <p>${fav.landmark_name}</p>
    <p>Country: ${fav.country_name}</p>
    <p>Distance: idk</p>
  </section>

`)
  }
}

displayFavs(test);
