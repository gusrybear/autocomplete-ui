import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const countryNames = [
    "Irak",
    "Thailand",
    "England",
    "Switzerland",
    "Denmark",
    "Turkey",
    "Hungary",
    "India",
    "Japan",
    "Venezuela",
    "Vietname",
    "Netherland",
    "Laos",
    "Myanmar",
    "Indonesia",
    "Singapore",
    "USA",
    "Germany",
    "Russia",
    "Ukraine",
  ]

  const [filteredCountry, setFilteredCountry] = useState<string[]>([])
  const [input, setInput] = useState("")

  const handleAutoComplete = (value: string) => {
    const filtered = [] as string[]
    if (!value) setInput("")
    else {
      setInput(value)
    }
    for (const country of countryNames) {
      if (
        country.toLocaleLowerCase().substring(0, value.length) ===
        value.toLocaleLowerCase()
      )
        filtered.push(country)
    }
    // console.log(filtered)
    setFilteredCountry(filtered.sort())
  }

  useEffect(() => {
    console.log(input)
  }, [input])

  return (
    <main>
      <div>
        <input
          type="text"
          onChange={(e) => handleAutoComplete(e.target.value)}
        />
      </div>

      <div className="autocomplete-list">
        {filteredCountry.map((name) => {
          const matchChars = name.substring(0, input.length)
          const originalChars = name.substring(input.length)

          return (
            <p key={name}>
              <b>{matchChars}</b>
              {originalChars}
            </p>
          )
        })}
      </div>
    </main>
  )
}

export default App
