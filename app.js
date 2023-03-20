const factUrl = "/api/v2/facts/today";
const factElem = document.getElementById("fact");

fetch(factUrl)
  .then(response => response.json())
  .then(data => {
    factElem.textContent = data.text;
  })
  .catch(error => {
    console.log(error);
    factElem.textContent = "Failed to fetch fact";
  });
