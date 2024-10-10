import { useState, useEffect } from "react"



export default function useAPICall() {
  const [catData, setCatData] = useState()
  const [error, setError] = useState(false)
  const[loading, setLoading] = useState(true)
  
    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => {
            console.log(response);
            if(!response.ok) {
                throw new Error()
            }
            return response.json()
        })
        .then(data => {
            console.log(data);
            setCatData(data)
            setLoading(false)
        })
        .catch(() => setError(true))
    }, [])

    return {catData, error, loading}
}