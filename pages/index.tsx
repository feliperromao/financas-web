import { Button } from '../components/Button'
import Menu from '../components/layout/Menu'
import Table from '../components/Table'

export default function Dashboard() {

  const headers = [
    'Descrição',
    'Data pgto.',
    'Valor',
    'Ações'
  ]

  return (
    <Menu title="Dashboard">
      <div className="grid lg:grid-cols-2 lg:grid-cols-1 gap-4">
        <Table headers={headers} title="Contas pendentes">
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6">Conta de água</td>
            <td className="py-3 px-6">20/08/20201</td>
            <td className="py-3 px-6">R$ 122,95</td>
            <td className="py-3 px-6">
              <Button></Button>
              <Button />
            </td>
          </tr>

          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6">Conta de luz</td>
            <td className="py-3 px-6">15/08/20201</td>
            <td className="py-3 px-6">R$ 115,61</td>
            <td className="py-3 px-6">
            <Button></Button>
              <Button />
            </td>
          </tr>
        </Table>
      </div>
    </Menu>
  )
}