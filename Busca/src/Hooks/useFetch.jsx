import { useEffect } from "react";
import { useState } from "react";


export function useFetch(url) {

    const [data, setData] = useState([])
    const [msgs, setMsgs] = useState("Carregando...")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json)
                
                if(loading) {
                    setMsgs("usuarios")
                    setLoading(false)
                }
            } catch (error) {
                setMsgs("Deu Errado !" + error)
            }
        }

        setTimeout(() => {
            loadData();
        }, 2000);

        const interval = setInterval(() => {
            loadData();
        }, 1000);;

        return () => clearInterval(interval)
    },[url, loading])

    return{data, setData, msgs, loading}
}