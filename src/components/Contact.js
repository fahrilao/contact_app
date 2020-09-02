import React from 'react'

function Contact(props) {
    const Style = {
        backgroundImage: `url(${props.src})`
    }

    const handleClick = () => {
        props.handleClick()
    }

    return (
        <div className="contact" onClick={ handleClick }>
            <div className="contact__image" style={Style}></div>
            <p className="contact__name">{ props.name }</p>
            <span className="contact__icon fa fa-angle-right"></span>
        </div>
    )
}

export default Contact
