import React, {useState} from 'react'
import AddBountyForm from './AddBountyForm'

function Bounty(props) {
    const [editToggle, setEditToggle] = useState(false)

    const currentBounty = {
            firstName: props.firstName,
            lastName: props.lastName,
            living: props.living,
            bountyAmount: props.bountyAmount,
            type: props.type,
            _id: props._id
        }

    const [bounty, setBounty] = useState(currentBounty)

    function handleClick(e) {
        console.log(bounty)

        const newStatus = !bounty.living
        bounty.living = newStatus
        setBounty(bounty)
        props.changeStatus(bounty, bounty._id)
    }


    return (
        <div style={{color: props.living === true ? "green" : "firebrick", fontStyle: props.living === true ? "normal" : "italic"}} className="bounty">
            { !editToggle ?
                <>
                <h1>Name: {props.firstName} {props.lastName} </h1>
                <p>Price: ${props.bountyAmount} </p>
                <p>Status: {props.living ? "Alive" : "Terminated"} </p>
                <p>Type: {props.type} </p>
                <button className="bountyButton"
                    onClick={handleClick}>
                        Change Status
                </button>
                <button className="deleteButton"
                    onClick={() => props.deleteBounty(props._id)}>Delete Bounty</button>
                <button className="bountyButton"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit Bounty
                </button>
                </>
            :
                <>
                <AddBountyForm 
                    firstName={props.firstName}
                    lastName={props.lastName}
                    bountyAmount={props.bountyAmount}
                    type={props.type}
                    _id={props._id}
                    submit={props.editBounty}
                    fixToggle={() => setEditToggle(prevToggle => !prevToggle)}
                    buttonText="Submit"/>
                <button className="bountyButton"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                </button>
                </>
            }
        </div>        
    )
}

export default Bounty