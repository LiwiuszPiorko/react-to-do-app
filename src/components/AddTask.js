import React,{Component} from 'react';
import "./AddTask.css";

class AddTask extends Component{
    state = {
        text: '', 
        checked: false,
        date: new Date().toISOString().slice(0,10)
    }
    handleText = (e) =>{
        this.setState({
            text: e.target.value
        })
    }
    handleChceckbox = (e) =>{
        this.setState({
            checked: e.target.checked
        })
    }
        
        
    handleDate =(e)=>{
        this.setState({
            date: e.target.value
        })

    }

    handleClick = () =>{
        const {text, date, checked} = this.state
        const add = this.props.add(text, date, checked)
        if(add){
            this.setState({
                text: '', 
                checked: false,
                date: new Date().toISOString().slice(0,10)
            })
        }
    }

    render(){
        return(
            <div className="form">
                <div>
                    <input type= "text" placeholder = "Zadanie do wykonania" value = {this.state.text} onChange={this.handleText}/>
                    <input type = "checkbox" checked = {this.state.checked} id="important" onChange={this.handleChceckbox}/>
                    <label htmlFor="important">Priorytet</label>
                </div>
                <div>
                    <input type = "date" value={this.state.date} onChange={this.handleDate}/>    
                </div>
               <button onClick={this.handleClick}>Dodaj do listy</button>
            </div>
            
        );
    }
}
export default AddTask;