import React, { useState } from 'react'
import { getTechIcon } from '../../utils/techIcons'

const TechBadge = ({ name }) => {
  const [failed, setFailed] = useState(false)
  const icon = getTechIcon(name)

  return (
    <span className="inline-flex items-center gap-2">
      {icon && !failed && (
        <img
          src={icon}
          alt=""
          className="size-4 object-contain"
          onError={() => setFailed(true)}
        />
      )}
      {name}
    </span>
  )
}

export default TechBadge