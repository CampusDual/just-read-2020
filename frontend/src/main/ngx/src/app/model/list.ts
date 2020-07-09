export interface ListResponse {
    code: number,
    message: string,
    data: [
        {
            list_name: string,
            list_description: string,
            list_create_date: Date
        }
    ],
    sqlTypes: {
        list_name: number,
        list_description: number,
        list_create_date: number
    }
}