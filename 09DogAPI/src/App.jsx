import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(()=>{
    axios
    .get('https://dog.ceo/api/breeds/image/random?_limit=1')
    .then(res=>{
      console.log(res)
      document.getElementById('res').innerHTML = 
      `<div class="card card-body mb-4">
        <h5>Status: ${res.status}</h5>
      </div>
    <div class="card mt-3">
        <div class="card-header">
          Dog Image
        </div>
        <div class="card-body">
          <img src=${res.data.message} className="Dog" alt="Dog image" />
        </div>
      </div>`
    })
    .catch(err=>console.error(err))
  },[])
  return (
    <>
      <div>
        <div id='res'></div>
      </div>
    </>
  )
}

export default App
