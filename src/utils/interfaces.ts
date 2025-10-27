export interface ApiResponse<T> {
    data: T,
    status: number,
    statusText: string,
    headers: {},
    config: {},
    request?: any
}