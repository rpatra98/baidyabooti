'use client'
import { Button, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import './styles.css';
import Link from 'next/link';
import base64ToBlob from '@/utils/base64ToBlob';

export default function editProduct(props) {
    const [prodImage, setProdImage] = useState('');
    const [prodName, setProdName] = useState("");
    const [prodDesc, setProdDesc] = useState("");
    const [prodCategory, setProdCategory] = useState("");
    const [prodPrice, setProdPrice] = useState("");
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        getProductDetail();
    }, []);

    function goBack() {
        window.history.back();
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const base64 = await convertToBase64(file);
                setProdImage(base64);
            } catch (error) {
                console.error('Error converting file to base64', error);
            }
        }
    }

    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const getProductDetail = async () => {
        let productId = props.params.editproduct;
        let productData = await fetch('http://localhost:3000/api/products/' + productId);
        productData = await productData.json();

        if (productData.success) {
            let result = productData.result;
            setProdName(result.prodName);
            setProdDesc(result.prodDesc);
            setProdCategory(result.prodCategory);
            setProdPrice(result.prodPrice);
            const blob = base64ToBlob(result.prodImage, 'image/png');
            const imageURL = URL.createObjectURL(blob);
            setImageSrc(imageURL);
        }
    }

    const updateProduct = async () => {
        let productId = props.params.editproduct;
        let data = await fetch("http://localhost:3000/api/products/" + productId, {
            method: "PUT",
            body: JSON.stringify({ prodImage, prodName, prodDesc, prodCategory, prodPrice })
        });
        data = await data.json();
        if (data.result) {
            alert("Product has been successfully updated");
        }
        goBack();
    }

    return (
        <>
            <div style={{ margin: 'auto', marginTop: '0px', marginBottom: '20px' }}>
                <Typography variant='h4' sx={{ p: 4 }}>Udpate Product</Typography>
            </div>

            <div style={{ margin: 'auto', marginTop: '0px', marginBottom: '20px' }}>
                <img src={imageSrc} alt={prodName} width='100'/>
                <input type='file' onChange={handleFileUpload} />
                {
                    prodImage && (
                        <div>
                            {/* <h2>
                                prodImage Output:
                            </h2> */}
                            {/* <textarea readOnly value={prodImage} rows="10" cols="50"/> */}
                        </div>
                    )
                }
            </div>

            <div style={{ width: '700px', margin: 'auto', marginTop: '0px', marginBottom: '0px' }}>
                <TextField
                    margin="normal"
                    fullWidth
                    id='prodName'
                    value={prodName}
                    onChange={(e) => setProdName(e.target.value)}
                    label='Product Name'
                    autoFocus
                    sx={{ width: '100%' }}
                />
            </div>

            <div style={{ width: '700px', margin: 'auto', marginTop: '0px', marginBottom: '0px' }}>
                <TextField
                    margin="normal"
                    fullWidth
                    id="prodDesc" multiline rows={4}
                    value={prodDesc}
                    onChange={(e) => setProdDesc(e.target.value)}
                    label='Product Description'
                    autoFocus
                    sx={{ width: '100%' }}
                />
            </div>

            <div style={{ width: '700px', margin: 'auto', marginTop: '0px', marginBottom: '0px' }}>
                <TextField
                    margin="normal"
                    fullWidth
                    id='name'
                    value={prodCategory}
                    onChange={(e) => setProdCategory(e.target.value)}
                    label='Product Category'
                    autoFocus
                    sx={{ width: '100%' }}
                />
            </div>

            <div style={{ width: '700px', margin: 'auto', marginTop: '0px', marginBottom: '0px' }}>
                <TextField
                    margin="normal"
                    fullWidth
                    id='prodPrice'
                    value={prodPrice}
                    onChange={(e) => setProdPrice(e.target.value)}
                    label='Product Price'
                    autoFocus
                    sx={{ width: '100%' }}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', marginBottom: '0px' }}>
                <Button variant="contained" onClick={updateProduct}>Update Product</Button>
            </div>
            <Link href={"/update"}>Go back to Product List</Link>
        </>
    )
}