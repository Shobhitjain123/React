import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  // const [products, error, loading] = customReactQuery('/api/products')

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try { 
        setError(false)
        setLoading(true)  
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal
        })
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
        setError(false)
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Request Cancelled', error);
        }
        setError(true)
      }
      
    })()

    return () => {
      controller.abort()
    }

  }, [search])

  // if(error){
  //   return <div>Something went wrong...</div>
  // }

  // if(loading){
  //   return <div>Loading...</div>
  // }

  return (
    <>
      <div>Hello</div>

      <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>

      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong...</div>}

      <h2>Number of Products are {products.length}</h2>
    </>
  )
}

export default App

// const customReactQuery = (urlPath) => {
  

//   return [products, error, loading]

// }
