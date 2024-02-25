import { useCallback, useState } from 'react'
import GeneratePassword from './components/GeneratePassword'
import ConvertCurrency from './components/ConvertCurrency'

export default function App() {
  const [bgColor, setBgColor] = useState('bg-black')

  const changeColor = useCallback(
    (newColor) => {
      if (bgColor !== newColor) {
        console.log('Changing color to:', newColor)
        setBgColor(newColor)
      } else {
        console.log('Color is unchanged: ', bgColor)
        return
      }
    },
    [bgColor]
  )

  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-screen duration-200 ${bgColor} space-y-4`}>
      <ConvertCurrency />
      <GeneratePassword />
      <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2 space-x-4'>
        <button
          className='bg-red-500 text-white font-bold py-2 px-4 rounded'
          onClick={() => {
            changeColor('bg-red-600')
          }}>
          Red
        </button>
        <button
          className='bg-green-500 text-white font-bold py-2 px-4 rounded'
          onClick={() => {
            changeColor('bg-green-600')
          }}>
          Green
        </button>
        <button
          className='bg-blue-500 text-white font-bold py-2 px-4 rounded'
          onClick={() => {
            changeColor('bg-blue-600')
          }}>
          Blue
        </button>
      </div>
    </div>
  )
}
