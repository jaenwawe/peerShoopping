
import { useHistory } from 'react-router-dom'
import { useState} from 'react'

function Sale({setAvailable, available, currentUser, setProductArr, productArr,setIsLoggedIn }) {

  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  

  const history = useHistory()
  let user_id = currentUser.id

  const handleAddProduct = (event) => 
  {
      event.preventDefault()
      fetch('/sale', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id,
        category, 
        size, 
        price, 
        photo,
        available
       })
      })
        .then(res => {
          if (res.ok) {
          res.json().then(product => {
            setProductArr([product,...productArr])
              history.push("/")
          })
          } else {
            res.json().then(errors => {console.error(errors)})
            }
        })
      }
      setIsLoggedIn(true)  

  return (

    <form   onSubmit={handleAddProduct}>
      <div className="mb-3" >
    <label className="form-label" for="formBasicCategory">Category  &nbsp;  &nbsp;</label>
        <input 
        type="text"
        value={category} 
        onChange={(e) => setCategory(e.target.value)}   
        name = "category"
        placeholder="Category" 
        className="form-label"></input>
        </div>
      <br/>
      <br/>
      
      <label className="form-label" for="formBasicSize">Size  &nbsp;  &nbsp;</label>    
        <input 
        type="text"
        name = "size" 
        value={size}
        placeholder="Size"  
        onChange={(e) => setSize(e.target.value)} 
        className="form-label"></input>
      <br/>
      <br/>

      <label className="form-label"   for="formBasicPrice">Price &nbsp;  &nbsp;</label>
      <input 
        type="price"
        name = "price" 
        value={price}  
        placeholder="price" 
        onChange={(e) => setPrice(e.target.value)} 
        className="form-label"></input>
      <br/>
      <br/>
    
      <label className="form-label" for="formBasicPhoto">Photo &nbsp;  &nbsp;</label>
      <input className= {["mb-3", "form-label"]}
        type="photo"
        name = "photo"
        value={photo}  
        placeholder="Photo"  
        onChange={(e) => setPhoto(e.target.value)}></input>
      <br/>
      <br/>
    
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}


export default Sale;