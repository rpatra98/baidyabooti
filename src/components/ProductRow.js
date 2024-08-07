// /components/ProductRow.js
'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import DeleteProduct from '../lib/DeleteProduct';
import base64ToBlob from '../utils/base64ToBlob';

export default function ProductRow({ product }) {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        const blob = base64ToBlob(product.prodImage, 'image/png');
        const imageURL = URL.createObjectURL(blob);
        setImageSrc(imageURL);

        // Cleanup URL object when the component unmounts
        return () => URL.revokeObjectURL(imageURL);
    }, [product.prodImage]);

    return (
        <tr>
            <td>
                <img src={imageSrc} alt={product.prodName} width="100" />
            </td>
            <td>{product.prodName}</td>
            <td>{product.prodDescHead}</td>
            <td>{product.prodDesc}</td>
            <td>{product.prodCategory}</td>
            <td>₹ {product.prodPrice}</td>
            <td>
                <Link href={'update/' + product._id}>
                    <button>Edit</button>
                </Link>
                <DeleteProduct id={product._id} />
            </td>
        </tr>
    );
}
