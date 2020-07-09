export interface Genres {
    code: number,
    message: string,
    data: [
        {
            genre_name: string,
            genre_id: number
        }
    ],
    sqlTypes: {
        genre_name: number,
        genre_id: number
    }
}

export interface GenreBooks {
    code: number,
    message: string,
    data: [
        {
            book_title: string,
            book_thumbnail: string,
            book_id: number,
        }
    ],
    sqlTypes: {
        book_id: number,
        book_thumbnail: number,
        book_title: number
    }
}