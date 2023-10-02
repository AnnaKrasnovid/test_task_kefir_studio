import { memo } from "react";

import Comment from "../Comment/Comment";

import { CommentInt, AuthorInt, CommentsListInt } from "src/interfaces";

import './CommentsList.scss';

 const CommentsList = memo(({ commentsList, authors, callback }: CommentsListInt) => {
        function getAuthorsItem(item: CommentInt): AuthorInt {
            const author = authors.filter((i) => i.id === item.author);
            return author[0];
        }

        function getRenderList(item: any) {
            if (item.comments.length === 0) {
                return;
            }
            else if (item.comments) {
                return (
                    <ul className="comments-list-item">
                        {item.comments.map((i: CommentInt) => (
                            <li key={item.id}>
                                <Comment author={getAuthorsItem(i)} key={i.id} comment={i} />
                                {getRenderList(i)}
                            </li>
                        ))}
                    </ul>
                )
            }
        }

        return (
            <ul className="comments-list">
                {commentsList.map((i) => (
                    <li key={i.id}>
                        <Comment author={getAuthorsItem(i)} key={i.id} comment={i} callback={callback} />
                        {getRenderList(i)}
                    </li>
                ))}
            </ul>
        )
    }
    )

export default CommentsList;