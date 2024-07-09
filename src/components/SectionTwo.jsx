import imgOne from '../assets/sectwo-1.jfif'
import imgTwo from '../assets/sectwo-2.webp'
const SectionTwo = () => {
  return (
    <div className='section text-center bg-fuchsia-300 pb-12'>
        <p className='font-extrabold text-2xl text-slate-500 pt-6'>Hair Care</p>
        <div className='group mt-12'>
            <img className='img' src={imgOne} alt="" />
            <p className='img-desc text-zinc-600 font-semibold'>Your hair is your crowning glory and it is only fair that you treat it like a precious gem. From the best hair care products to regular salon visits, you try to do everything to keep your hair in great condition.</p>
        </div>
        <div className='group mt-12'>
            <img className='img' src={imgTwo} alt="" />
            <p className='img-desc text-zinc-600 font-semibold'>
Hair spa treatments are meant to give your hair a little bit of TLC (tender loving care) to make it go back to its healthy state. But if you depend on salons for your hair spa treatments, you might end up spending a lot of money on your hair treatments out of your monthly budget.</p>
        </div>

    </div>
  )
}

export default SectionTwo
