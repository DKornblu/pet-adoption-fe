import React from 'react'
// pick a duck and pass it one level up
// import gray_duck from '../Images/gray_duck.png'
// import black_duck from '../Images/black_duck.png'
// import white_duck from '../Images/white_duck.png'

const QuackIcon = ({duckImg}) => {
  return (
    <div className="QuackIcon">
        <img src={duckImg} 
        alt="ducky" className="DuckImg" />
        <div className="QuackName">QuACK</div>
    </div>
  )
}

export default QuackIcon