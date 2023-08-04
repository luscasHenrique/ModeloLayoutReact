

import SidebarMenu from '../../Components/NovoSideBar';
import UserCard from '../../Components/UserCard';
import CardInfo from '../../Components/CardInfo';

function Dashboard() {
  return (
    <div className="container-layout">

        <div className="container-left">
            <SidebarMenu/>
        </div>

        <div className="container-right ">
            <div className="header">
            <UserCard/>
            </div>







        </div>   



        <div className="footer">
        </div>
    </div>
  )
}

export default Dashboard;