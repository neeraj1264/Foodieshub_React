import React from 'react';
import './Category.css';
import PizzaImage from '/img/pizza.jpg';
import BurgerImage from '/img/burger.jpg';

const categories = [
  { name: 'Pizza', image: PizzaImage, path: '/g-1.jpg' },
  { name: 'Burger', image: BurgerImage, path: '/s-img-2.jpg' },
  { name: 'Sandwich', image: PizzaImage, path: '/g-1.jpg' },
  { name: 'Pasta', image: PizzaImage, path: '/g-1.jpg' },
  { name: 'Pizza', image: PizzaImage, path: '/g-1.jpg' },
  { name: 'Burger', image: PizzaImage, path: '/g-1.jpg' },
  { name: 'Sandwich', image: PizzaImage, path: '/g-1.jpg' },
  { name: 'Pasta', image: PizzaImage, path: '/g-1.jpg' },
];

function Category() {
  return (
    <>
      <div className="outer-card">
        {categories.map((category, index) => (
          <div className="card" key={index}>
            <img src={category.image} className="card-img-top" alt={category.name} />
            <div className="card-body">
              <p className="card-text">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
