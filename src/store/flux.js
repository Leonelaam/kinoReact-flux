const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pelis:[],
			person: [],
			progTV: []
		},
		actions: {
			getPelis: (url) => {
				fetch(url)
					.then(response => response.json())
					.then(data => {
						setStore({ pelis: data });
					});
			},
			// Usa getActions para llamar una function dentro de una fuction. Te dejo un ejemplo
			exampleFunction: () => {
				getActions().changeColor("green");
			},




            //funcion de ejemplo para hacer peticiones fetch
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ demo: data.bar }))
				*/
			},
			changeColor: (color) => {
                //actualiza un dato de la global store
                setStore({ demo: color });
                
				//Para obtener datos de la store y usarlos como en el ejemplo de la linea 23 a la 26
				// const store = getStore();

				//suponiendo que demo es un array con datos  
				//con colores predefinidos
				// const demo = store.demo.map((elm, i) => {
				// 	if (i === index) elm = color;
				// 	return elm;
				// });

			}
		}
	};
};

export default getState;