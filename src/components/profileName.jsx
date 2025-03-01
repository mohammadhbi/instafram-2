import React from 'react'
import profile from '../assets/images/Frame (4).png'
import tik from '../assets/images/Frame (5).png'
import threeDot from '../assets/images/Frame (7).png'
import postImage from '../assets/images/Auto Layout Horizontal.png'
import LikeComment from './likeComment'
function ProfileName() {
  return (
    <div>
      <div className='flex  items-center mt-5'>
        <img className='mr-2' src={profile} alt="profile" />
        <h1 className='mr-2'>lewishamilton</h1>
        <img className='mr-2 size-4 ' src={tik} alt="tik" />
        <span className=''>• 5h</span>

        <img className='ml-52' src={threeDot} alt="" />


      </div>
      <img className='mt-5' src={postImage} alt="" />
      <div>
        <LikeComment />
      </div>
    </div>
  )
}

export default ProfileName; 