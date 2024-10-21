import getProducts from "./getProducts.mjs";

export default async function getCycles() {
    const products = await getProducts();

    return Object.fromEntries(
        await Promise.all(
            products.map(async (product) => [
                product,
                await fetch(`https://endoflife.date/api/${product}.json`).then(x => x.json())
            ]),
        ),
    );
};