const express = require('express')
const app = express()
const port=4000

const products=[
  {
    id:1,
    name: "Vivo Y100 5G  ",
    price: 23999,
    poster: "https://m.media-amazon.com/images/I/61NuSnlMhFL._SL1200_.jpg",
    category: "electronics",
    rating: 4.0,
    description: "Triple 64MP+2MP+2MP Rear Camera ,16MP Selfie Camera  ",
    trailer: "https://www.youtube.com/watch?v=Yqc0fqcHgOY",
  },
  {
    id:2,
    name: "Apple 2023 MacBook Air ",
    price: 134225,
    poster:
      "https://m.media-amazon.com/images/I/81Fm0tRFdHL._AC_UY436_QL65_.jpg",
    category: "electronics",
    rating: 3.6,
    description:
      "IMPRESSIVELY BIG, IMPOSSIBLY THIN — The 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display. The durable 100% recycled ",
    trailer: "https://www.youtube.com/embed/hs1HoLs4SD0",
  },
  {
    id:3,
    name: "OnePlus Bullets Wireless Z2 ANC Bluetooth  ",
    price: 2299,
    poster: "https://m.media-amazon.com/images/I/51IUb5+KgSL._SL1500_.jpg",
    category: "electronics",
    rating: 4.2,
    description:
      "[ANC]: 45dB Hybrid Active Noise Cancellation combines both FeedForward and FeedBack microphones to maximize frequency range of noise that can be reduced, performing up to 45dB. ",
  },
  {
    id:4,
    name: "Spigen Ultra Hybrid Matte Back Cover Case for iPhone 13 ",
    price: "1,503",
    poster: "https://m.media-amazon.com/images/I/61-if4uC0pL._SL1500_.jpg",
    category: "mobile accessories",
    rating: 4.3,
    description: "Material:Polycarbonate, Thermoplastic Polyurethane",
  },
  {
    id:5,
    name: "NIBOSI Women Watches Analog Rose Gold Square Dial Women's Watch  ",
    price: "2,299",
    poster: "https://m.media-amazon.com/images/I/61xuL9-N-nL._UX679_.jpg",
    category: "watch",
    rating: 4.1,
    description:
      "Case size: 24mm; Strap size: 10mm; Quartz movement with three-hand analog display and date window; Hardened mineral crystal lens resists scratches; Imported",
  },
  {
    name: "The Purple Tree Handcrafted Women's Tote Bag ",
    price: "799",
    poster: "https://m.media-amazon.com/images/I/61ONNs+3T6L._UX679_.jpg",
    category: "bags,wallets",
    rating: 4.6,
    description:
      "QUALITY MATERIALS: Made from high-quality fabric and vegan leather, our bag is durable and stylish! ",
  },
]

app.get('/', (req, res)=> {
  res.send('Hello World ,hi everyone')
})

app.get('/products', (req, res)=> {
  const {category}=req.query
  console.log(req.query,category)
  const product=products.filter((pd)=>(pd.category==category))
  res.send(product)
})

app.get('/products/:id', (req, res)=> {
  const { id }=req.params
  console.log(req.params,id)
  const product=products.find((pd)=>pd.id==id)
  res.send(product)
})

app.listen(port,()=>(console.log("the server started on port 4000",port)))