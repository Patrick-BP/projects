export interface Iuser {
    firstname:string,
    lastname:string,
    email:string,
    password:string

}

export interface Icredentials {
    email:string,
    password:string
}

export interface IchangePassword {
    oldPassword:string,
    newPassword:string
}

export const INITIAL_LOGIN_STATE = {
    islogedin: false
}
export interface Ilogin {
    islogedin: boolean
   
}

export const INITIAL_ADMIN_STATE = {
    isAdmin: false
}
export interface IAdmin {
    isAdmin: boolean
   
}
export const INITIAL_USER_STATE = {
    _id:"",
    firstname:"",
    lastname:"",
    email:"",
    role:"",
    imgUrl:"",
    token:""
}
export interface IUserLogedin {
    _id:string,
    firstname:string,
    lastname:string,
    email:string,
    role:string,
    imgUrl?:string,
    token:string
}

export interface IProfile {
    firstname:string,
    lastname:string,
    email:string,
    imgUrl?:string,
}