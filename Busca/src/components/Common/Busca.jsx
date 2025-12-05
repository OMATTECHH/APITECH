import React from 'react'
import { useState } from 'react'
import { useFetch } from '../../Hooks/useFetch'

const Busca = () => {

    const [name, setName] = useState("")
    const [role, setRole] = useState("")

    const url = "http://localhost:3001/users";

    const {data: pessoa, setData: setPessoa, msgs, loading} = useFetch(url)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const add = {
            name,
            role,
        };

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(add)
        });

        const data = await res.json();
        setPessoa((prev) => [...prev, data])

        setName("")
        setRole("")
    };
    return (
        <>
        <h1 className='text-4xl text-center font-bold text-white mt-4'>LISTA DE USUARIOS</h1>
        <div className='flex gap-30 justify-center mt-5'>
        {loading ? (
            <h1 className='text-white font-bold uppercase text-2xl'>{msgs}</h1>
        ) : (
            <ul className='bg-neutral-500 text-white w-100 h-fit rounded-lg p-4 hover:scale-105 transition-all duration-300'>
                {pessoa.map((p) => (
                    <li key={p.id}><strong>{p.name} : </strong>{p.role}</li>
                ))}
            </ul>
        )}


            <form onSubmit={handleSubmit} className='bg-neutral-500 text-white flex flex-col p-4 rounded-xl gap-5 w-50 h-fit hover:scale-105 transition-all duration-300'>
                <label className='flex flex-col'>
                    <span>Nome:</span>
                        <input type="text" name="name" id="name" placeholder='Digite seu nome'  required value={name} onChange={(e) => setName(e.target.value)} className='bg-neutral-900/50 p-2 rounded-2xl outline-none hover:bg-neutral-900/60'/>
                </label>

                <label className='flex flex-col'>
                    <span>Role:</span>
                        <input className='bg-neutral-900/50 p-2 rounded-2xl outline-none hover:bg-neutral-900/60' type="text" name="address" id="addresUser" placeholder='Digite sua profissão' required value={role}  onChange={(e) => setRole(e.target.value)}/>
                </label>

                <button type='submit' className='bg-neutral-900/60 p-2 rounded-2xl cursor-pointer hover:bg-neutral-900/70'>Enviar</button>
            </form>

        </div>
        </>
    )
}

export default Busca