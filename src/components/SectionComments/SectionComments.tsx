import { useState, useEffect, useCallback } from "react";

import CommentsHeader from "../CommentsHeader/CommentsHeader";
import CommentsList from "../CommentsList/CommentsList";
import Loader from "src/UI/Loader/Loader";
import Button from "src/UI/Button/Button";
import Error from "src/UI/Error/Error";

import { commentsPage1, commentsPage2, commentsPage3 } from '../../data/comments';

import './SectionComments.scss';

function SectionComments({ renderList, authors, toggleLike, isLoading, page, setPage, totalPages, isError }: any) {
    const [totalLikes, setTotalLikes] = useState<number>(1);
    const [totalComments, setTotalComments] = useState<number>(1);

    const changePage = useCallback(() => {
        setPage(page + 1)
    }, [isError, page])

    useEffect(() => {
        const allComments = [...commentsPage1.data, ...commentsPage2.data, ...commentsPage3.data];
        setTotalLikes(allComments.reduce((sum, item) => sum + item.likes, 0));
        setTotalComments(allComments.length);
    }, []);

    return (
        <section className="container">
            <CommentsHeader likes={totalLikes} comments={totalComments} />
            <CommentsList commentsList={renderList} authors={authors} callback={toggleLike} />
            {isLoading ? (
                <Loader />
            ) : (
                page < totalPages && renderList.length > 0 && (
                    isError ? (
                        <Error text="Что-то пошло не так, попробуйте повторить еще раз" />
                    ) : (
                        <Button text="Загрузить еще" callback={changePage} />
                    )
                )
            )}
        </section>
    )
}

export default SectionComments;
