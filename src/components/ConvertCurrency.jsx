import InputBox from './InputBox'
import { useState } from 'react'
const ConvertCurrency = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('gel')
  const [convertedAmount, setConvertedAmount] = useState(0)
  return (
    <div className='flex flex-col space-y-4 justify-center items-center bg-blue-300 p-10 rounded-md'>
      <h1 className=''>Convert currency</h1>
      <InputBox />
    </div>
  )
}

export default ConvertCurrency
