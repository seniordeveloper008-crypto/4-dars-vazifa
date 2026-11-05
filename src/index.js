import express from 'express'
import { config } from 'dotenv'
import { userss } from './routers/users.routers.js'
import { product } from './routers/product.routes.js'
import { categories } from './routers/categories.routes.js'
import { baskets } from './routers/baskets.routes.js'
import { newProduct } from './routers/newProducts.routes.js'
import { blocked } from './routers/blockedUser.routes.js'
import { Discount } from './routers/discount.routes.js'
import { trendProducts } from './routers/trendProducts.routes.js'
import { returnedProduct } from './routers/returnedProduct.routes.js'

config()
const port = process.env.PORT||3001
const app = express()
app.use(express.json())
app.use('/users',userss)
app.use('/product',product)
app.use('/categories',categories)
app.use('/baskets',baskets)
app.use('/blockedUser',blocked)
app.use('/newProduct',newProduct)
app.use('/diskount',Discount)
app.use('/trendProduct',trendProducts)
app.use('/returnedProduct',returnedProduct)


app.listen(port,()=>{
    console.log(`Server is running on ${port} port`);
})

