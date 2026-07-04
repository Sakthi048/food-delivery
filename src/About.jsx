import React from 'react'
import Banner from './Banner'
import Shopnow from './Shopnow'

export default function About() {
  return (
    <>
    <Banner title="About"></Banner>
    <div className='container mt-100'>
      <div className='row justify-content-around rowgap'>
        <div className='col-lg-5'>
          <h1 className='h11'>Our Story</h1>
          <p className='justify mb-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat doloribus sapiente repellendus totam autem dicta sequi, voluptatum neque tenetur excepturi explicabo aliquid quibusdam vel tempora a dolor molestiae natus, rem soluta exercitationem reprehenderit illum corporis officia? Eum veniam libero quo quae voluptas deleniti voluptatem quidem dolor. Inventore qui quas eos quisquam, consequatur ipsum illo hic animi corrupti asperiores molestias consectetur harum ducimus quibusdam exercitationem assumenda earum delectus similique, recusandae voluptas dolores dolorem maiores. Temporibus, accusantium quidem vitae molestias, iure libero beatae rem quia qui, et nam ipsam fugit nobis? Nemo pariatur porro sint aperiam alias? Officiis voluptatem qui illo.</p>
          
        <Shopnow></Shopnow>
        </div>
        <div className='col-lg-5'>
          <img src="/images/about.jpg" className='imgabout'></img>
        </div>
      </div>
    </div>
    </>
  )
}
