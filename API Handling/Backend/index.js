import express from "express"


const app = express()
const port = process.env.PORT || 3000

const products = [
    {
        name: "table wooden",
        price: "20$",
        tag: "furniture"
    },
    {
        name: "table glass",
        price: "200$",
        tag: "furniture"
    },
    {
        name: "book",
        price: "2$",
        tag: "Stationary"
    },
    {
        name: "Hair Fryer",
        price: "25$",
        tag: "Acessories"
    },
    {
        name: "pencil",
        price: "2$",
        tag: "Stationary"
    },
]

app.get('/api/products', (req, res) => {

    if(req.query.search){
        const filteredProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filteredProducts)
        return
    }

    setTimeout(() => {
        res.send(products)
    }, 3000)
})

app.listen(port, () => {
    console.log("Listening to port", port);
    
})