import React from 'react';
import '../EmployeeForm.css';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', title: '', department: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addEmployee({ ...this.state });
        this.setState({ name: '', email: '', title: '', department: '' });
}

    render() {
        return (
            /* 2. Added className="employee-form" to match your CSS file */
            <form onSubmit={this.handleSubmit} className="employee-form">
                <h2>BB-8 Employee Form</h2>
                
                <div>
                    <label>Name: </label>
                    <input 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                    />
                </div>

                <div>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                    />
                </div>

                <div>
                    <label>Job Title: </label>
                    <input 
                        type="text" 
                        name="title" 
                        value={this.state.title} 
                        onChange={this.handleChange} 
                    />
                </div>

                <div>
                    <label>Department: </label>
                    <input 
                        type="text" 
                        name="department" 
                        value={this.state.department} 
                        onChange={this.handleChange} 
                    />
                </div>

                <button type="submit">Add Employee</button>
                {/*<button type="button" onClick={this.props.saveData}>Now Save</button>*/}
            </form>
        );
    }
}

export default EmployeeForm;