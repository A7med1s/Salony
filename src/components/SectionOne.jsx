import React from 'react'
import imgOne from '../assets/secone-1.jfif'
import imgTwo from '../assets/secone-2.jfif'
const SectionOne = () => {
  return (
    <>
    <div className='section text-center pb-16 bg-slate-500'>
        <p className='font-extrabold text-2xl text-fuchsia-300 pt-6'>Skin Care</p>
        <div className='group mt-12'>
            <img className='img' src={imgOne} alt="" />
            <p className='img-desc'>The skin's clarity of acne, wrinkles, and sunburns is merely an assistance to their stature of confidence. Having healthy skin is a step to confidence. Becoming worry-free of appearances is Practicing good sleeping, eating, and drinking habits lead to the success of a healthy looking person. Adolescents need.</p>
        </div>
        <div className='group mt-12'>
            <img className='img' src={imgTwo} alt="" />
            <p className='img-desc'>When a girl wants to step out for a night of the town, the pimples and blemishes on her face will be the last thing that she will be conscious of. Little things can be erupted from something so miniscule. </p>
        </div>

    </div>
    </>
  )
}

export default SectionOne
