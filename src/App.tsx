import { signs } from './data/sings.tsx'
import { Link } from 'react-router-dom'
import { useLanguage } from './components/LanguageContext.tsx'


function App() {
  const { language } = useLanguage()

  return (
    <div className={'mt-2'}>
      <ul className={'grid grid-cols-2 w-full'}>{signs.map((item) => (
        <li key={item.sign}
            className={'bg-gray-300 border shadow-lg shadow-gray-400 border-gray-500 flex text-black flex-col items-center m-4 rounded-2xl p-3'}>
          <img width={30} height={30} src={item.icon} alt="icon" />
          <p className={'font-medium'}>{language === 'original' ? item.ru : item.sign}</p>
          <div className={'flex text-xxs justify-between w-full mt-2'}>
            <Link className={'bg-gray-400 border w-48p text-center border-black p-1 rounded-lg'}
                  to={`/${item.sign}?period=today`}>{language === 'original' ? 'Сегодня' : 'Today'}</Link>
            <Link className={'bg-gray-400 border w-48p text-center border-black p-1 rounded-lg'}
                  to={`/${item.sign}?period=tomorrow`}>{language === 'original' ? 'Завтра' : 'Tomorrow'}</Link>
          </div>
        </li>
      ))}</ul>
    </div>
  )
}

export default App
