export interface AuthorBooks {
  code: number;
  message: string;
  data: [
    {
      book_id: number;
      book_title: string;
      book_thumbnail: string;
    }
  ];
  sqlTypes: {
    book_id: number;
    book_title: number;
    book_thumbnail: number;
  };
}

export interface Authors {
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
    book_id: number;
    author_first_name: number;
    author_last_name: number;
  };
}
