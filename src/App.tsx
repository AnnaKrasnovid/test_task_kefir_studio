import { useEffect, useState } from "react";

import SectionComments from "./components/SectionComments/SectionComments";

import getAuthorsRequest from "./api/authors/getAuthorsRequest";
import getCommentsRequest from "./api/comments/getCommentsRequest";

import { CommentBaseInt, CommentInt, AuthorInt } from "./interfaces";

import './App.css';

function App() {
    const [page, setPage] = useState<number>(1);
    const [authors, setAuthors] = useState<Array<AuthorInt>>([]);
    const [comments, setComments] = useState<Array<CommentBaseInt>>([]);
    const [renderList, setRenderList] = useState<Array<CommentInt>>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    function toggleLike(id: number, isActive: boolean) {
        const result = renderList.map((i) => {
            if (i.id === id) {
                return { ...i, likes: isActive ? (i.likes - 1) : (i.likes + 1) };
            } else {
                return i;
            }
        })
        setRenderList(result);
    }

    function getAuthors() {
        getAuthorsRequest()
            .then(r => setAuthors(r))
            .catch(err => console.error(err));
    }

    function getCommentsList() {
        setIsLoading(true);
        getCommentsRequest(page)
            .then(r => {
                const resultSort = r.data.sort((a: CommentBaseInt, b: CommentBaseInt) => Date.parse(b.created) - Date.parse(a.created));
                setComments([...comments, ...resultSort]);
                setTotalPages(r.pagination.total_pages);
            })
            .catch(err => {
                console.error(err);
                setIsError(true);

                setTimeout(() => {
                    setIsError(false);
                }, 3000);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    function getComments() {
        const commentsList: Array<CommentInt> = [];
        const renderList: Array<CommentInt> = [];

        comments.map((i: CommentBaseInt): void => {
            if (i.parent === null) {
                renderList.push({ ...i, comments: [] })
            } else {
                commentsList.push({ ...i, comments: [] })
            }
        });

        commentsList.sort((a: CommentInt, b: CommentInt) => a.id - b.id);

        commentsList.map((item: CommentInt) => {
            const sortComments = (renderList: Array<CommentInt>) => renderList.map((i: CommentInt, ind: number) => {
                if (item.parent === i.id) {
                    renderList[ind].comments.push(item)
                }
                sortComments(renderList[ind].comments)
            })
             sortComments(renderList)
        })
        setRenderList(renderList)
    }

    useEffect(() => {
        if (!isError) {
        getCommentsList();
        }
    }, [page]);

    useEffect(() => {
        getComments();
    }, [comments]);


    useEffect(() => {
        getAuthors();
    }, []);

    useEffect(() => {
        if (isError) {
            setPage(page - 1)
        }
    }, [isError]);

    return (
        <div className="app">
            <main className="main">
                <SectionComments
                    renderList={renderList}
                    authors={authors}
                    toggleLike={toggleLike}
                    isLoading={isLoading}
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                    isError={isError}
                />
            </main>
        </div>
    );
}

export default App;
