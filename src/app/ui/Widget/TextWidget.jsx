import React from 'react'
import Div from '../Div'

export default function TextWidget({logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget">
      <h3><span style={{color:"#FF4A16"}}>A</span>rshad vk</h3>
      <p>{text}</p>
    </Div>
  )
}
