//your code here
// An array of band names
let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Led Zeppelin'];

// Function to remove articles from a band name
function removeArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Remove articles and sort the band names
bandNames = bandNames.map(removeArticles).sort();

// Get the ul element by its ID
const bandList = document.getElementById('band');

// Create and append list items to the ul element
bandNames.forEach(function (name) {
  const li = document.createElement('li');
  li.textContent = name;
  bandList.appendChild(li);
});


