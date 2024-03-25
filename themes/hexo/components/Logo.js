import { siteConfig } from '@/lib/config'
import Link from 'next/link'

const Logo = props => {
  return (
    <Link href='https://openai.xnewstar.com/' passHref legacyBehavior>
      <div className='flex flex-col justify-center items-center cursor-pointer space-y-3'>
        <div className='font-medium text-lg p-1.5 rounded dark:border-white dark:text-red-300 menu-link transform duration-200'> {siteConfig('TITLE') }</div>
      </div>
    </Link>
  )
}
export default Logo
