import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useTelegram } from '../hooks/useTelegram.ts'
import { useEffect, useState, TouchEvent } from 'react'
import axios from 'axios'
import { ISign } from '../types/signs.types.ts'
import Loader from './Loader.tsx'
import { signs } from '../data/sings.tsx'
import { useLanguage } from './LanguageContext.tsx'

const Sign = () => {
  const { sign } = useParams()
  const signItem = signs.find(s => s.sign === sign)

  const navigate = useNavigate()

  const period = useSearchParams()[0].get('period') ?? 'today'

  const [isLoading, setLoading] = useState(false)
  const [description, setDescription] = useState<string>('')
  const { backButton } = useTelegram()
  const { language } = useLanguage()

  backButton.onClick(() => {
    backButton.hide()
    navigate('/')
  })

  useEffect(() => {
    backButton.show()
  })
  const handleSwipe = (e: TouchEvent<HTMLDivElement>) => {
    if (e.type === 'touchend' && e.changedTouches[0].clientX > 100) {
      backButton.hide()
      navigate('/')
    }
  }

  useEffect(() => {
    setLoading(true)
    axios.post<ISign>('https://poker247tech.ru/get_horoscope/', {
      sign,
      language,
      period
    })
      .then(data => {
        setDescription(data.data.horoscope)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching horoscope:', error)
        setLoading(false)
      })
  }, [sign, period, language])
  return (
    <div onTouchEnd={handleSwipe} className={'p-3 flex flex-col items-center gap-y-2 icon'}>
      <h1>{language === 'original' ? signItem?.ru : sign}</h1>
      {isLoading ? <Loader /> : description}
    </div>
  )
}

export default Sign