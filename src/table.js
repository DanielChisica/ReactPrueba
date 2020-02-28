import React from  'react';
import './table.css';
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
            <button className="small blue button" disabled={isLoading || currentPage===0} onClick={()=>this.onChangePage(0)}>First</button>
            <button className="small button" disabled={isLoading || currentPage===0} onClick={()=>this.onChangePage(this.state.currentPage-1)}>Previous</button>
            <button className="small button" disabled={isLoading || currentPage===numPages} onClick={()=>this.onChangePage(this.state.currentPage+1)}>Next</button>
            <button className="small blue button" disabled={isLoading || currentPage===numPages} onClick={()=>this.onChangePage(this.state.numPages)}>Last</button>
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
                <table className="table-resp">
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
