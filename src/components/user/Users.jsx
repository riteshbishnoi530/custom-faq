import React, { useState,useEffect } from 'react'
const User = () => {
    const [bgColor, setBgColor] = useState('white');
    useEffect(() => {
      const inSideBgColor = setInterval(() => {
          setBgColor(getRandomColor());
      }, 1000);
      return () => clearInterval(inSideBgColor)
    }, [bgColor])
    const getRandomColor = () => {
        const colorLetters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += colorLetters.charAt(Math.floor(Math.random() * colorLetters.length   ))
        }
        return color
    }
    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
    })
  return (
      <div className='flex items-center justify-center h-screen'>
    </div>
  )
}
export default User
