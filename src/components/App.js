import React, { useState } from 'react';
import Main from './Main.js';
import { NodeList } from './NodeList';
import { Search } from './Search';
import { NODE_LIST } from '../constant/node-list.const';
import { withLevel, filterNode } from '../utils/filter-node';

export default function App() {
  const [query, setQuery] = useState('');

  const handleChangeQuery = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <Main>
      <Search autoFocus value={query} onChange={handleChangeQuery} />
      <NodeList
        nodes={withLevel(NODE_LIST).filter((node) => filterNode(node, query))}
        query={query}
      />
    </Main>
  );
}
