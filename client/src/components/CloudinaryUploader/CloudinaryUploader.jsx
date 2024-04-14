import React, { useRef, useEffect, useState } from 'react';
import './CloudinaryUploader.css';
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
            tag: ['receipt'],
            environmentVariable: 'CLOUDINARY_URL=cloudinary://588842527859546:-WihU7kL-S4JYThwqLF_aGcWBKw@dohtfj5zs'
        }, function (error, result) {
            console.log(result);
        })
    }, []);

    return (
        <div>
            <h1>Take or Upload Receipt Image</h1>
            <h3>(Be sure to complete the <span className='required'>*</span>required fields first!)</h3>

        </div>
    )
}

export default CloudinaryUploader;