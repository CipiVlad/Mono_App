<<<<<<< HEAD
console.log("hi, hi");
console.log("Hola12345");
=======
const cors = require('cors')
const express = require('express');
const app = express()
const PORT = process.env.PORT || 9000
const morgan = require('morgan')
const {transactionsRouter} = require('./src/routes/transactions-routes')

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use("/transactions", transactionsRouter)


// Routes
app.get('/', (req, res) => {
    res.send('Homepage')
});


app.listen(PORT, () => console.log(`Server Started at Port ${PORT}
=> http://localhost:${PORT}`))
>>>>>>> 661009d28cc9a11dc8a1ff61d49410b4f0afde19
