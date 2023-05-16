import React, { useState, useEffect } from 'react'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';

const SmilePage = () => {
    const [dogImg, setDogImg] = useState('')
    const randomJoke = async () => {
        try {
            const res = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await res.json();
            console.log(data.message)
            setDogImg(data.message)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        randomJoke();
    }, [])

    return (
        <div className="SmileContainer">
            {/* <BsEmojiSmileUpsideDown /> */}
            <img src={dogImg} alt="funny" />
        </div>
    )
}

export default SmilePage