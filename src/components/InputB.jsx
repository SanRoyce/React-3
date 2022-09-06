import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { db } from "../data/db"

const inputB = () => {
  const validationDb = false
  const { lista, setLista, data, buscar, setBuscar, show, setShow } = useContext(DataContext)
  const search = (e) => {
    console.log("search")
    console.log(buscar)
    e.preventDefault()
    setLista(data.filter((arreglo) =>
      arreglo.nombre.toUpperCase().includes(buscar.toUpperCase())
    ))
    if (lista.length > 0) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  const clean = (e) => {
    e.preventDefault()
    setBuscar("")
    console.log(data)
    setLista(data)
  }

  return (
    <div className="border">
      <h1 className="bg-teal-500 text-white">
        {" "}
        <strong>Buscador de colaboradores</strong>
      </h1>
      <form className="w-full flex justify-center mb-5 mt-5">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="ej: Fernando"
            aria-label="Full name"
          />
          <button
            onClick={search}
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Buscar
          </button>
          <button
            onClick={clean}
            className=" ml-2 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  )
}

export default inputB