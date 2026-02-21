import { useTranslations } from 'next-intl'
import React from 'react'

const ContactLeft = () => {
  const t = useTranslations('contact')
  return (
    <div className='flex flex-col gap-4 text-white'>
      <h2 className='md:text-6xl text-4xl'>{t('lefttitle')}</h2>
      <p>{t('leftdescription')}</p>
    </div>
  )
}

export default ContactLeft