import { ReactNode } from "react"
import Navigation from "./Navigation"

type MenuProps = {
  title: string
  children: ReactNode
}

export default function Menu(props: MenuProps) {
  return (
    <div className="flex">
      <div className="flex-12 p-1 min-h-screen">
        <Navigation />
      </div>
      <div className="flex-1 p-4 bg-gray-100 min-h-screen">
        <h1 className="text-indigo-800 text-3xl font-semibold mb-5">{props.title}</h1>
        {props.children}
      </div>
    </div>
  )
}