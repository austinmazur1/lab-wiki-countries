import { Link } from "react-router-dom"


const CountiresList = ({ countries }) => {
  return (
    <div>
        {countries.map((country) => (
            <div key={country.alpha3Code} >
            {/* {console.log(country)} */}
            <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
          </div>
        ))}
      
    </div>
  )
}

export default CountiresList
