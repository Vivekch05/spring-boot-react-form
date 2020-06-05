import React, { Component } from 'react'

export default class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            email: "",
            message: "",
            errors: {
                id: '',
                name: '',
                email: '',
                message: '',
            }
        }
    }
    // handleChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value })
    //     console.log(this.state)
    // }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'id':
                errors.id =
                    value.length < 1 ? 'Id length must be 1 or more than one!' : '';
                break;
            case 'name':
                errors.name =
                    value.length < 3 ? 'Name must be at least 3 character' : '';
                break;
            case 'email':
                errors.email =
                    value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'message':
                errors.message =
                    value.length < 10
                        ? 'Message must be at least 10 characters long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }
// handleSubmit=(e)=>{
//     e.preventDefault();
//     if(validateForm(this.state.errors)) {
//       console.info('Valid Form');
//     }else{
//       console.error('Invalid Form');
//     }
// }


    render() {
        let errors = this.state.errors;
        return (
            <div>
                <form action="addData" className="form-header">
                    <h1>User <span style={{color:"red"}}>Contact</span> Form</h1><hr />
                    <div>
                        <label>ID:</label>
                        <input type="text" name="id" onChange={this.handleChange} value={this.state.id} />
                        {errors.id.length > 0 && <span className="error-text">{errors.id}</span>}
                    </div>
                    <div>
                        <label>Name:<span style={{color:"red"}}>*</span></label>
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                        {errors.name.length > 0 && <span className="error-text">{errors.name}</span>}
                    </div>
                    <div>
                        <label>Email:<span style={{color:"red"}}>*</span></label>
                        <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                        {errors.email.length > 0 && <span className="error-text">{errors.email}</span>}
                    </div>
                    <div>
                        <label>Message:<span style={{color:"red"}}>*</span></label>
                        <textarea type="text" name="message" onChange={this.handleChange} value={this.state.message} />
                        {errors.message.length > 0 && <span className="error-text">{errors.message}</span>}
                    </div>
                    <input type="submit" value="Submit" style={{
                        background: "darkorange", height: "50px", marginLeft: "10px",
                        fontSize: "20px", color: "white", borderRadius: "10px"
                    }} />
                </form>
            </div>
        )
    }
}
