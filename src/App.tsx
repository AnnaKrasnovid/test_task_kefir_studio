import React, { useEffect, useState } from "react";
import Comment from "./components/Comment/Comment";
import CommentsHeader from "./components/CommentsHeader/CommentsHeader";

import getAuthorsRequest from "./api/authors/getAuthorsRequest";
import getCommentsRequest from "./api/comments/getCommentsRequest";

import "./App.css";

interface CommentInt {
    id: number,
    created: string,
    text: string,
    author: number,
    parent: number | null,
    likes: number,
}

interface AuthorInt {
    id: number,
    name: string,
    avatar: string,
}

function App() {
    const [authors, setAuthors] = useState<Array<AuthorInt>>([]);
    const [comments, setComments] = useState<Array<CommentInt>>([]);
    const [renderList, setRenderList] = useState<Array<any>>([]);

    async function getAuthors() {
        await getAuthorsRequest()
            .then(r => setAuthors(r))
            .catch(err => console.log(err))
    }

    async function getComments() {
        await getCommentsRequest(1)
            .then(r => setComments(r.data))
            .catch(err => {

                getCommentsRequest(1)
                    .then(r => setComments(r.data))
                    .catch(err => console.log(2222))
            })
    }

    function getAuthorsItem(item: any) {
        const author = authors.filter((i) => i.id === item.author);
        return author[0];
    }

    function getCommentList() {
        let array: Array<any> = [];

        comments.map((item) => {
            if (item.parent === null) {
                array.push({ ...item, comments: [] });
            }
        });

        comments.map((item) => {
            if (item.parent !== null) {
                array.map((i, index) => {
                    if (item.parent === i.id) {
                        array[index].comments.push(item);
                    }
                })
            }
        })
        setRenderList(array);
    }

    useEffect(() => {
        getComments();
        getAuthors();
    }, [])

    useEffect(() => {
        getCommentList();
    }, [authors, comments])
  
    return (
        <div className="app">
            <main className="main">
                <section className="container">
                    <CommentsHeader />
                    <ul className="comments-list">
                        {renderList.map((i) => (
                            <li key={i.id}>
                                <Comment authors={getAuthorsItem(i)} key={i.id} comment={i} />
                            </li>
                        ))}

                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
