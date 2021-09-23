import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {

    const contacts = useSelector(state => state)
    const dispatch = useDispatch();
    const deleteContact = (id) => {
        dispatch({type: "DELETE_CONTACT", payload: id})
        toast.success("Contact deleted successfully")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5 text-right">
                    <Link to="/add" className="btn btn-outline-dark ms-5">Add Contact</Link>
                </div>
                <div className="col-md-10 text-center mx-auto mt-5">
                    <h1>Contact App</h1>
                </div>
                <div className="text-center table-responsive">
                    <table className="table table-hover"></table>
                    <thead className="text-white bg-dark text-center">
                        <tr>
                            <th scope="col" className="p-3">#</th>
                            <th scope="col" className="w-25 p-3">Name</th>
                            <th scope="col" className="w-25 p-3">Email</th>
                            <th scope="col" className="w-25 p-3">Phone Number</th>
                            <th scope="col" className="w-25 p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((contact, id) => (
                                <tr key="id">
                                    <td>{id + 1}</td>
                                    <td className="w-25 p-3">{contact.name}</td>
                                    <td className="w-25 p-3">{contact.email}</td>
                                    <td className="w-25 p-3">{contact.number}</td>
                                    <td className="w-25 p-3">
                                        <Link to={'/edit/'.concat(contact.id)} className="btn btn-small btn-outline-primary">Edit</Link>
                                        <button type="button"className="btn btn-small btn-outline-danger ms-4" onClick={() => deleteContact(contact.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </div>
            </div>
        </div>
    )
}

export default Home
