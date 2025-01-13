import Image from 'next/image'
import HeroPage from './components/HeroPage'

export default function Home({message}) {
  console.log(message)
  return (
    <>
      <HeroPage/>
    </>
  )
}
  
