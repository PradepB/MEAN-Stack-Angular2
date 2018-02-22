const crypto=require("crypto").randomBytes(256).toString('hex')
module.exports={
    //uri:'mongodb://localhost:27017/meanstack-2',
   secret:crypto,
    db: 'meanstack-2'
}
