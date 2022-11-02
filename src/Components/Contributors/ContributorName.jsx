import React from 'react'
import DisplayContributors from './Contributors';
import Header from '../Navbar/Navbar';

const ContributorName = () => {
  return (
    <div>

        <Header/>

        <DisplayContributors name1={"Prasanth"} name2 ={"Sandy"} name3 ={"Sujitha"} name4={"Theeraj"} name5={"Sharmitha"} name6={"Naveen Kumar"}/>

    </div>
  )
}

export default ContributorName;