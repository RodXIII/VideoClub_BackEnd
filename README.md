# Video-Club Rodri
BackEnd para una aplicación de video-club online utilizando NODEJS con express

peticion a base de datos mongo, con endpoints para diferentes filtros de busqueda de peliculas.

base de datos de usuarios , con token asignada al login y password cifrada.

ejemplos:


POST  http://localhost:3000/user/register
Content-Type:application/json

{

   "username": "Rodri",
   "password": "123456Az"
}

###


GET  http://localhost:3000/movies/top-rated
Content-Type:application/json

