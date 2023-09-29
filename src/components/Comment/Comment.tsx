import LikeBox from "../LikeBox/LikeBox";

import IMG from '../../assets/avatars/luke.jpeg';

import './Comment.scss';

interface CommentInt {
    authors?: any,
    comment?: any
}

function Comment({authors,comment}: CommentInt) {
   
    //  console.log(authors.name)
    //  console.log(authors, authors.avatar)
    // function getImage(img:any) {
    //     const encodedData = btoa(img); 
    //     const decodedData = atob(encodedData);
    //     return decodedData
    // }
console.log(authors)
    return (
        <div className="comment">
            <div className="comment__avatar">
                <img src={authors.avatar} alt="" />
            </div>
            <div className="comment__box">
                <div className="comment__wrapper">
                    <div className="comment__info">
                        <p className="comment__text">{authors.name}</p>
                        <p className="comment__text_type_light">{comment.created}</p>
                    </div>
                    <LikeBox likes={comment.likes}/>
                </div>
                <p className="comment__text">{comment.text}</p>
            </div>
        </div>
    )
}

export default Comment;