export class GlobalConstants{
    public static genericError:string = "Something went wrong. Please try again later";
    public static unauthorize: string = "You are not authorized to access this page"
    public static error:string = "error"

    
    public static nameRegex: string = "[a-zA-Z0-9]*";
    public static emailRegix: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    public static passwordRegix: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$';
    
    
}