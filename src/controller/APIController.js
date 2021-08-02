const express = require('express')
const api = (req,res)=>{
    res.json({
        API:'Node JS in Heroku',
        Autor:'Dev Anisio Aleixo',
        Date: '02/08/2021'
    })
}
module.exports = {
    api
}