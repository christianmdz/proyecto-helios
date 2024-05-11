import React from 'react'

export default function HomeP () {
  return (
    <div >
        <div className='flex justify-center ml-8 mr-8 text-3xl mt-4' >
            <h1> Bienvenido a la misión Circe</h1>
        </div>
        <div className='flex justify-center max-w-1xl md:max-w-2xl md:mx-auto m-8 '>
            <p>La misión espacial Circe está en marcha, explorando los límites del universo y abriendo nuevos horizontes en la investigación cósmica. Para formar parte de este emocionante viaje hacia lo desconocido, es crucial registrarse en nuestra aplicación y unirse a uno de los campos de especialización. Desde la ingeniería hasta la biología espacial, cada campo desempeña un papel vital en el éxito de la misión, contribuyendo al avance de la humanidad en el espacio. ¡Únete a Circe y sé parte del futuro espacial!</p>
        </div>
        <div className='flex justify-center'>
            <button className='bg-blue-500 p-2 text-white rounded-md hover:bg-blue-900 transition-colors'>Únete a la misión</button>
        </div>
    </div>
  )
}