const express = require('express')
const db = require('../db')
const utils = require('../utils')
const router = express()

router.use(express.json())
const connection = db.connect()

router.get('/',(request,response)=>{
    const statement = 'select * from product'
    connection.query(statement,(error,result)=>{
        response.send(utils.createResult(error,result));
    })
})
router.post('/',(request,response)=>{
    const {title,price} = request.body
    const statement = `insert into product(title,price) values ('${title}',${price})`
    connection.query(statement,(error,result)=>{
        response.send(utils.createResult(error,result));
    })
})
module.exports = router