import React, { useState, useContext } from 'react'
/* importar datacontext */
import { DataContext } from '../context/DataContext';

import { db } from '../data/db';


const inputF = () => {
  
    const submit = (e) => {
        e.preventDefault()
        console.log('Enviando formulario')
    };
    const informacionAgregadaInput = (e) => {
      console.log(e.target.value)
    };
      return (
    <div className='border mt-5 mb-10'>
      <h1 className="bg-teal-500 text-white"> <strong>Formulario</strong></h1>
    <form onSubmit={submit}>
  <div className="m-6">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ingresa tu Nombre</label>
    <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Armando Mocha" required="" onChange={informacionAgregadaInput}/>
  </div>  <div className="m-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ingresa tu Correo</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ej: armando.mocha@text.com" required="" onChange={informacionAgregadaInput}/>
  </div>
  <div className="flex items-start m-6">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
    </div>
    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recordar mis datos</label>
  </div>
  <button type="submit" className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5">Insertar</button>
</form>
</div>

  )
}
;
export default inputF;
