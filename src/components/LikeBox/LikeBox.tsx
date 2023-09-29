import './LikeBox.scss';

interface LikeBoxInt {
    likes?: number,
    like?: boolean,
    callback?: () => void,
    type?: 'like'| 'info'
}

function LikeBox({ likes=0, like=false, callback ,type='like'}: LikeBoxInt) {
    return (
        <div className={`likes-box ${like ? 'likes-box_active' : ''}`}>
            <span className={`likes-box__icon likes-box__icon_type_${type}`} onClick={callback}></span>
            <p className="likes-box__number">{likes}</p>
        </div>
    )
}

export default LikeBox;