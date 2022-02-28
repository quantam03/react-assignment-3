import React, { Component } from 'react'

class Data extends Component {
    constructor(props) {
      super(props)
    
      this.state = {}
    }
    render(){
        return (<>
            <h1>Employee Data</h1>
            <div className="data-container">
                {this.props.data.map( (elmnt) => {
                    console.log(elmnt);
                    return (
                        <div className="elmnt-container">
                            <h2>{elmnt.count} : Name: {elmnt.name} || Dept: {elmnt.dept} || Rating: {elmnt.rating} </h2>
                        </div>
                    );
                    })
                }
            </div>
            <button className="submit-btn" onClick={this.props.toggleFunc}>Go back</button>
        </>
    )
    }
}


export default Data