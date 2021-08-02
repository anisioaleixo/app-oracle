const express = require('express')
const api = (req,res)=>{
    res.json({
        API:'NODE teste',
        Autor:'Dev Anisio Aleixo'
    })
}
module.exports = {
    api
}