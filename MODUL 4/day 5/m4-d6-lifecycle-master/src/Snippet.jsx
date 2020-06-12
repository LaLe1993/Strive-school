import React from 'react'

class Snippet extends React.Component {

    // constructor(props) {
    //     super(props)
    //     // console.log('SNIPPET HERE, MOUNTING')
    // }

    componentWillUnmount = () => {
        console.log('SNIPPET HERE, GOING AWAY')
    }

    render() {
        return (
            <p>
                SNIPPET COMPONENT, THE TITLE IS {this.props.title}
            </p>
        )
    }
}

export default Snippet