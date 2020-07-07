export class BookResponse {
  code: number;
  message: string;
  data: [
    {
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

export class BooksAuthorsResponse {
  code: number;
  message: string;
  data: [
    {
      author_first_name: string;
      author_last_name: string;
    }
  ];
  sqlTypes: {
    author_first_name: number;
    author_last_name: number;
  };
}

export class BookReviewsResponse {
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

export class BookGenresResponse {
  code: number;
  message: string;
  data: [
    {
      genre_name: string;
    }
  ];
  sqlTypes: {
    genre_name: number;
  };
}
