import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Country from './Country'

const App = () => {
    const [countries, setCountries] = useState([]) 
    const [ newFilter, setNewFilter ] = useState('')

    /*
    const promise = axios.get('https://restcountries.eu/rest/v2/all')
    console.log(promise)
    */

    useEffect(() => {
        console.log('effect')
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log('promise fulfilled')
                setCountries(response.data)
                console.log(response.data)
            })
    }, [])
     const rows = () => countries.map(country =>
        <Country 
        key = {country.name}
        country = {country}
        />
     )
        
    //const rows = () => persons.map(person => <li key = {person.name} >{person.name} {person.number}</li>)
  
      
      //.map(person => <li key = {person.name} >{person.name} {person.number}</li>)
  

    const handleNoteChangeFilter = (event) =>{
        console.log(event.target.value)
        setNewFilter(event.target.value)
    }

    return (
        <div>
          <form>
              Find countries: <input value = {newFilter}
              onChange = {handleNoteChangeFilter}
              />
          </form>
          {rows()}
        </div>
      )


}





export default App