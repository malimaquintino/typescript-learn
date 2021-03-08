type VerifyUserFn = (user:User, sentValue:User) => boolean;
type User = {username:string, password:string}

const verifyUser: VerifyUserFn = (user, sentUser)=>{
    return (user.username === sentUser.username && user.password === sentUser.password)
}

// os objetos não precisam ser User, basta que satisfaça as restriçoes da função
const dbUser = {username:"teste", password:"123456"}
const sentUser = {username:"teste", password:"123456", access:[]}
const logerIn = verifyUser(dbUser, sentUser);
console.log(logerIn)
