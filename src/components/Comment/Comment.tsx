import LikeBox from "../LikeBox/LikeBox";

import { CommentItemInt } from "src/interfaces";
import { getDateText } from "src/lib/text";

import './Comment.scss';

function Comment({ author, comment, callback }: CommentItemInt) {
    return (
        <div className="comment">
            <div className="comment__avatar">
                <img src={author?.avatar} alt="" />
            </div>
            <div className="comment__box">
                <div className="comment__wrapper">
                    <div className="comment__info">
                        <p className="comment__text">{author?.name} </p>
                        <p className="comment__text_type_light">{getDateText(comment.created)}</p>
                    </div>
                    <LikeBox likes={comment.likes} callback={callback} id={comment.id} />
                </div>
                <p className="comment__text">{comment.text}</p>
            </div>
        </div>
    )
}

export default Comment;