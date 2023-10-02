import { memo } from 'react';

import LikeBox from '../LikeBox/LikeBox';

import { CommentsHeaderInt } from 'src/interfaces';
import { getTextComments } from 'src/lib/text';

import './CommentsHeader.scss';

const CommentsHeader = memo(({ likes = 0, comments = 0 }: CommentsHeaderInt) => {    
    return (
        <div className="comments-header">
            <p className="comments-header__text">{comments} {getTextComments(comments)}</p>
            <div className="comments-header__box">
                <div className="comments-header__wrapper">
                    <LikeBox type={'info'} likes={likes} />
                </div>
            </div>
        </div>
    )
})

export default CommentsHeader;