import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

const Edit = () => {
    const { id } = useParams();

    const contacts = useSelector(state => state);
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === number && number);
        
        if(!email || !name || !number) {
            toast.warning("Please fill all the fields")
        }
        if(checkEmail) {
            toast.error("Email exists already!")
        }
        
        if(checkNumber) {
            toast.error("Contact number exists already!")
        }

        const data = {
            id: parseInt(id),
            name,
            email,
            number
        }
        
        dispatch({type: "UPDATE_CONTACT", payload: data})
        toast.success("Contact updated successfully!")
        history.push("/");
    }

    return (
        <div className="container">
            {
                //If contact exists in contact app
                currentContact ? (
                    <>
                        <div className="row">
                            <div className="display-3 text-center mt-5">
                                Edit Contact
                            </div>
                            <div className="col-md-6 shadow mx-auto p-5 mt-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" placeholder="Name" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                                    </div>

                                    <div className="form-group">
                                        <input type="email" placeholder="Email" className="form-control mt-4" value={email} onChange={e => setEmail(e.target.value)}/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" placeholder="Phone Number" className="form-control mt-4" value={number} onChange={e => setNumber(e.target.value)}/>
                                    </div>

                                    <div className="form-group column gx-5">
                                        <input className="btn btn-outline-success mt-4 w-50 ms-5" type="submit" value="Update" />
                                        <Link className="btn btn-block btn-outline-danger mt-4 w-25 ms-5" to="/">Cancel<i class="bi bi-x"></i></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                )
                    //If contact doesn't exist in contact app
                    : (
                        <>
                            <div className="display-3 text-center mt-5">
                                Contact is not available !
                            </div>
                        </>
                    )
            }

        </div>
    )
}

export default Edit
