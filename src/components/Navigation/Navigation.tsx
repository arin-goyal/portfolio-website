import { useEffect, useState } from 'react'
import ModeToggle from '../ModeToggle/ModeToggle'
import './Navigation.css'

type NavItem = { label: string; href: string; target?: '_blank' }

const navLinks: NavItem[] = [
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Resume', href: '/Resume.pdf', target: '_blank' },
]

export default function Navigation() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    if (!mobileNavOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileNavOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileNavOpen])

  useEffect(() => {
    if (mobileNavOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [mobileNavOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const close = () => {
      if (mq.matches) setMobileNavOpen(false)
    }
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  return (
    <>
      <header
        className={`navbar-container${mobileNavOpen ? ' navbar-container--menu-open' : ''}`}
      >
        <nav className="navbar-inner">
          <div className="flex items-center gap-3 md:gap-4">
            <img
              src="/profile.png"
              alt="Profile"
              className="h-12 w-12 md:h-10 md:w-10 rounded-full object-cover"
            />
            <div className="flex flex-col items-start gap-0.5 md:gap-2">
              <p className="text-[14px] md:text-[22px] font-bold leading-none text-[#DBF0EA]">Arin.</p>
              <p className="text-[14px] md:text-[12px] font-regular leading-none text-[#DBF0EA] opacity-80">UI/UX Designer</p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="nav-link text-[18px] font-medium text-[#DBF0EA]"
                    {...(item.target ? { target: item.target, rel: 'noreferrer' as const } : {})}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ModeToggle />
            <button
              type="button"
              className={`hamburger ${mobileNavOpen ? 'hamburger--open' : ''}`}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileNavOpen((o) => !o)}
            >
              <span className="hamburger__bar" />
              <span className="hamburger__bar" />
              <span className="hamburger__bar" />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-nav-menu"
        className={`mobile-nav-overlay md:hidden ${mobileNavOpen ? 'mobile-nav-overlay--open' : ''}`}
        aria-hidden={!mobileNavOpen}
        onClick={() => setMobileNavOpen(false)}
      >
        <nav
          className="mobile-nav-menu"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              {...(item.target ? { target: item.target, rel: 'noreferrer' as const } : {})}
              onClick={() => setMobileNavOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
