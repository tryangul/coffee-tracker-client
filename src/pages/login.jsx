import React, { Component } from 'react'
import { connect } from 'react-redux'

import Input  from 'react-bootstrap/lib/Input'
import Button from 'react-bootstrap/lib/Button'

class Login extends Component {
    constructor(props) {
        super(props)
        this.login        = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange(name) {
        text => this.setState({ [name]: text })
    }

    login() {
        const { email, password } = this.state
        this.props.login(email, password)
    }

    render() {
        return (
            <div>
                <h2>{this.props.route.title}</h2>
                <h3>{this.props.hello}</h3>
                <Input onChange={this.handleChange('email')} />
                <Input onChange={this.handleChange('password')} />
                <Button onClick={this.login} />
            </div>
        )
    }
}

export default connect(
    state => state.toJSON()
)(Login)