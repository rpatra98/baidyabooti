// /utils/base64ToBlob.js
function validateBase64(base64String) {
    // Remove data URL prefix if present
    const base64 = base64String.split(',')[1] || base64String;

    // Remove any non-base64 characters
    const cleanedBase64 = base64.replace(/[^A-Za-z0-9+/=]/g, '');

    // Add padding if necessary
    const padding = 4 - (cleanedBase64.length % 4);
    if (padding !== 4) {
        return cleanedBase64.padEnd(cleanedBase64.length + padding, '=');
    }

    return cleanedBase64;
}

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            console.log('Base64 String:', fileReader.result); // Add logging
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
}

export default function base64ToBlob(base64String, mimeType) {
    const validatedBase64 = validateBase64(base64String);
    console.log('Validated Base64 String:', validatedBase64); // Add logging

    try {
        // Decode the base64 string
        const byteString = atob(validatedBase64);

        // Create an array buffer
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uint8Array = new Uint8Array(arrayBuffer);

        // Convert each character to a byte
        for (let i = 0; i < byteString.length; i++) {
            uint8Array[i] = byteString.charCodeAt(i);
        }

        // Create a Blob from the array buffer
        return new Blob([arrayBuffer], { type: mimeType });
    } catch (error) {
        console.error('Failed to decode base64 string:', error);
        throw error;
    }
}


// export default function base64ToBlob(base64String, mimeType) {
//     const byteString = atob(base64String.split(',')[1]);
//     const arrayBuffer = new ArrayBuffer(byteString.length);
//     const uint8Array = new Uint8Array(arrayBuffer);

//     for (let i = 0; i < byteString.length; i++) {
//         uint8Array[i] = byteString.charCodeAt(i);
//     }

//     return new Blob([uint8Array], { type: mimeType });
// }