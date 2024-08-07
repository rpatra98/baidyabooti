import ProductList from "@/components/ProductList";

const getProduct = async () => {
    const response = await fetch('http://localhost:3000/api/products', { cache: 'no-cache' });
    const data = await response.json();
    return data.success ? data.result : [];
}

export default async function SkinCareProduct(){
    const products = await getProduct();
    const runthis = () => {
        console.log(products)
    }
    return (
        <>
            Hello
            {runthis()}
            {/* <ProductList products={products}/> */}
        </>
    )
}