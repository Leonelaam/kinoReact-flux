const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pelis:[],
			person: [],
			progTV: [],
			favoritos: [],
			// login
			nick_name: "nick_name",
			token: null,
			user_id: null
		},
		actions: {
			getPelis: () => {
				fetch('https://api.themoviedb.org/3/movie/popular?api_key=64b73d43a55a920af8890d10d8de7724')
					.then(response => response.json())
					.then(data => setStore({ pelis: data.results }));
			},
			getPerson: () => {
				fetch('https://api.themoviedb.org/3/person/popular?api_key=64b73d43a55a920af8890d10d8de7724')
					.then(response => response.json())
					.then(data => setStore({ person: data.results }));
			},
			getProgTV: () => {
				fetch('https://api.themoviedb.org/3/tv/popular?api_key=64b73d43a55a920af8890d10d8de7724')
					.then(response => response.json())
					.then(data => setStore({ progTV: data.results }));
			},
			// Usa getActions para llamar una function dentro de una fuction. Te dejo un ejemplo
			exampleFunction: () => {
				getActions().changeColor("green");
			},

			login: () => {
				setStore({
					nick_name: sessionStorage.getItem("nick_name"),
					token: sessionStorage.getItem("u_token"),
					user_id: sessionStorage.getItem("user_id"),
					redirect_logout: false
				});
				alert("Has ingresado a tu cuenta");
			},

			// favoritos
			favoritos: data => {
				let alreadyFav = false;
				let favArr = getStore().favoritos;
				
				if (favArr) {
					fetch(`${process.env.BACKEND_URL}/api/user/${getStore().user_id}/favorits`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					})
						.then(response => response.json())
						.then(() => {
							getActions().fetchGetFavorite();
							alert("Agregado a tus favoritos");
						});
				} else {
					// para que no repita el favorito
					favArr.forEach(element => {
						if (element.place_id === data.place_id) {
							alreadyFav = true;
							alert("¡Ooops! ¡Ya está en tus favoritos!");
						}
					});
					if (!alreadyFav) {
						fetch(`${process.env.BACKEND_URL}/api/user/${getStore().user_id}/favorites`, {
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(data)
						})
							.then(response => response.json())
							.then(() => {
								getActions().fetchGetFavorite();
							});
					}
				}
			},
			fetchGetFavorite: () => {
				fetch(`${process.env.BACKEND_URL}/api/user/${getStore().user_id}/favoritos`)
					.then(response => response.json())
					.then(data => {
						setStore({ favoritos: data });
					})
					
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