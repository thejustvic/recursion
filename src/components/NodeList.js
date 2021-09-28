import React from 'react'

export const NodeList = function (props) {
  if (!props.nodes || !props.nodes.length) {
    return <p className="no-nodes">No nodes to display</p>
  }

  function renderFilteredNodes(nodes, isChildren = false) {
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

  return <div className="node-list">{renderFilteredNodes(props.nodes)}</div>
}
