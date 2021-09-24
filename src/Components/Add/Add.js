import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import { toast } from 'react-toastify'

const Add = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(state => state)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(contact => contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.number === number && number);
        
        if(!email || !name || !number) {
            return toast.warning("Please fill all the fields")
        }
        if(checkEmail) {
            return toast.error("Email exists already!")
        }
        
        if(checkNumber) {
            return toast.error("Contact number exists already!")
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }
        console.log(data)

        dispatch({type: "ADD_CONTACT", payload: data})
        toast.success("Contact added successfully!")
        history.push("/");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="display-3 text-center mt-5">
                    Add Contact
                </div>
                <div className="col-md-6 shadow mx-auto p-5 mt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <input type="email" placeholder="Email" className="form-control mt-4"  value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="Phone Number" className="form-control mt-4"  value={number} onChange={e => setNumber(e.target.value)}/>
                        </div>

                        <div className="form-group column gx-5">
                            <input className="btn btn-block btn-outline-success mt-4 w-50 ms-5" type="submit" value="Add"/>
                            <Link className="btn btn-block btn-outline-danger mt-4 w-25 ms-5" to="/">Cancel<i class="bi bi-x"></i></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add
