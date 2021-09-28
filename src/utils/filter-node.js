export const copy = (o) => {
  return { ...o }
}

/*
 * Filters given node, such that result has only nodes and children
 * which meet one of the following requirements:
 *   1. node name property matches search query string case-insensitive
 *   2. one of the node's child nodes name property matches query case-insensitive
 * Limitations:
 *   1. node name is of arbitrary length
 *   2. parent node name is independent of it's child nodes' names
 * @example
 * // returns A => A1 => A1.1
 * NODE_LIST.filter((node) => filterNode(node, 'a1.1'));
 * @example
 * // returns A => A1 => [A1.1, A1.2, A1.3]
 * NODE_LIST.filter((node) => filterNode(node, 'a1'));
 * @example
 * // returns entire NODE_LIST
 * NODE_LIST.filter((node) => filterNode(node, '1'));
 * @param {Object} node - a node object with child nodes if any
 * @param {string} node.name - individual node's name
 * @param {Object[]} node.children - array of child nodes if any.
 * @param {string} query - a string to match node name against case-insensitively
 * @returns {(Object|null)} - node & it's children matching query or null
 */

export const filterNode = (node, query) => {
  if (node.name.toLowerCase().includes(query.toLowerCase())) return true

  if (node.children) {
    node.children = node.children.map(copy).filter((n) => filterNode(n, query))
    return node.children.length
  }
}

/* without 'withLevel' func you need to use 'copy' func to not mutate the original. 
  Create a map function that copies an object and use that before the filter. 
  e.g.: NODE_LIST.map(copy).filter((node) => filterNode(node, query)) */

export const withLevel = (nodeList, level = 0) => {
  const listWithLevel = []
  if (!Array.isArray(nodeList)) return listWithLevel

  nodeList.forEach((node) => {
    const childrenNodes = withLevel(node.children, level + 1)
    listWithLevel.push({
      ...node,
      children: childrenNodes,
      level: new Array(level).fill('. '),
    })
  })
  return listWithLevel
}

export const filterNodeList = (nodeList, query, level = 0) => {
  const filteredList = []
  if (!Array.isArray(nodeList)) return filteredList

  nodeList.forEach((node) => {
    const nameMatches = node.name.toLowerCase().includes(query.toLowerCase())
    const childrenNodesMatches = filterNodeList(node.children, query, level + 1)
    if (nameMatches || childrenNodesMatches.length > 0) {
      filteredList.push({
        ...node,
        children: childrenNodesMatches,
        level: new Array(level).fill('. '),
      })
    }
  })
  return filteredList
}
