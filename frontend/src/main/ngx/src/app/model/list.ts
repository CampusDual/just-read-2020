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

export interface List {
  name: string;
  description: string;
  user: string;
  createDate: Date;
}
