const getData = () => dispatch => {
    // {
    //     "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
    //     "firstName": "Bilbo",
    //     "lastName": "Baggins",
    //     "age": 111,
    //     "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"
    // },
    // {
    //     "id": "93ad6070-c92b-11e8-b02f-cbfa15db428c",
    //     "firstName": "Jane",
    //     "lastName": "Doe",
    //     "age": 111,
    //     "photo": "https://3.bp.blogspot.com/-eTPEHqY36LU/WQGEliEWHvI/AAAAAAAABpw/qxI7VKUGHacXlSIixNM725UvZCHh0yizQCLcB/s1600/atomix_user31.png"
    // },
    // {
    //     "id": "93ad6070-c92b-11e8-b02f-cbfa15db428d",
    //     "firstName": "Afro",
    //     "lastName": "Doe",
    //     "age": 111,
    //     "photo": "https://microhealth.com/assets/images/illustrations/learn-what-works-@2x.png"
    // }

    fetch(`https://simple-contact-crud.herokuapp.com/contact`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'GET_DATA',
                datas: data.data
            })
        })
        .catch(err => console.error(err))
}

const getDetail = (contact = null) => {
    return {
        type: 'GET_DETAIL',
        data: contact
    }
}

const updateContact = (contact = null) => dispatch => {
    fetch(`https://simple-contact-crud.herokuapp.com/contact`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'GET_UPDATE_DETAIL',
                datas: data.data,
                data: contact
            })
        })
        .catch(err => console.error(err))
}

export { getData, getDetail, updateContact}