export interface IAdminTables{
    ishownMoviesTable: boolean,
    ishownCartoonsTable:boolean,
    ishownTvShowsTable: boolean,
    ishownUsersTable:boolean,
}

export const INITIAL_MOVIES_STATE = [{
    _id:"",
    title:"",
    overview:"",
    releaseDate: "",
    genre:"",
    language:"",
    director:"",
    quality:"",
    country:"",
    rating:0,
    thumbnail:"",
    videourl:"",
}];
export const INITIAL_MOVIE_STATE = {
    _id:"",
    title:"",
    overview:"",
    releaseDate: "",
    genre:"",
    language:"",
    director:"",
    quality:"",
    country:"",
    rating:0,
    thumbnail:"",
    videourl:"",
};

export const INITIAL_USERS_STATE = [{
    _id:"",
    firstname:"",
    lastname:"",
    email:"",
    role:"",
    isActive:"",
    imgUrl:""
}];
export const INITIAL_USEREDIT_STATE = {
    _id:"",
    firstname:"",
    lastname:"",
    email:"",
    role:"",
    isActive:""
};

export const INITIAL_TVSHOWS_STATE = [{
    _id:"",
    title:"",
    overview:"",
    releaseDate: "",
    genre:"",
    language:"",
    director:"",
    rating:0,
    country:"",
    thumbnail:"",
    
}];
export const INITIAL_TVSHOW_STATE = {
    _id:"",
    title:"",
    overview:"",
    releaseDate: "",
    genre:"",
    language:"",
    director:"",
    rating:0,
    country:"",
    thumbnail:"",
    
};
