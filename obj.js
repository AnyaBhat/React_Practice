const student = {
    name:"Ananya",
    address:{
      pincode:12345,
      city:'Mangalore',
      landmark:{
        state:"Karnataka",
        country:"India"
      }
    }, 
    
  }
  
  const {address:{landmark:{state}}} = student
  
  delete student.address.landmark.state;
  console.log(student)