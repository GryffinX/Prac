import React from 'react';
import { useState } from 'react';

export default function Num (props) {

    const CalcFactorial = (n) => {
        let fac = 1;
        if (n === 0 || n === 1) {
            return 1;
        } else {
            for (let i=2; i<=n; ++i) {
                fac *= i;
            }
            return fac;
        }
    }   

    return (
        <>
        <p>Number: {props.number}</p>
        <p>Square: {props.number * props.number}</p>
        <p>Cube: {props.number * props.number * props.number}</p>
        <p>Factorial: {CalcFactorial(props.number)}</p>
        </>
    );
}


function UserProfile({ name, age, city }) {
  return (
    <>
      <h3>User Profile</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </>
  );
}

function Product({ name, price, category }) {
  return (
    <>
      <h3>Product</h3>
      <p>Name: {name}</p>
      <p>Price: ₹{price}</p>
      <p>Category: {category}</p>
    </>
  );
}

function HobbiesList({ hobbies }) {
  return (
    <>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}

function CarDetails({ car }) {
  return (
    <>
      <h3>Car Details</h3>
      <p>Brand: {car.brand}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
    </>
  );
}

function DiscountMessage({ productName, discount }) {
  return (
    <>
      {discount > 10 && (
        <p>
          Special Offer on {productName}! Get {discount}% discount!
        </p>
      )}
    </>
  );
}

export { UserProfile, Product, HobbiesList, CarDetails, DiscountMessage };