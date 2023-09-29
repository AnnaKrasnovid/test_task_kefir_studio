import LikeBox from '../LikeBox/LikeBox';

import './CommentsHeader.scss';

interface CommentsHeaderInt {
    likes?: number,
    comments?: number,
}

function CommentsHeader({ likes = 0, comments = 0 }: CommentsHeaderInt) {
    return (
        <div className="comments-header">
            <p className="comments-header__text">{comments} комментариев</p>
            <div className="comments-header__box">
                <div className="comments-header__wrapper">
                    <LikeBox type={'info'}/>
                </div>
            </div>
        </div>
    )
}

export default CommentsHeader;