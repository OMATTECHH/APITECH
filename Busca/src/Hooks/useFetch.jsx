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

                setTimeout(() => {
                    setData(json)
                    setMsgs("Usuarios")
                    setLoading(false)
                }, 2000);
            } catch (error) {
                setMsgs("Deu Errado !" + error)
            }
        }

        loadData();
    },[url])

    return{data, setData, msgs, loading}
}