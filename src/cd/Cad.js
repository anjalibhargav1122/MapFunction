import React from 'react'

const Cad = () => {
    const ca = [{
      img:'https://www.acouplecooks.com/wp-content/uploads/2021/08/Cafe-Au-Lait-001s.jpg',
      title:'Coffee',
price:'150/-'
    }, {
      
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQh3lMwRokNkZxtMgcLGromH9F8JtTT1wIln33XOSeAQ&s',
      title:'Ice Cream',
      price:'250/-'
    },{
      
      img:'https://handletheheat.com/wp-content/uploads/2021/02/chocolate-cupcakes-SQUARE.png',
      title:'Chocolate',
      price:'200/-'
    },
    {
      
      img:'https://static.toiimg.com/thumb/84786580.cms?imgsize=157368&width=800&height=800',
      title:'Kulfi',
      price:'100/-'
    }]
  return (
    <div>
        <div className='container mt-5'>
          <p className='text-center display-1 fw-bold mb-4'>Our Services</p>
            <div className='row'>
           {
            ca.map((i)=>{
              return(
                <div className='col-sm-12 col-md-3 col-lg-3'>
                <div class="card" >
  <img src={i.img} class="card-img-top" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title">{i.title}</h5>
    <p class="card-text">{i.price}</p>
    <a href="#" class="btn btn-success">Buy</a>
  </div>
</div>
                </div>
              )
            })
           }
            </div>
        </div>
    </div>
  )
}

export default Cad