export interface BookResponse {
  code: number;
  message: string;
  data: [
    {
      book_id: number;
      book_isbn: string;
      book_description: string;
      book_thumbnail: string;
      book_title: string;
      book_launch_date: Date;
    }
  ];
  sqlTypes: {
    book_isbn: number;
    book_id: number;
    book_description: number;
    book_title: number;
    book_launch_date: number;
    book_thumbnail: number;
  };
}

export interface BooksAuthorsResponse {
  code: number;
  message: string;
  data: [
    {
      author_id: number;
      author_first_name: string;
      author_last_name: string;
    }
  ];
  sqlTypes: {
    author_id: number;
    author_first_name: number;
    author_last_name: number;
  };
}

export interface BookReviewsResponse {
  code: number;
  message: string;
  data: [
    {
      review_text: string;
      review_last_update: Date;
      is_spoiler: boolean;
      picture: string;
      review_create_date: Date;
      review_score: number;
      user_: string;
    }
  ];
  sqlTypes: {
    review_text: number;
    review_last_update: number;
    is_spoiler: number;
    picture: number;
    review_create_date: number;
    review_score: number;
    user_: number;
  };
}

export interface Review {
  review_text: string;
  review_last_update: Date;
  is_spoiler: boolean;
  picture: string;
  review_create_date: Date;
  review_score: number;
  user_: string;
}

export interface BookGenresResponse {
  code: number;
  message: string;
  data: [
    {
      genre_id: number;
      genre_name: string;
    }
  ];
  sqlTypes: {
    genre_id: number;
    genre_name: number;
  };
}
