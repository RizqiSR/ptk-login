import { Button } from "flowbite-react"
import { Children } from "react"
import { useState } from "react"
import { MdBarChart, MdCalendarMonth, MdCreate, MdDashboard, MdExpandLess, MdExpandMore, MdFolder, MdFolderShared, MdHome, MdMail } from "react-icons/md"
import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="p-1">
      <LargeSidebarSection visibleItemCount={4}>
        <LargeSidebarItem isActive Icon={MdHome} title="Home" url="/"/>
        <LargeSidebarItem Icon={MdDashboard} title="Dashboard" url="/dashboard"/>
        <LargeSidebarItem Icon={MdCalendarMonth} title="Schedule" url="#"/>
        <LargeSidebarItem Icon={MdFolder} title="Projects" url="/"/>
        <LargeSidebarItem Icon={MdBarChart} title="Statistics" url="/"/>
        <LargeSidebarItem Icon={MdMail} title="Mailbox" url="/"/>
      </LargeSidebarSection>

      <LargeSidebarSection title="Inventory">
        <LargeSidebarItem Icon={MdCreate} title="Create Project" />
        <LargeSidebarItem Icon={MdFolderShared} title="Shared Projects" />
      </LargeSidebarSection>
    </aside>
  )
}

function LargeSidebarSection({children, title, visibleItemCount = Number.POSITIVE_INFINITY}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArr = Children.toArray(children).flat()
  const showExpandButton = childrenArr.length > visibleItemCount
  const visibleChildren = isExpanded ? childrenArr : childrenArr.slice(0, visibleItemCount)
  const ButtonIcon = isExpanded ? MdExpandLess : MdExpandMore
  
  return (
    <div>
      {title && <div className="mx-3 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button 
          onClick={() => setIsExpanded(e => !e)}
          className="w-full flex items-center rounded-lg p-3"
        >
          <ButtonIcon />
        </Button>
      )}
    </div>
  )
}


function LargeSidebarItem({title, isActive = false, Icon, url}) {
  return (
    <Link to={url} className={`w-full flex items-center rounded-lg gap-4 me-2 p-3 mb-1 ${isActive ? "font-bold" : undefined}`}>
      <Icon className="w-6 h-6" />
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </Link>
  )
}