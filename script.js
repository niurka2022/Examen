function buyProduct(productName) {
    alert(`¡Has comprado ${productName}!`);
}

function filterProducts() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const gallery = document.getElementById('productGallery');
    const items = gallery.getElementsByClassName('item');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const productName = item.getElementsByTagName('p')[0].innerText.toLowerCase();
        
        if (productName.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
}
