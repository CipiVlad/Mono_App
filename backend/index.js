<<<<<<< HEAD
console.log('hi')
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
>>>>>>> a81d97f24e09c4c977ff557f31ba0d573b5b11bf
