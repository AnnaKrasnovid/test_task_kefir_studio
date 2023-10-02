export interface CommentBaseInt {
    id: number,
    created: string,
    text: string,
    author: number,
    parent: number | null,
    likes: number,
    comments?: Array<CommentInt>
}

export interface CommentInt extends CommentBaseInt {
    comments: Array<CommentInt>
}

export interface AuthorInt {
    id: number,
    name: string,
    avatar: string,
}

export interface CommentItemInt {
    author?: AuthorInt,
    comment?: any,
    callback?: (id: number, isActive: boolean) => void
}

export interface CommentsHeaderInt {
    likes?: number,
    comments?: number,
}

export interface CommentsListInt {
    commentsList: Array<CommentInt>,
    authors: Array<AuthorInt>,
    callback?: (id: number, isActive: boolean) => void
}

export interface LikeBoxInt {
    likes: number,
    callback?: (id: number, isActive: boolean) => void,
    type?: 'like' | 'info',
    id?: number,
}

export interface ButtonInt {
    text: string, 
    callback: ()=> void,
    type?: 'button'| 'submit'
}