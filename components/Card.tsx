import { ReactNode } from "react"

type CardProps = {
  title: string
  children: ReactNode,
  actions?: ReactNode
}

export default function Card(props: CardProps) {
  return (
    <div className="max-w py-4 px-8 bg-white shadow-lg rounded-lg">
      <div>
        <h2 className="text-gray-800 text-2xl font-semibold">{props.title}</h2>
        <div className="mt-2">
          {props.children}
        </div>
      </div>
      <div className="flex justify-end mt-4">
        {props.actions}
      </div>
    </div>
  )
}