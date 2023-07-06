const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config({path: "backend/config/.env"})

app.listen(process.env.PORT , () => {
    try {
        console.log(`Server stated at port ${process.env.PORT}`);
    } catch (error) {
        console.log(err);
    }
})