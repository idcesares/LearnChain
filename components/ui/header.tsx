import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/public/images/LearnChain_logo_ts.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="LearnChain">
              <Image  src={Logo} width={50} height={50} alt="Logo" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
