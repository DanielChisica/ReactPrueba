import React from  'react';
import classnames from 'classnames';
import lodash from 'lodash';
const ITEMS_API_URL='http://localhost:3000/api/items';
const DEBOUNCE_DELAY = 500;

export default class Autocomplete extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            suggestions:[],
            text: '',
            typingTimeout: 0,
            control: 'control'
        }
    }

    onTextChanged = (value) =>{
        this.setState({text:value})
        if(this.state.typingTimeout){
            clearTimeout(this.state.typingTimeout);
        }
        this.setState({
            typingTimeout:setTimeout(()=> {
                    this.setState({control:'control is-loading'})
                    fetch(ITEMS_API_URL + '/' + this.state.text).then(response => {
                        return response.json()
                    }).then(data=>{
                        this.setState({suggestions: data})
                    }).then(()=>{
                        this.setState({control:'control'})
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
          <div className="list is-hoverable">
              {suggestions.map((item)=><a className="list-item" onClick={()=>this.props.onSelectItem(item)} key={item}>{item}</a>)}
          </div>
        );
    }

    render(){
        const {text}=this.state;
        const {control}=this.state;
        return(
            <div className="wrapper">
                <div className={control}>
                <input type="text" className="input" value={text} onChange={e=>this.onTextChanged(e.target.value)}/>
                </div>
                {this.renderSuggestions()}
            </div>
        );
    }
}

