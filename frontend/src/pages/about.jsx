import React from 'react';
import Logo from 'Images/image.png'

const About = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
           <img src={Logo} width={600} height={200}/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
            Somos Digital Learning, nativos digitales en capacitación y los primeros en impulsar el e-learning en Chile. Por más de 25 años hemos acompañado a nuestros clientes a cumplir sus desafíos de negocio, convencidos de que el talento, la tecnología y el aprendizaje hacen el cambio.
            </p>
        </div>
    </div>
    </div>
  );
}

export default About;