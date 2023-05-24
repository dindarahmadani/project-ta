import React from 'react'

function Hero() {
    return (

        <div className='grid grid-cols-2'>
            <img src='img/hero.jpg' alt='' className='h-250' />
            <div className='py-32'>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-warning">Get Started</button>
            </div>


        </div>

    )
}

export default Hero