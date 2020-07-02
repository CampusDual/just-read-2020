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
