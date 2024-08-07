// export default function update(){
//     return (
//         <>
//             This is update section of crud operations
//         </>
//     )
// }
// "use client"
// function base64ToFile(base64, filename) {
//     return new Promise((resolve, reject) => {
//         try {
//             // Split the base64 string to remove the data URL part
//             const arr = base64.split(',');
//             const mime = arr[0].match(/:(.*?);/)[1];
//             const bstr = atob(arr[1]);
//             let n = bstr.length;
//             const u8arr = new Uint8Array(n);

//             while (n--) {
//                 u8arr[n] = bstr.charCodeAt(n);
//             }

//             // Create a Blob from the binary data
//             const blob = new Blob([u8arr], { type: mime });

//             // Optionally, create a File from the Blob
//             const file = new File([blob], filename, { type: mime });

//             resolve(file);
//         } catch (error) {
//             reject(error);
//         }
//     });
// }
// import DeleteProduct from "@/lib/DeleteProduct";
// import { Typography } from "@mui/material";
// import Link from "next/link";


// const getProducts = async () => {
//     let data = await fetch("http://localhost:3000/api/products", { cache: "no-cache" });
//     data = await data.json();
//     if (data.success) {
//         return data.result;
//     } else {
//         return { success: false }
//     }
// }



// export default async function update() {
//     const products = await getProducts();

//     function base64ToBlob(base64String) {
//         // Decode the base64 string
//         const byteString = atob(base64String.split(',')[1]);
        
//         // Create an array buffer
//         const arrayBuffer = new ArrayBuffer(byteString.length);
//         const uint8Array = new Uint8Array(arrayBuffer);
    
//         // Convert each character to a byte
//         for (let i = 0; i < byteString.length; i++) {
//             uint8Array[i] = byteString.charCodeAt(i);
//         }
    
//         // Create a Blob from the array buffer
//         const blob = new Blob([arrayBuffer], { type: "image/png" });
//         const file = new File([blob], "image.png", {type:"image/png"});
//         return file;
//     }
    

//     return (
//         <>
//             <Typography variant="h3" align="center">
//                 All Products
//             </Typography>
//             <h1>Product List</h1>
//             <table border="1" style={{ margin: '8ch' }}>
//                 <thead>
//                     <td>Image</td>
//                     <td>Name</td>
//                     <td>Description</td>
//                     <td>Category</td>
//                     <td>Price</td>
//                 </thead>
//                 <tbody>
//                     {
//                         products.map((item) => (
//                             <tr key={item._id}>
//                                 <td>
//                                     {item.prodImage = base64ToBlob(item.prodImage)}
//                                 </td>
//                                 <td>{item.prodName}</td>
//                                 <td>{item.prodDesc}</td>
//                                 <td>{item.prodCategory}</td>
//                                 <td>{item.prodPrice}</td>
//                                 <td>
//                                     <Link style={{ marginRight: '3ch' }} href={"update/" + item._id}>
//                                         <button>
//                                             Edit
//                                         </button>
//                                     </Link>
//                                     <DeleteProduct id={item._id} /></td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </>
//     )
// }

// /pages/update.js
import { Typography } from '@mui/material';
import ProductList from '../../components/ProductList';

const getProducts = async () => {
    const response = await fetch('http://localhost:3000/api/products', { cache: 'no-cache' });
    const data = await response.json();
    return data.success ? data.result : [];
};

export default async function Update() {
    const products = await getProducts();

    return (
        <>
            <Typography variant="h3" align="center">
                All Products
            </Typography>
            <ProductList products={products} />
        </>
    );
}