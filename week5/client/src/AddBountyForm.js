import React, {useState} from 'react'

function AddBountyForm(props) {
    const initialInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        living: true,
        bountyAmount: props.bountyAmount || "",
        type: props.type || ""
    }
    const [inputs, setInputs] = useState(initialInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        // e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initialInputs)
    }

    return(
        <form name="addBountyForm" id="addBountyForm" onSubmit={handleSubmit} autoComplete="off">
            <input type="text" 
                name="firstName" 
                value={inputs.firstName} 
                onChange={handleChange} 
                placeholder="First Name" />
            <input type="text" 
                name="lastName" 
                value={inputs.lastName} 
                onChange={handleChange} 
                placeholder="Last Name" />
            <input type="number" 
                name="bountyAmount" 
                value={inputs.bountyAmount} 
                onChange={handleChange} 
                placeholder="Price" />
            <select name="type" onChange={handleChange}>
                <option>
                </option>
                <option name="type" 
                    value="Jedi">
                        Jedi
                </option>
                <option name="type" 
                    value="Sith">
                        Sith
                </option>
            </select>
            <button>{props.buttonText}</button>
        </form>
    )
}

export default AddBountyForm