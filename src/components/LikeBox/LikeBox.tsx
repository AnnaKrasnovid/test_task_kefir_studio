import { memo, useCallback, useState, useEffect } from 'react';

import { LikeBoxInt } from 'src/interfaces';

import './LikeBox.scss';

const LikeBox = memo(({ likes, callback = () => { }, type = 'like', id = 1 }: LikeBoxInt) => {
    const [isActiveLike, setIsActiveLike] = useState(false);

    const toggleLike = useCallback((id: number, isActive: boolean) => {
        setIsActiveLike(!isActiveLike)
        callback(id, isActive)

    }, [isActiveLike, callback])

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
})
export default LikeBox;