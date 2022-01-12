import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {
  return(
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
      <Image src ='/2.jpg' layout='fill'/>
      <div className='bg-white/20 backdrop-blur-xl w-[75vw] h-[75vh] sm:w-[500px] sm:h-[550px] md:w-[650px] lg:w-[800px] rounded-xl font-mono font-thin'>
        <div className='text-4xl pt-8 pb-16 tracking-wider text-center'>Login Form</div>
        <div className='md:px-32 lg:px-48 px-8'>
        <table>
          <tr>
            <td className='text-2xl py-4'>User Name</td>
            <td><input className='text-2xl bg-transparent w-[130px] placeholder-black/50 text-black/75' placeholder='Name...'/></td>
          </tr>
          <tr>
            <td className='text-2xl py-4'>Email</td>
            <td><input className='text-2xl bg-transparent w-[130px] placeholder-black/50 text-black/75' placeholder='Email...'/></td>
          </tr>
          <tr>
            <td className='text-2xl py-4 pr-32'>Password</td>
            <td><input type='password' className='text-2xl bg-transparent w-[130px] placeholder-black/50 ' placeholder='Password...'/></td>
          </tr>
          <tr>
            <td className='text-2xl py-4 pb-16'>Confirm Password</td>
            <td><input type='password' className='text-2xl bg-transparent w-[130px] pb-12 placeholder-black/50 ' placeholder='Password...'/></td>
          </tr>
        </table>
        </div>
        <button className='text-2xl h-[40px] w-[130px] bg-white/10 rounded-full hover:bg-white/20 sm:mx-48 mx-32 md:mx-80'>Login</button>
      </div>
    </div>
  )
}