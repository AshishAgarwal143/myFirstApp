export class Organisations{
    private key:String;
    private name:String;
    private nos: String;
    private type: String;
    private logo: String;
    private add: String;

    constructor(key:String,name:String,nos:String,type:String,logo:String,address:String){
        this.key=key;
        this.name=name;
        this.nos=nos;
        this.type=type;
        this.logo=logo;
        this.add=address;
    }
}