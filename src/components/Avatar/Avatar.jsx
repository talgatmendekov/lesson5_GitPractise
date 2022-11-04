import './Avatar.css'

const Avatar = ({logoTitle, userLogo}) => {
    return <img className='avatar' src={userLogo} alt={logoTitle} />
}

export default Avatar