import React from 'react';

import HomeHeader from '../components/HomeHeader';
import Content from '../components/Content';

class ContactPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });
    }

    render(){
        return(
            <div>
                <HomeHeader title={this.props.title} />

                <Content>
                <p>Contact me through my email:</p>
                <p>leo.hoedl@yahoo.com</p>
                </Content>
            </div>
        );
    }


}

export default ContactPage;