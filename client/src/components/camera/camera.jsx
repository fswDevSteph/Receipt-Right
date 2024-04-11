import React, { useRef, useEffect, useState } from 'react';
// import { v2 as cloudinary } from 'cloudinary';
// cloudinary.config({
//     cloud_name: 'dohtfj5zs',
//     api_key: '588842527859546',
//     api_secret: '-WihU7kL-S4JYThwqLF_aGcWBKw'
// });

function Camera() {
    // Create a reference to the video element and (null) is the initial value which means the video element is not yet created
    const videoRef = useRef(null);
    // Create a reference to the photo element and (null) is the initial value which means the photo element is not yet created
    const photoRef = useRef(null);

    // Create a state variable "hasPhoto" and "setHasPhoto" is the function to update the state variable
    const [hasPhoto, setHasPhoto] = useState(false);

    const getCamera = () => {
        const videoElement = document.querySelector('video'); // Selects the video element
        videoElement.style = "display:block;" // Sets the video element to display block
        navigator.mediaDevices // Access to the camera
            .getUserMedia({ // Get the user's camera
                video: { width: 500, height: 1920 } // Set the width and height of the video
            })
            .then(stream => { // If the camera is accessed successfully
                let camera = videoRef.current; // Set the camera to the video element
                camera.srcObject = stream; // Set the source of the video element to the stream
                camera.play(); // Play the video
            })
            .catch(err => { // If there is an error
                console.error(err); //Just log it to the console so we can see that there was an error
            })
    }

    const takePhoto = () => { // Function to take a photo
        const width = 500; // Sets the width of the photo
        const height = 800; // Sets the height of the photo

        let camera = videoRef.current; // Set the camera to the video element
        let photo = photoRef.current; // Set the photo to photoRef.current which is the photo element

        photo.width = width; // Set the width of the photo element
        photo.height = height; // Set the height of the photo element

        let context = photo.getContext('2d'); // Get the context of the photo element
        context.drawImage(camera, 0, 0, width, height); // Draw the image on the photo element which means take a photo

        setHasPhoto(true); // Set the state variable hasPhoto to true once the photo is taken

    }

    const closePhoto = () => { // Function to close the photo so its no longer dsisplaying on the screen
        let photo = photoRef.current; // Set the photo to the photo element
        let ctx = photo.getContext('2d'); // Get the context of the photo element
        ctx.clearRect(0, 0, photo.width, photo.height) // Clear the photo element
        setHasPhoto(false); // Set the state variable hasPhoto to false once the photo is closed
    }

    useEffect(() => { // useEffect hook to run the getCamera function when the component mounts
        getCamera(); // Get the camera
    }, [videoRef]) // The useEffect hook will run when the videoRef changes

    const closeCamera = () => { // Function to close the camera so you dont have to keep looking at yourself lol
        let camera = videoRef.current; // Set the camera to the video element
        camera.srcObject.getVideoTracks().forEach(track => track.stop()); // Stop the video tracks
        const videoElement = document.querySelector('video'); // Select the video element
        videoElement.style = "display:none;" // Set the video element to display none so the camera is closed
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