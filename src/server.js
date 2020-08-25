const { pageLanding } = require('./pages')

const express = require('express')
const app = express()

app
.use(express.static('public'))
.get('/', pageLanding )

.listen(5500, () => {
    console.log('app rodando em http://localhost:5500')
})