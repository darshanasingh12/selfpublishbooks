export class Users {
    public Id: number;
    public fname: string;
    public lname: string;
    public pwd:string;
    public email:string;
    
    constructor(Id:number,fname: string,lname:string,pwd:string,email:string) {
    this.Id = Id;
    this.fname = fname;
    this.lname = lname;
    this.pwd = pwd;
    this.email = email;
    }
    }