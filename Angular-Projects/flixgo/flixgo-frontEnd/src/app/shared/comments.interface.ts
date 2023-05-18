export interface ImovieComment {
    _id?:string,
    userId:string,
    movieId:string,
    comment:string,
    likes?:number,
    dislikes?:number,
    isDeleted?:boolean,
    createdAt:string,
}

export interface IReply {
    
    userId:string,
    commentId:string,
    message:String,
   
}


