import React, { useRef, useEffect, useState } from 'react';
// import { v2 as cloudinary } from 'cloudinary';
// cloudinary.config({
//     cloud_name: 'dohtfj5zs',
//     api_key: '588842527859546',
//     api_secret: '-WihU7kL-S4JYThwqLF_aGcWBKw'
// });

function Camera() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const getCamera = () => {
        const videoElement = document.querySelector('video');
        videoElement.style = "display:block;"
        navigator.mediaDevices
            .getUserMedia({
                video: { width: 500, height: 1920 }
            })
            .then(stream => {
                let camera = videoRef.current;
                camera.srcObject = stream;
                camera.play();
            })
            .catch(err => {
                console.log.error(err);
            })
    }

    const takePhoto = () => {
        const width = 500;
        const height = 800;

        let camera = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let context = photo.getContext('2d');
        context.drawImage(camera, 0, 0, width, height);

        setHasPhoto(true);

    }

    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');
        ctx.clearRect(0, 0, photo.width, photo.height)
        setHasPhoto(false);
    }

    useEffect(() => {
        getCamera();
    }, [videoRef])

    const closeCamera = () => {
        let camera = videoRef.current;
        camera.srcObject.getVideoTracks().forEach(track => track.stop());
        const videoElement = document.querySelector('video');
        videoElement.style = "display:none;"
    }

    return (
        <div className="Camera">
            <div className='camera'>
                <video ref={videoRef} autoPlay></video>
                <button onClick={getCamera}>Open Camera</button>

                <button onClick={takePhoto}>Take Picture of Receipt!</button>
                <button onClick={closeCamera}>Close Camera</button>
            </div>
            <div className={'result ' + (hasPhoto ? 'hasPhoto'
                : '')}>
                <canvas ref={photoRef}></canvas>
                <button onClick={closePhoto} >Close!</button>
            </div>
        </div>
    );
}
export default Camera;