export interface IPost {
    _id?: string,
    title?: string,
    permalink?: string,
    categoryId?: any
    imgPath?: string,
    excerpt?: string,
    content?: string,
    isFeatured?: boolean,
    views?: number,
    status?: string,
    createdAt?: Date,
    updatedAt?: Date
}