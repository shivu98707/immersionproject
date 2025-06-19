const products = [
  "iPhone 14",
  "Samsung Galaxy S22",
  "OnePlus 11",
  "Google Pixel 8",
  "MacBook Air",
  "Dell XPS 13",
  "samsung galaxy s25 ultra",
  "Apple Watch Series 9"
];

function searchProduct() {
  const input = document.getElementById("searchInput").value.trim();
  const errorMsg = document.getElementById("errorMsg");
  const resultArea = document.getElementById("resultArea");

  errorMsg.textContent = '';
  resultArea.innerHTML = '';

  if (input === '') {
    errorMsg.textContent = "Search field cannot be empty.";
    return;
  }

  const results = products.filter(product =>
    product.toLowerCase().includes(input.toLowerCase())
  );

  if (results.length === 0) {
    resultArea.innerHTML = `<p>No products found matching "${input}".</p>`;
  } else {
    resultArea.innerHTML = `<ul>${results.map(item => `<li>${item}</li>`).join('')}</ul>`;
  }
}
