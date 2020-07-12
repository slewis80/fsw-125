import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Bounty from './Bounty';
import AddBountyForm from './AddBountyForm';

function App() {

  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get("/bounty")
    .then(res => setBounties(res.data))
    .catch(err => console.log(err.response.data.errMsg))
  }

  function addBounty(newBounty) {
    axios.post("/bounty", newBounty)
      .then(res => {
        setBounties(prevBounties => [res.data, ...prevBounties])
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function deleteBounty(bountyId) {
    axios.delete(`/bounty/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function editBounty(updates, bountyId) {
    axios.put(`/bounty/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function changeStatus(newBounty, bountyId) {
    console.log(newBounty)
    axios.put(`/bounty/${bountyId}`, newBounty)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err.response.data.errMsg))
      console.log(bounties)

  }


  useEffect(() => {
    getBounties()
  }, [])


  const bountiesList = bounties.map(bounty => 
    <Bounty {...bounty} 
      bounty={bounty}
      key={bounty._id}
      deleteBounty={deleteBounty}
      editBounty={editBounty}
      changeStatus={changeStatus} />)


  return (
    <div className="bountyContainer">
      <h1 id="pageName">Bounties...</h1>
      <img className="lightsaberImg" src="https://cdn.pixabay.com/photo/2018/04/15/18/18/star-wars-3322343_960_720.png" alt="blue lightsaber"/>
      <AddBountyForm 
        submit={addBounty}
        buttonText="Add Bounty" />
      {bountiesList}
      <img className="lightsaberImg" src="https://cdn.pixabay.com/photo/2014/03/25/16/35/lightsabers-297469_960_720.png" alt="lightsabers"/>
    </div>
  );
}

export default App;
