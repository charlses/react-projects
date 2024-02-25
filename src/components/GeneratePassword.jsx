import { useState, useRef, useCallback, useEffect } from 'react'

const GeneratePassword = () => {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [allowedNumbers, setAllowedNumbers] = useState(false)
  const [allowedChars, setAllowedChars] = useState(false)

  const passwordRef = useRef(null)

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  const generatePassword = useCallback(() => {
    let numbers = '0123456789'
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let characters = chars

    if (allowedChars) characters += '!@#$%^&*()_+'
    if (allowedNumbers) characters += numbers

    let newPass = ''

    for (let i = 0; i < length; i++) {
      newPass += characters.charAt(
        Math.floor(Math.random() * characters.length)
      )
    }
    setPassword(newPass)
    console.log(password)
  }, [length, allowedChars, allowedNumbers])

  useEffect(() => {
    generatePassword()
  }, [length, allowedChars, allowedNumbers])

  return (
    <div className='flex items-center justify-center h-60 p-10 bg-gray-900 rounded-lg text-xs'>
      <div className='flex flex-col justify-center items-center space-y-4'>
        <label htmlFor='generated-password' className='text-white'>
          Generated Password
        </label>
        <div>
          <input
            type='text'
            id='generated-password'
            value={password}
            readOnly
            className='w-80 h-10 text-center rounded-l-md focus:bg-blue-900 focus:text-white focus:rounded-l-md border-none'
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className='bg-blue-900 rounded-r-md  h-10 w-20 text-white hover:bg-transparent border-2 border-blue-900'>
            Copy
          </button>
        </div>
        <div className='flex gap-10'>
          <div className='text-white flex items-center gap-2'>
            <label htmlFor='setLength'>Length: {length}</label>
            <input
              type='range'
              name='length'
              id='setLength'
              className='cursor-pointer'
              value={length}
              onChange={(e) => setLength(e.target.value)}
              max={20}
              min={8}
            />
          </div>
          <div className='text-white flex items-center gap-2'>
            <label htmlFor='numbers'>Numbers:</label>
            <input
              type='checkbox'
              name='numbersAllowed'
              id='numbers'
              defaultChecked={allowedNumbers}
              onChange={() => {
                setAllowedNumbers((prevNumberAllowed) => !prevNumberAllowed)
              }}
            />
          </div>
          <div className='text-white flex items-center gap-2'>
            <label htmlFor='numbers'>Chars: </label>
            <input
              type='checkbox'
              name='numbersAllowed'
              id='numbers'
              defaultChecked={allowedChars}
              onChange={() => {
                setAllowedChars((prevCharsAllowed) => !prevCharsAllowed)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneratePassword
