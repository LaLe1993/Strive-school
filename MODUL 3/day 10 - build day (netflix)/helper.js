const url='http://localhost:3001/media'

const movieCategories = async()=>{

  let movieResponse = await fetch(url ,{
      method:"GET",
      
      headers: new Headers({
          'Content-Type':'application/json'
      }),

  })//this is getting response from api fetching 
  console.log("media:", movieResponse)
  return await movieResponse.json()//this is returning the result of thr promise in a usable format
}

const getProducts=async()=>{  
    let response = await fetch(url,{
        method:"GET",
        
        headers: new Headers({
            'Content-Type':'application/json'
        }),

    })//this is getting response from api fetching 
    return await response.json()//this is returning the result of thr promise in a usable format
}


handleSubmit=()=>{
    event.preventDefault()
         submitProduct()
}

submitProduct=async ()=>{
    let myProduct={
        name:document.querySelector('#name').value,
        description:document.querySelector('#description').value,
        category:document.querySelector('#category').value,
        imageUrl:document.querySelector('#imageUrl').value,
    }
    console.log('myprod',myProduct)
    let response=await saveProduct(myProduct)
         console.log('repsonse from the save event' , response)
         if(response.ok){
             alert('Movie added successfully')
             //location.href='index.html'
         }
         else{
             alert('Error')
         }
   
}

const saveProduct= async (productObj)=>{
    let response= await fetch(url,{
        method:"POST",
        body:JSON.stringify(productObj),
        headers: new Headers({
            'Content-Type':'application/json'
        }),
    })
    return response
}

