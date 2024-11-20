const express = require('express')
const path = require('path')

const startServer = (options) => {
    const {port, public_path = 'public'} = options
    console.log(port)
    console.log(public_path)
}
module.exports = {
    startServer
}