const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    return res.send("hi!")
})

app.listen(port, () => {
    console.log(`Aplikasi berjalan pada port${port}`)
})