import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import { Player, Controls } from '@lottiefiles/react-lottie-player'


const Home: NextPage = () => {
  return (
    <div className='container mx-auto h-screen relative'>
      <Navbar />
      <div className='flex flex-col items-center justify-center py-2'>
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_7psw7qge.json"
          className='my-auto'
        ><Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </div>
      <div className='absolute bottom-0 w-full left-0 flex items-center justify-center py-4'>Developed by github.com/AhmetSBulbul</div>
    </div>
  )
}

export default Home;
