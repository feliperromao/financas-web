import Link from 'next/link'
import { ReactNode } from 'react'

type NavItemProps = {
  title: string
  link: string
  icon: ReactNode
}

function NavItem(props: NavItemProps) {
  return (
    <Link href={props.link}>
      <div className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
        <span className="inline-flex justify-center items-center ml-4">
          {props.icon}
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">{props.title}</span>
      </div>
    </Link>
  )
}

type NavSeparatorProps = {
  title: string
}

function NavSeparator(props: NavSeparatorProps) {
  return (
    <div className="flex flex-row items-center h-8">
      <div className="text-sm font-light tracking-wide text-gray-500">{props.title}</div>
    </div>
  )
}

export default function Navigation() {

  const iconDashboard = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
      </path>
    </svg>
  )

  const iconBills = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )

  const iconPayments = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  )

  const iconRevenue = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

  const iconProfile = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

  const iconCategory = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  )

  return (
    <ul className="flex flex-col py-4 space-y-1">
      <li className="px-5">
        <NavSeparator title="Menu" />
      </li>
      <li>
        <NavItem title="Dashboard" link="/" icon={iconDashboard} />
      </li>
      <li>
        <NavItem title="Contas" link="/bills" icon={iconBills} />
      </li>
      <li>
        <NavItem title="Pagamentos" link="/payments" icon={iconPayments} />
      </li>
      <li>
        <NavItem title="Receitas" link="/revenue" icon={iconRevenue} />
      </li>
      <li>
        <NavItem title="Categorias" link="/category" icon={iconCategory} />
      </li>

      <li className="px-5">
        <NavSeparator title="Configurar" />
      </li>
      <li>
        <NavItem title="Perfil" link="/profile" icon={iconProfile} />
      </li>
    </ul>
  )
}