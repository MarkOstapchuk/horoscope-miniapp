import { ChangeEvent } from 'react'
import { useLanguage } from './LanguageContext.tsx'

const Header = () => {
  const { language, setLanguage } = useLanguage()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    if (value === 'original' || value === 'translated') {
      setLanguage(value)
    }
  }

  return (
    <div className={'flex justify-center'}>
      <div className="relative inline-block">
        <select onChange={handleChange} value={language}
                className="block w-full py-2 px-3 pr-8 rounded"
        >
          <option value="original">Русский</option>
          <option value="translated">English</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-5 w-5 svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5 8l5 5 5-5H5z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Header