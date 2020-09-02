import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { updateContact } from '../action'

function AddContact(props) {

    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [age, setAge] = useState("")
    const [photo, setPhoto] = useState("")
    const [id, setId] = useState(null)
    const history = useHistory()

    const { update, detail } = props

    useEffect(() => {
        if(detail && update){
            setFirst(detail.firstName)
            setLast(detail.lastName)
            setAge(detail.age)
            setPhoto(detail.photo)
            setId(detail.id)
        }
    }, [detail, update])

    const submitHandler = (e) => {
        e.preventDefault()

        let url = id ? `https://simple-contact-crud.herokuapp.com/contact/${id}` : `https://simple-contact-crud.herokuapp.com/contact`
        let method = id ? "PUT" : "POST"
        const data = JSON.stringify({
            firstName: first,
            lastName: last,
            age: age,
            photo: photo
        })

        const detail = {
            id: id,
            firstName: first,
            lastName: last,
            age: age,
            photo: photo
        }

        fetch(url, {
            method: method,
            body: data,
            headers:{'content-type': 'application/json'},
        }).then(async (res) => {
            await props.updateContact(detail)
            history.push('/detail')
        })
          .catch(err => console.error(err))
    }

    return (
        <form id="form__contact" className="flex-1" onSubmit={ submitHandler }>
            <h2 id="form__title">Add Contact</h2>
            <h3 id="form__subtitle">Personal Information</h3>
            <div className="form__group">
                <label>First Name</label>
                <input type="text" className="form__control" onChange={ (e) => setFirst(e.target.value) } value={ first } required />
            </div>
            <div className="form__group">
                <label>Last Name</label>
                <input type="text" className="form__control" onChange={ (e) => setLast(e.target.value) } value={ last } />
            </div>
            <div className="form__group">
                <label>Age</label>
                <input type="number" className="form__control" onChange={ (e) => setAge(e.target.value) } value={ age } required />
            </div>
            <h3 id="form__subtitle">Additional Information</h3>
            <div className="form__group">
                <label>Link Photo</label>
                <input type="text" className="form__control" onChange={ (e) => setPhoto(e.target.value) } value={ photo } />
            </div>

            <div className="form__group">
                <button className="button__form" id="save__form">Save</button>
                <button type="button" className="button__form" id="cancel__form">Cancel</button>
            </div>
        </form>
    )
}

const stateToProps = state => {
    return {
        detail: state.detailContact
    }
}

export default connect(stateToProps, { updateContact })(AddContact)
