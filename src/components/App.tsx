import { useState } from 'react'
import { NodeList } from './NodeList'
import { Search } from './Search'
import { NODE_LIST } from '../constant/node-list.const'
import { withLevel, filterNode } from '../utils/filter-node'
import Main from './Main'

const App: React.FC = () => {
  const [query, setQuery] = useState('')

  const handleChangeQuery = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(value)
  }

  return (
    <Main>
      <Search autoFocus value={query} onChange={handleChangeQuery} />
      <NodeList nodes={withLevel(NODE_LIST).filter((node) => filterNode(node, query))} />
    </Main>
  )
}

export default App
