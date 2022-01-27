import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
import {MdExplore} from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <SidebarIcon icon={<FaFire size="28"/>} text={'Home'} />
      <Divider />
      <SidebarIcon icon={<BsPlus size="32"/>} text={'Add a Server'} />
      <SidebarIcon icon={<BsFillLightningFill/>} size="20" text={'Lighting'} />
      <SidebarIcon icon={<MdExplore size="26" />} text={'Explore Public Server'}/>
      <Divider />
      <SidebarIcon icon={<BsGearFill size="22"/>} text={'Settings'} />
    </div>
  );
};

const SidebarIcon = ({icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
)

const Divider = () => <hr className="sidebar-hr"/>

export default Sidebar;