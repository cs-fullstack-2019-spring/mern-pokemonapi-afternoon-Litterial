import React,{Component} from 'react';
import PokeSprite from "./PokeSprite";
import '../App.css'
export default class PokemonName extends Component{

    constructor(props)
    {
        super (props);
        this.state= {
            //the state is data:{ results:[]} because the data is inside a collection
            data: {
                results:[],
            }
        }

    };

    componentDidMount() {
        this.getpokedata()
    };

    getpokedata=(e)=>
    {
        //grabs data from link
        fetch('https://pokeapi.co/api/v2/pokemon?limit=900')
            .then(rawData=>rawData.json())
            .then(jsonData=> this.setState({data:jsonData}));
    };

    render() {
        console.log('test');
        console.log(this.state.data);
        const map_pokemon=this.state.data.results.map((ele)=>
        {
            var number=ele.url;    //grabs the url of the pokemon
            var new_number=number.split('/').reverse();     //turns the url into an array that is split based off "/" then reverses it
            console.log(new_number[1]);   // the first index will be an empty space, but the second space will have the number



         return(
             <div>
                 {/* the images numbers are linked to their pokemon id number add 1 to the index*/}
                 <img src= {'/pokemon/'+new_number[1]+'.png'} alt={'Image of '+ele.name}/>
             <h1>{ele.name}</h1>
             </div>

         )
        });

        return(
            <div className='grid'>
                {map_pokemon}
            </div>
        )
    }
}