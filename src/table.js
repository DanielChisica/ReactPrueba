import React from  'react';
<<<<<<< HEAD
import './table.css';
=======
>>>>>>> edfab76722315bcfc66bf3ad71acf102daaa6dc2
const USERS_URL='http://localhost:3000/api/users'

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            numPages:0,
            rows:[],
            currentPage:0,
            isLoading:false
        }
    }

    componentDidMount() {
        fetch(USERS_URL + '?page=0').then(response => {
            return response.json()
        }).then(data=>{
            this.setState({
                numPages:data.count%10===0 ? (data.count/10)-1 : Math.floor(data.count/10),
                rows:data.results
            })
        })
    }

    renderRows(){
        const {rows}=this.state
        console.log(rows)
        if(rows.length===0){
            return null
        }
        return (<tbody>
            {rows.map((row)=><tr><th>{row.id}</th><th>{row.firstName}</th><th>{row.lastName}</th></tr>)}
        </tbody>
        )
    }

    renderButtons(){
        const {numPages}=this.state
        const {currentPage}=this.state
        const {isLoading}=this.state

        return (<section className="pagination">
<<<<<<< HEAD
            <button className="small blue button" disabled={isLoading || currentPage===0} onClick={()=>this.onChangePage(0)}>First</button>
            <button className="small button" disabled={isLoading || currentPage===0} onClick={()=>this.onChangePage(this.state.currentPage-1)}>Previous</button>
            <button className="small button" disabled={isLoading || currentPage===numPages} onClick={()=>this.onChangePage(this.state.currentPage+1)}>Next</button>
            <button className="small blue button" disabled={isLoading || currentPage===numPages} onClick={()=>this.onChangePage(this.state.numPages)}>Last</button>
=======
            <button className="first-page-btn" disabled={isLoading || currentPage===0} onClick={()=>this.onChangePage(0)}>first</button>
            <button className="previous-page-btn" disabled={isLoading || currentPage===0} onClick={()=>this.onChangePage(this.state.currentPage-1)}>previous</button>
            <button className="next-page-btn" disabled={isLoading || currentPage===numPages} onClick={()=>this.onChangePage(this.state.currentPage+1)}>next</button>
            <button className="next-page-btn" disabled={isLoading || currentPage===numPages} onClick={()=>this.onChangePage(this.state.numPages)}>last</button>
>>>>>>> edfab76722315bcfc66bf3ad71acf102daaa6dc2
        </section>)
    }

    onChangePage=(page)=>{
        fetch(USERS_URL + '?page='+page).then(response => {
            this.setState({isLoading:true})
            return response.json()
        }).then(data=>{
            this.setState({
                rows:data.results,
                currentPage:page,
                isLoading:false
            })
        })
    }

    render() {
        return (
            <div className="prior-div">
<<<<<<< HEAD
                <table className="table-resp">
=======
                <table className="table table-resp">
>>>>>>> edfab76722315bcfc66bf3ad71acf102daaa6dc2
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    </thead>
                    {this.renderRows()}
                </table>
                {this.renderButtons()}
            </div>
        )
    }
}
