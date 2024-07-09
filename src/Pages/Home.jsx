import React, { useEffect } from 'react'
import Landing from '../components/Landing'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'

const Home = () => {


  useEffect(()=>{
      window.scrollTo(0,0)
  },[])

  return (
 <>
<Landing/>
<SectionOne/>
<SectionTwo/>
   <SectionThree/>
 </>
  )
}

export default Home

