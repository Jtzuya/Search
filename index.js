const searchInput = document.getElementById('searchInput')

searchInput.addEventListener('keyup', search)

function search() {
    const searchingVal = searchInput.value
    const lowerCasedSearchingVal = searchingVal.toLowerCase()
    
    let products = document.querySelectorAll('.__eachProduct')

    Array.from(products).map((product) => {
        /* Check README.md for more information about firstChild and firstElementChild */
        // Grabbing each product title
        const productTitle = product.firstElementChild.firstElementChild.querySelector('.__eachTitle').textContent
        const lowerCasedProductTitle = productTitle.toLocaleLowerCase()

        if(lowerCasedProductTitle.indexOf(lowerCasedSearchingVal) !== -1) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }

        // console.log(book)
        // console.log(productTitle)
    }) 

    // console.log(productParentCase, products)
    // return console.log(textDownCase)
}
