import React from 'react'
import Avatar from './Avatar/Avatar'

const UserInfo = (props) => {
  return (
    <div className='userInfo'>
        <Avatar logoTitle={props.logoTitle} userLogo={props.userLogo}/>
        <h3>{props.title}</h3>
    </div>
  )
}

export default UserInfo