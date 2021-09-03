import React, { useState, useEffect, createContext } from 'react'
import getState from "./flux.js"; //importamos getState

  // exportamos el contexto
  export const Context = createContext(null);
// const UserProvider =
  const MyContextProvider = ({children}) => {
    const [state, setState] = useState(getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore =>
            setState({
                store: Object.assign(state.store, updatedStore),
                actions: { ...state.actions }
            })
    }));

    useEffect(() => {
      state.actions.getPelis('https://api.themoviedb.org/3/movie/popular?api_key=64b73d43a55a920af8890d10d8de7724');
		
			/**
			 Esta función es equivalente a "window.onLoad", solo se ejecuta una vez en toda la vida útil de la aplicación debe realizar sus solicitudes ajax o buscar solicitudes de API aquí. No use setState () para guardar datos en la tienda, en su lugar use acciones, como esta:

			 * state.actions.loadSomeData(); <---- llamando a esta función desde las actions de flux.js
			 *
			 **/
		}, []);

    return (
      <Context.Provider value={{state}}>
        {children}
      </Context.Provider>
    );
  };

//exportamos el proveedor
export default MyContextProvider