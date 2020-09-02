import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'

import { getData, getDetail } from '../action'
import { connect } from 'react-redux'

function Side(props) {
    const [keyword, setKeyword] = useState()
    const { getData } = props
    
    const regex = new RegExp(keyword, 'g');

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <div id="side__section">
            <h1 className="name__app">Contact App</h1>
            <Link id="add__contact" to="/add">Add Contact</Link>
            <form id="form__search">
                <div className="search__group">
                    <input id="search__contact" type="text" onChange={ (e) => setKeyword(e.target.value) } placeholder="Type for search" />
                    <span className="icon__input fa fa-search"></span>
                </div>
            </form>

            <div id="list__contact">
                {
                    props.contacts.filter(({firstName}) => firstName.match(regex)).sort((a, b) => ((`${a.firstName} ${a.lastName}`) > (`${b.firstName} ${b.lastName}`)) ? 1 : -1).map((contact, index) => (
                        <Link id={ `get__detail-contact-${index}` } onClick={ () => props.getDetail(contact) } key={ contact.id } to={ `/detail` }>
                            <Contact src={ contact.photo } name={ `${contact.firstName} ${contact.lastName} `} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )

}

const stateToProps = state => {
    return { contacts: state.listContact }
}

export default connect(stateToProps, { getData, getDetail })(Side)
