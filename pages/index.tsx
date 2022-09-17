import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import detectEthereumProvider from '@metamask/detect-provider'


const Home: NextPage = () => {
  const [currentAccount, setCurrentAccount] = useState("");


  const startApp = async (provider: any) => {
    if (provider !== window.ethereum) {
      console.error('Do you have multiple wallets installed?');
      return;
    } else {

      const accounts = await provider.request({ method: 'eth_accounts' });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log('Found an authorized account:', account);
        setCurrentAccount(account);
      } else {
        console.log('No authorized account found');
      }
    }
  }

  const checkIfWalletIsConnected = async () => {
    //const { ethereum } = window;
    const provider = await detectEthereumProvider();
    if (!provider) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", provider);
      startApp(provider);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const lottiePlayer = (src:string) => {
    return (
      <Player
          autoplay
          loop
          src={src}
          className='my-auto'
        ><Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />

        </Player>
    )
  }

  const renderConnectedContainer = () => {

    return (
      <div className='flex flex-col items-center justify-center py-2'>
       {lottiePlayer("https://assets10.lottiefiles.com/packages/lf20_cgbssox3.json")}
      </div>
    )
  }

  const renderNotConnectedContainer = () => {
    return (
      <div className='flex flex-col h-3/4 py-2 md:flex-row'>
        <div className='flex flex-col flex-1 justify-center mb-48 py-2 px-8 space-y-12'>
          <h1 className='text-3xl font-bold'>Metamask Wallet is Required to Drop Some Coins!</h1>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md my-2 text-xl ml-auto'>Connect Wallet</button>
        </div>
        <div className='flex-1 my-auto flex justify-end h-full items-end mt-auto'>
          <div className='w-4/5'>{lottiePlayer("https://assets9.lottiefiles.com/packages/lf20_xUyFWi.json")}</div>
        </div>
        
      </div>
    )
  }





  return (
    <div className='mx-auto h-screen relative max-w-6xl'>
      <Navbar />
      {currentAccount === "" ? renderNotConnectedContainer() : renderConnectedContainer()}
      <div className='absolute bottom-0 w-full left-0 flex items-center justify-center py-4'>Developed by github.com/AhmetSBulbul</div>
    </div>
  )
}

export default Home;
