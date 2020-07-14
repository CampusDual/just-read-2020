export interface ListResponse {
  code: number;
  message: string;
  data: [
    {
      list_id: number;
      list_name: string;
      list_description: string;
      list_create_date: Date;
    }
  ];
  sqlTypes: {
    list_id: number;
    list_name: number;
    list_description: number;
    list_create_date: number;
  };
}

export interface BooksListResponse {
  code: number;
  message: string;
  data: [
    {
      list_name: string;
      book_title: string;
      book_thumbnail: string;
      book_id: number;
      list_books_id: number;
    }
  ];
  sqlTypes: {
    list_name: number;
    book_title: number;
    book_thumbnail: number;
    book_id: number;
    list_books_id: number;
  };
}

export interface List {
  name: string;
  description: string;
  user: string;
  createDate: Date;
}

export interface ListBooks {
  list_id: number;
  book_id: number;
}
