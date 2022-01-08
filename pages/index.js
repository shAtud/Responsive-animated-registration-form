import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-white h-[100vh] w-[100vw] flex justify-center items-center font-thin'>
      <div className='bg-gradient-to-r from-emerald-300 to-violet-200  rounded-lg shadow-xl shadow-emerald-400 h-[75vh] w-[80vw] animate-fade-left-right sm:h-[550px] sm:w-[600px] md:w-[700px] lg:w-[850px] flex flex-row items-center justify-center'>
        <div className='text-center animate-fade-in-down sm:basis-1/2 text-3xl hidden sm:flex px-12'>
        <div className=''>Login form</div>
        </div>
        <div className='basis-11/12'>
          <div className='sm:text-2xl text-center sm:font-thin font-semibold text-3xl sm:text-left pb-8'>Login</div>
          <table className='text-xl p-16'>
            <tr className=''>
              <td className='py-4 pr-8'>Full Name:</td>
              <td>
                <input className='bg-transparent' placeholder='Name...'></input>
              </td>
            </tr>
            <tr>
              <td className='py-4 pr-24'>Email:</td>
              <td>
                <input className='bg-transparent' placeholder='Email...' type='email'></input>
              </td>
            </tr>
            <tr>
              <td className='py-4'>Create Password:</td>
              <td>
                <input className='bg-transparent' placeholder='Password...' type='password'></input>
              </td>
            </tr>
            <tr className=''>
              <td className='py-4 pr-16 pb-12'>Confirm password:</td>
              <td>
                <input className='bg-transparent pr-16 pb-12' placeholder='Password...' type='password'></input>
              </td>
            </tr>
          </table>
          <div className='text-center sm:text-left'>
          <button className='m-auto bg-gradient-to-r from-emerald-400 to-violet-300 hover:from-emerald-500 hover:to-violet-400 shadow-violet-300 shadow-md rounded-full h-[35px] w-[120px] text-center text-xl font-thin'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
