export interface IMovie{
    _id:string,
    title:string,
    overview:string,
    releaseDate:string,
    genre:string,
    language:string,
    director:string,
    quality:string,
    country:string,
    rating?:number,
    thumbnail?:string,
    videourl?:string,
   
}

export interface IManageuser{
    _id:string,
    firstname:string,
    lastname:string,
    email:string,
    role:string,
    imgUrl?:string,
    isActive:string
}

export interface ITvshows{
    _id:string,
    title:string,
    overview:string,
    releaseDate:string,
    genre:string,
    language:string,
    director:string,
    rating?:number,
    country:string,
    thumbnail?:string,
   
}

export interface Iepisode{
    _id:string,
    tvshow_Id:string,
    title:string,
    season:string,
    episode:string,
    thumbnail?:string,
   
}