import React from 'react';
import '../assets/css/user.css'; 

export default function UserProfile() {
  const user = {
    name: 'ildemar molano castillo',
    email: 'ildemar321@gmail.com',
    location: 'colombia, Buenaventura',
    bio: 'Desarrollador web apasionado por la tecnología y la innovación.',
    profileImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9ea570b-8fd6-46cc-a9b7-8cd934e1d04b/d2mk4a7-2fac6800-4331-447a-b535-f5401bf874f2.png/v1/fit/w_800,h_600,q_70,strp/pikachu_logo_by_jamierose64_d2mk4a7-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvYTllYTU3MGItOGZkNi00NmNjLWE5YjctOGNkOTM0ZTFkMDRiXC9kMm1rNGE3LTJmYWM2ODAwLTQzMzEtNDQ3YS1iNTM1LWY1NDAxYmY4NzRmMi5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.hTwZjoI14SoZcdW694gnfx_eXvzbCgCBKuiE053tE2I', // URL de la foto de perfil
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  };

  return (
    <div className="container">
      <div className="cover-image">
        
        {/* Foto de perfil */}
        <div className="profile-image-container">
          <img
            src={user.profileImage}
            alt="Foto de Perfil"
            className="img-fluid"
          />
        </div>
      </div>

      {/* Información de usuario */}
      <div className="user-info">
        <h1>{user.name}</h1>
        <p className="lead text-muted">{user.email}</p>
        <p className="text-muted">{user.bio}</p>
        <p className="text-muted"><strong>Ubicación:</strong> {user.location}</p>

        {/* Redes sociales */}
        <div className="social-links">
          <h4>Redes Sociales:</h4>
          <ul className="list-unstyled">
            <li>
              <a href={user.socialLinks.facebook} className="text-decoration-none text-primary" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href={user.socialLinks.twitter} className="text-decoration-none text-info" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href={user.socialLinks.linkedin} className="text-decoration-none text-primary" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
