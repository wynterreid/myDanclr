import React from 'react'
import CreationBar from './Creation/creationBar'
import Timeline from './timeline'
import DashNav from './dashNav'


const Dashboard = (props) => {
  return (
    <div className="dashboardPage">
    <DashNav/>
    <div className="CreateNPost">
    <CreationBar/>
    </div>
    <Timeline/>

    <button className="logOut" onClick={props.logoutUser} type="sumbit"> Dance Away . . </button>
    </div>
  )
}

export default Dashboard;
