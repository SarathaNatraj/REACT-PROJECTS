import React from "react";
class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
               <p> {this.props.content}</p>

            </div>
        )
    }
}

export default Content;