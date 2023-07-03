export interface IPost {
    title?: string,
    permalink?: string,
    categoryId?: string,
    imgPath?: string,
    excerpt?: string,
    content?: string,
    isFeatured?: boolean,
    views?: number,
    status?: string,
    createdAt?: Date
}