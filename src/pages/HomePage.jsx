import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import SliderHome from '../components/Sliders/SliderHome'


function HomePage() {
  return (
    <div className='container '>
    <SliderHome />
    <div className='col bg-secondary fs-4 mt-5 text-center p-4 rounded-pill' style={{lineHeight:'30px'}}>
    <p> 🤷‍♂️Los Mejores juegos?</p>
    <p>Disfruta recorriendo la extensa categoria de juegos que tenemos para ti.</p>
    <p>Gracias por visitarnos 😛</p>
    </div>
    <div className='col mt-5 p-1 text-center' style={{color:'rgb(104, 104, 104)', textDecoration:'underline'}}>
    <h4>Todos los productos</h4>
    </div>
    <ItemListContainer></ItemListContainer>
    </div>
  )
}

export default HomePage
