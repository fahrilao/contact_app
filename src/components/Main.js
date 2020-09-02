import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { updateContact } from '../action'

function Main(props) {
    const history = useHistory()
    
    if (props.detail.firstName) {
        const Style = {
            backgroundImage: `url(${props.detail.photo})`
        }


        const deleteContact = () => {
            let id = props.detail.id
            let url = `https://simple-contact-crud.herokuapp.com/contact/${id}`

            console.log(url)

            fetch(url, {
                method: 'DELETE',
                headers:{'content-type': 'application/json'},
            }).then(async (res) => {
                await props.updateContact()
                history.push('/')
            })
                .catch(err => console.error(err))
        }

        return (
            <section id="main__section" className={`flex-1 ${props.bgName}`}>
                <div id="main__image" style={Style}></div>
                <p id="main__name">{`${props.detail.firstName} ${props.detail.lastName}`}</p>
                <p id="main__age">{props.detail.age} Years Old</p>
                <br />
                <div>
                    <Link className="button__style" id="button__update" to="/update">edit</Link>
                    <button href="#" onClick={ () => deleteContact() } className="button__style" id="button__delete" to="/update">delete</button>
                </div>
            </section>
        )
    } else {
        const Style = {
            backgroundImage: `url(https://3.bp.blogspot.com/-eTPEHqY36LU/WQGEliEWHvI/AAAAAAAABpw/qxI7VKUGHacXlSIixNM725UvZCHh0yizQCLcB/s1600/atomix_user31.png})`
        }

        return (
            <section id="main__section" className={`flex-1 ${props.bgName}`}>
                <div id="main__image" style={Style}></div>
                <p id="main__name">None Don</p>
                <p id="main__age">Noting ..</p>
            </section>
        )
    }
}

const stateToProps = state => {
    return {
        detail: state.detailContact
    }
}

export default connect(stateToProps, { updateContact })(Main)
