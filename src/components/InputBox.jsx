const InputBox = ({
  label,
  amount,
  amountDisabled = false,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectedCurrency = 'usd',
  currencyOptionsDisabled = false,
  className = ''
}) => {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1-2'>
        <label htmlFor='currency' className='text-black/40 mb-2 inline-block'>
          {label}
        </label>
        <input
          type='number'
          name=''
          id=''
          className='outline-none w-full bg-transparent py-1.5'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <label className='text-black/40 mb-2 inline-block'>Currency Type</label>
        <select
          name='currency'
          id=''
          className='outline-none bg-transparent py-1.5'
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyOptionsDisabled}>
          {currencyOptions.map((option, index) => (
            <option key={index} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
