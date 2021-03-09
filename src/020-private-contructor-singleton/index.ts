export class Database{
    private static database: Database;

    private constructor(
        private host:string,
        private username:string,
        private password:string
    ){}

    connect(){
        console.log("connecting...");
        console.log(`${this.username} connected on ${this.host}`);
    }

    static getDatabase(host:string, username:string, password:string){
        if (Database.database){
            return Database.database;
        }
        Database.database = new Database(host, username, password);
        return Database.database;
    }
}

const db1 = Database.getDatabase("127.0.0.0", "root", "123456");
db1.connect();
const db2 = Database.getDatabase("127.0.0.0", "root", "123456");
db2.connect();
console.log(db1 == db2);

