const path = require('path')
const express = require("express")
const app = express()

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/name', (req, res) => {
    res.send('Ryan Lester Bulot')
})

const PORT = 3000
app.listen(PORT, () =>  {
    console.log("Server is litening in port " + PORT)
})