import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
      <button className="bg-white p-2 text-black rounded-lg px-4">Login with Google</button> 
      </div>
    </div>
  )
}