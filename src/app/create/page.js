'use client'
import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import './styles.css';

export default function create() {
    const [prodImage, setProdImage] = useState("");
    const [prodName, setProdName] = useState("");
    const [prodDescHead, setProdDescHead] = useState("");
    const [prodDesc, setProdDesc] = useState("");
    const [prodCategory, setProdCategory] = useState("");
    const [prodPrice, setProdPrice] = useState("");

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

    const addProduct = async () => {
        let result = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                prodImage,
                prodName,
                prodDescHead,
                prodDesc,
                prodCategory,
                prodPrice
            })
        });
        result = await result.json();
        if (result.success) {
            alert("new product added");
        } else {
            alert('Product upload failed');
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

    return (
        <>
            <div style={{ margin: 'auto', marginTop: '0px', marginBottom: '20px' }}>
                <Typography variant='h4' sx={{ p: 4 }}>Create a new Product to Add</Typography>
            </div>

            <div style={{ width: '700px', margin: 'auto', marginTop: '0px', marginBottom: '0px' }}>
                <input type='file' onChange={handleFileUpload} />
                {
                    prodImage
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
                    margin='normal'
                    fullWidth
                    id='prodDescHead'
                    value={prodDescHead}
                    onChange={(e) => setProdDescHead(e.target.value)}
                    label='Product Description Heading'
                    sx={{width:'100%'}}
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
                    sx={{ width: '100%' }}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', marginBottom: '0px' }}>
                <Button
                    variant="contained"
                    onClick={addProduct}
                >
                    Add Product
                </Button>
            </div>
        </>
    )
}