// components/TreeGridComponent.tsx
import React from 'react'

interface TreeGridComponentProps {
  uuid: string
}

const CommonTable: React.FC<TreeGridComponentProps> = ({ uuid }) => {
  return <div id={uuid}></div>
}

export default CommonTable
