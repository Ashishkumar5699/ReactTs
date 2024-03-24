export interface ResponseResult<Type> {
    hasErrors: boolean
    isSystemError: boolean
    message: string
    data: Type
}