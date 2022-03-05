const CountryRow = ({ country }) => {
  return (
    <div className="w-100 flex justify-center align-center">
      <span>{country.name}</span>
      <span>{country.status}</span>
    </div>
  )
}

export default CountryRow;
