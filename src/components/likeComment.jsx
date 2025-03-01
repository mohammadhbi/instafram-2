import React from 'react'
import like from '../assets/images/Frame (10).png'
import comment from '../assets/images/Frame (11).png'
import save from '../assets/images/Frame (9).png'
function LikeComment() {
  return (
   <>
    <div>
        <img src={like} alt="like" />
        <img src={comment} alt="like" />
    </div>
    <div>
        <img src={save} alt="" />
    </div>
   </>
  )
}

export default LikeComment