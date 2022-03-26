
import React, { Component } from "react"
import CardGame from './CardGame'

class ListGames extends Component {
   
    state = {
        data:[],
        loading:false,
    }

    async componentDidMount(){
        try {
            let req = await fetch('data.json')
            let data = await req.json()
            // console.log(data);
            this.setState({data: data})
        } catch (error) {
            console.log(error);
        }
    }
    
    render(){
        return( 
            <div className="row row-cols-4">
                {
                    this.state.data.map( game => {
                        return( <CardGame key={game.id} data={game}/>)
                    })
                }
                
            </div>
        )
    }
}

export default ListGames;