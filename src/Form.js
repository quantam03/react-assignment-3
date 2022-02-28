import React, {Component} from "react";
import Data from "./Data";
import "./styling.css"

 class Form extends Component {


   constructor(props){
       super(props)
       this.state = {
        clicked:false,
        name:'',
        dept:'',
        rating:'',
        count:1,
        array:[]
        };
   }


    changeEvent = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }


    toggleClick = () => {
        this.setState({clicked:!this.state.clicked})
    };

    SubmitForm = (event) => {
        event.preventDefault();
        console.log("Worked")
        let temp_obj = {
            name:this.state.name,
            dept:this.state.dept,
            rating:this.state.rating,
            count:this.state.count
        };

        this.state.array.push(temp_obj);

        this.setState({
            clicked:true,
            name:"",
            dept:"",
            rating:"",
            count:this.state.count +1
        }); 
    } 
    

    render(){
        return(
            <div className="form-container">
                {!this.state.clicked ? 
                <>
                    <h1>EMPLOYEE FEEDBACK FORM</h1>
                    <form>
                        <label className="element_1" htmlFor="name">Name :</label>
                        <input className="input-box elements" 
                        type="text" 
                        id="name" 
                        value={this.state.value} 
                        name="name" 
                        onChange={this.changeEvent}/>
                        <br />

                        <label className="element_2" htmlFor="dept">Department :</label>       
                        <input className="input-box elements" 
                        type="text" 
                        name="dept" 
                        value={this.state.value} 
                        id="dept"
                        onChange={this.changeEvent}/>
                        <br />

                        <label className="element_3" htmlFor="rate">Rating :</label>          
                        <input className="input-box elements" 
                        type="number" 
                        id="rate" 
                        value={this.state.value} 
                        name="rating" 
                        onChange={this.changeEvent}/>
                        <br />

                        <button className="submit-btn" type="submit" onClick={this.SubmitForm.bind(this)}>Submit</button>
                    </form>
                </> :
                    <Data data={this.state.array} toggleFunc={this.toggleClick} />
                    }
            </div>
        )
    }
}

export default Form