const express = require("express")
const app = express()

app.get('/name', (req, res) => {
    res.send('Ryan Lester Bulot')
})

const PORT = 3000
app.listen(PORT, () =>  {
    console.log("Server is litening in port " + PORT)
})