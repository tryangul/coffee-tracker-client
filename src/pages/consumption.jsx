import React, { Component } from 'react'
import { connect } from 'react-redux'

class Consumption extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.route.title}</h2>
                <h3>{this.props.hello}</h3>
            </div>
        )
    }
}

export default connect(
    state => state.toJSON()
)(Consumption)