import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import Modal from '../components/Modal';

const Products = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para el modal

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const uri = 'https://pokeapi.co/api/v2/pokemon/';
      const response = await axios.get(uri);

      
      const pokemonDetails = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const details = await axios.get(pokemon.url); 
          return {
            id: details.data.id,
            name: details.data.name,
            image: details.data.sprites.front_default, // Imagen del Pokémon
          };
        })
      );

      setPokemonList(pokemonDetails); 
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

 
  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="row">
      {pokemonList.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <ProductCard product={product} onView={() => handleShowModal(product)} />
        </div>
      ))}

      {/* Modal para mostrar los detalles */}
      {selectedProduct && (
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          title={selectedProduct.name}
          image={selectedProduct.image}
        />
      )}
    </div>
  );
};

export default Products;
