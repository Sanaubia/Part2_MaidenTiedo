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


    const rows = () => countries.filter(country =>{
        console.log(country.name.indexOf(newFilter))

        
            return country.name.indexOf(newFilter) >= 0   
        //return country.name.indexOf(newFilter) >= 0

      })


     .map(country =>
        <Country 
        key = {country.name}
        country = {country}
        />,
     )

    const handleNoteChangeFilter = (event) =>{
        console.log(event.target.value)
        setNewFilter(event.target.value)
    }

    const filter = () => {
        if(rows().length > 10){
            console.log(rows(), 'rowit')
            return <h3>Too many matches, speficy another filter </h3>
        }else if (rows().length < 10){
            return rows()
        }
    }

    
    return (
        <div>
          <form>
              Find countries: <input value = {newFilter}
              onChange = {handleNoteChangeFilter}
              />
          </form>
            {filter()}
        </div>
      )


}





export default App