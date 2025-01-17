import React from 'react';
import '../assets/css/somos.css';


export default function AboutUs() {
  const teamMembers = [
    {
      name: 'ildemar molano castillo',
      role: 'CEO',
      image: 'https://img.freepik.com/vector-gratis/gente-dibujada-mano-ilustracion-rastas_23-2149752844.jpg?t=st=1737152047~exp=1737155647~hmac=f1fae7b2a4f83baab2137761efdaffbb1d90e5aa32ebe76e05063cd3b04ffdc3&w=740',
    },
    {
      name: 'fulanito detal',
      role: 'Desarrolladora',
      image: 'https://img.freepik.com/fotos-premium/roblox-inspirado-juego-tematico-imagen-perfil-cabeza_643382-3708.jpg?w=740',
    },

  ];

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">Quiénes Somos</h1>
        <p className="lead text-muted">
          Somos un equipo apasionado por la tecnología, la innovación y el diseño, comprometidos con crear soluciones de alta calidad.
        </p>
      </div>

      <div className="row mt-5">
        {teamMembers.map((member, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img
                src={member.image}
                alt={member.name}
                className="card-img-top"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
