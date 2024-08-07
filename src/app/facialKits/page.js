import { Typography } from "@mui/material";

// const getProducts = async () => {
//     let data = await fetch("http://localhost:3000/api/products");
//     data = await data.json();
//     console.log(data);
//     if (data.success) {
//         return data.result;
//     } else {
//         return { success: false }
//     }
// }

export default async function aboutUs() {
    // const products = await getProducts();
    return (
        <>
            <Typography variant="h3" align="center">
                Facial Kits Section
            </Typography>
            {/* <h1>Product List</h1>
            <table border="1" style={{ margin: '8ch' }}>
                <thead>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Category</td>
                    <td>Price</td>
                </thead>
                <tbody>
                    {
                        products.map((item) => (
                            <tr>
                                <td>{item.prodName}</td>
                                <td>{item.prodDesc}</td>
                                <td>{item.prodCategory}</td>
                                <td>{item.prodPrice}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> */}
        </>
    )
}