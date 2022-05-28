import React, {useState, useEffect} from "react";

function Form() {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        isMale: true
    })

    const handleChange = e => {
        const {name, type, checked, value} = e.target

        setState(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    // const handleChangeFirstName = event => {
    //   setFirstName(event.target.value)
    // }
    //
    // const handleChangeLastName = event => {
    //   setLastName(event.target.value)
    // }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('state -> ', state)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={state.firstName}
                    onChange={handleChange}
                />
            </label>

            <br/>

            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={state.lastName}
                    onChange={handleChange}
                />
            </label>

            <br/>

            <label>
                Is Male:
                <input
                    name="isMale"
                    type="checkbox"
                    checked={state.isMale}
                    onChange={handleChange}/>
            </label>

            <br/>

            <input type="submit" value="Submit"/>
        </form>
    );
}

export default Form