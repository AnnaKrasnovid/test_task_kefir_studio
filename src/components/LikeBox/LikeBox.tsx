import { useState } from 'react';

import { LikeBoxInt } from 'src/interfaces';

import './LikeBox.scss';

function LikeBox({ likes, callback=()=> {} , type = 'like', id=1 }: LikeBoxInt) {
    const [isActiveLike, setIsActiveLike] = useState(false);

    function toggleLike(id: number, isActive: boolean) {
        setIsActiveLike(!isActiveLike)
        callback(id, isActive)
    }

    return (
        <div className={`likes-box `}>
            <span
                className={`
            likes-box__icon 
            likes-box__icon_type_${type} 
            ${isActiveLike && type !== 'info' ? 'likes-box__icon_active' : ''}`}
                onClick={() => toggleLike(id, isActiveLike)}>
            </span>
            <p className="likes-box__number">{likes}</p>
        </div>
    )
}

export default LikeBox;