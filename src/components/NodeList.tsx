export const NodeList = function (props: any) {
  if (!props.nodes || !props.nodes.length) {
    return <p className="no-nodes">No nodes to display</p>
  }

  function renderFilteredNodes(nodes: any, isChildren = false) {
    return nodes.map((node: any) => {
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

  return <div className="node-list">{renderFilteredNodes(props.nodes)}</div>
}
