type Node = {
  level: string,
  name: string,
  children: Node[]
}

type NodeListProps = {
  nodes: Node[];
}

export const NodeList: React.FC<NodeListProps> = ({nodes}) => {
  if (!nodes.length) {
    return <p className="no-nodes">No nodes to display</p>
  }

  function renderFilteredNodes(nodes: Node[], isChildren = false) {
    return nodes.map((node) => {
      return (
        <span className={!isChildren ? 'node-list-item' : ''} key={node.name}>
          {node.level}
          {node.name}
          {node.children.length > 0 && ` => `}
          <br />
          {renderFilteredNodes(node.children, true)}
          {!isChildren && <br />}
        </span>
      )
    })
  }

  return <div className="node-list">{renderFilteredNodes(nodes)}</div>
}
