import React, { useRef, useEffect, useState } from 'react';

function CloudinaryUploader() {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dohtfj5zs',
            uploadPreset: 'fhblvqoq',
            apiKey: '588842527859546',
            apiSecret: '-WihU7kL-S4JYThwqLF_aGcWBKw',
            environmentVariable: 'CLOUDINARY_URL=cloudinary://588842527859546:-WihU7kL-S4JYThwqLF_aGcWBKw@dohtfj5zs'
        }, function (error, result) {
            console.log(result);
        })
    }, []);

    return (
        <div>
            <h1>Cloudinary Uploader</h1>
            <button onClick={() => {
                widgetRef.current.open();
            }}>Upload Image</button>
        </div>
    )
}

export default CloudinaryUploader;