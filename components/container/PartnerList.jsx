"use client"

// components/Card.js
import React from 'react';
import Card from '@components/presentational/card';
import { useEffect, useState } from 'react';



const CardList = ({ data}) => {
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl mx-auto sm:px-16 px-6">
      {data.map((item, index) => (
        <Card key={index} title={item.title} description={item.description} imageUrl={item.imageUrl}/>
      ))}
    </div>
  );
};

export default CardList;
