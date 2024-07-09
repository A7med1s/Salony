import imgOne from '../assets/secthree-1.webp'
import imgTwo from '../assets/secthree-2.jfif'

const SectionThree = () => {
  return (
<div className='section text-center pb-16 bg-black'>
        <p className='font-extrabold text-2xl text-fuchsia-300 pt-6'>Body Care</p>
        <div className='group mt-12'>
            <img className='img' src={imgOne} alt="" />
            <p className='img-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum consequuntur soluta quam, aspernatur tenetur eligendi quas sapiente? Blanditiis numquam ipsum magnam earum! Voluptatum esse explicabo dolorum, aut nesciunt quisquam dolore.</p>
        </div>
        <div className='group mt-12'>
            <img className='img' src={imgTwo} alt="" />
            <p className='img-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum consequuntur soluta quam, aspernatur tenetur eligendi quas sapiente? Blanditiis numquam ipsum magnam earum! Voluptatum esse explicabo dolorum, aut nesciunt quisquam dolore.</p>
        </div>

    </div>
  )
}

export default SectionThree
