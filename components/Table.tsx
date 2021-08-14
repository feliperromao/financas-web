import { ReactNode } from "react"

type TableProps = {
  title?: string
  headers?: string[]
  children?: ReactNode
}

export default function Table(props: TableProps) {
  const title = props.title && (
    <tr className="bg-gray-200 uppercase">
      <td colSpan={props.headers?.length}>
        <h4 className="text-sm font-light tracking-wide text-gray-500 py-1 px-4">
        {props.title}
        </h4>
      </td>
    </tr>
  )

  const headers = props?.headers?.map(item => <th className="py-3 px-6 text-left">{item}</th>)


  return (
    <div className="bg-white shadow-md rounded">
      <table className="min-w-max w-full table-auto">
        
        <thead>
          {title}
          <tr className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal">
            {headers}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {props.children}
        </tbody>
      </table>
    </div>
  )
}