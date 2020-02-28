import React from  'react';
<<<<<<< HEAD
import './autocomplete.css';
=======
import classnames from 'classnames';
import lodash from 'lodash';
>>>>>>> edfab76722315bcfc66bf3ad71acf102daaa6dc2
const ITEMS_API_URL='http://localhost:3000/api/items';
const DEBOUNCE_DELAY = 500;

export default class Autocomplete extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            suggestions:[],
            text: '',
            typingTimeout: 0,
<<<<<<< HEAD
            control: 'AutoCompleteText control'
=======
            control: 'control'
>>>>>>> edfab76722315bcfc66bf3ad71acf102daaa6dc2
        }
    }

    onTextChanged = (value) =>{
        this.setState({text:value})
        if(this.state.typingTimeout){
            clearTimeout(this.state.typingTimeout);
        }
        this.setState({
            typingTimeout:setTimeout(()=> {
<<<<<<< HEAD
                    this.setState({control:'AutoCompleteText control is-loading'})
                    fetch(ITEMS_API_URL + '/' + this.state.text).then(response => {
                        return response.json()
                    }).then(data=>{
                        const regex = new RegExp('^'+value,'i')
                        this.setState({suggestions: data.sort().filter(v=>regex.test(v))})
                    }).then(()=>{
                        this.setState({control:'AutoCompleteText control'})
=======
                    this.setState({control:'control is-loading'})
                    fetch(ITEMS_API_URL + '/' + this.state.text).then(response => {
                        return response.json()
                    }).then(data=>{
                        this.setState({suggestions: data})
                    }).then(()=>{
                        this.setState({control:'control'})
>>>>>>> edfab76722315bcfc66bf3ad71acf102daaa6dc2
                    })
                }
                ,DEBOUNCE_DELAY)
        })
    }

    renderSuggestions(){
        const {suggestions}=this.state;
        if(suggestions.length===0){
            return null
        }
        return (
<<<<<<< HEAD
          <ul className="list is-hoverable">
              {suggestions.map((item)=><li className="list-item" onClick={()=>this.props.onSelectItem(item)} key={item}>{item}</li>)}
          </ul>
=======
          <div className="list is-hoverable">
              {suggestions.map((item)=><a className="list-item" onClick={()=>this.props.onSelectItem(item)} key={item}>{item}</a>)}
          </div>
>>>>>>> edfab76722315bcfc66bf3ad71acf102daaa6dc2
        );
    }

    render(){
        const {text}=this.state;
        const {control}=this.state;
        return(
            <div className="wrapper">
                <div className={control}>
                <input type="text" className="input" value={text} onChange={e=>this.onTextChanged(e.target.value)}/>
<<<<<<< HEAD
                {this.renderSuggestions()}
                </div>
=======
                </div>
                {this.renderSuggestions()}
>>>>>>> edfab76722315bcfc66bf3ad71acf102daaa6dc2
            </div>
        );
    }
}

