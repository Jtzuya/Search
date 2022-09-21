const API = 'https://miamibeachbum.com/products.json'

async function getShopData(url) {
    const fetching = await fetch(url)
    const dataFetched = await fetching.json()
    const products = await dataFetched.products
    const productCase = document.querySelector('.__productList')

    let merge = ''
    products.forEach(product => {
        // console.log(product, product.title)
        const id = product.id
        const title = product.title

        // Configure variants
        const variants = product.variants
        let variantPrice = ''
        const variantLoop = variants.forEach(variant => {
            // console.log(variant.price)
            variantPrice = variant.price
        })
        // console.log(variantPrice)

        // Configure images
        const images = product.images
        let productImage = ''
        const imagesLoop = images.forEach(image => {
            productImage = image.src
        })
        // console.log(productImage)

        if(productImage === '') return;
        return merge += `
            <div class="__eachProduct" id="${ id }">
                <div class="__eachDetails">
                    <div class="__eachContent">
                        <h2 class="__eachTitle">${ title }</h2>
                        <span class="__eachPrice">$${ variantPrice }</span>
                    </div>
                    <div class="skeleton">
                        <img src="${productImage}" alt="">
                    </div>
                </div>
            </div>
        `
    })
    
    return productCase.innerHTML = merge
    // console.log(dataFetched.products)
}

getShopData(API)