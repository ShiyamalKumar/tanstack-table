import React, { useState } from 'react';
import Table from './Table';
import './App.css';

function App() {
  const [data, setData] = useState([
    {
      purchasedManufacturer: 'SANDRIGE FOOD CORP',
      purchasedProduct: 'SOUP TOMATO TORTELLINI FRESH',
      matchedManufacturer: 'CAMPBELL SALES COMPANY',
      matchedProduct: 'SOUP TOMATO FLRNTN W/PASTA',
      favorite: false,
      select: false,
    },
    {
      purchasedManufacturer: 'SANDRIGE FOOD CORP',
      purchasedProduct: 'SOUP TOMATO TORTELLINI FRESH',
      matchedManufacturer: 'CAMPBELL SALES COMPANY',
      matchedProduct: 'SOUP TOMATO FLRNTN W/PASTA',
      favorite: false,
      select: false,
    },
    {
      purchasedManufacturer: 'SANDRIGE FOOD CORP',
      purchasedProduct: 'SOUP TOMATO TORTELLINI FRESH',
      matchedManufacturer: 'CAMPBELL SALES COMPANY',
      matchedProduct: 'SOUP TOMATO FLRNTN W/PASTA',
      favorite: false,
      select: false,
    },
    {
      purchasedManufacturer: 'SANDRIGE FOOD CORP',
      purchasedProduct: 'SOUP TOMATO TORTELLINI FRESH',
      matchedManufacturer: 'CAMPBELL SALES COMPANY',
      matchedProduct: 'SOUP TOMATO FLRNTN W/PASTA',
      favorite: false,
      select: false,
    },
    {
      purchasedManufacturer: 'ABC Corporation',
      purchasedProduct: 'Cereal Oats & Honey',
      matchedManufacturer: 'Healthy Foods Inc.',
      matchedProduct: 'Oatmeal Honey Crunch',
      favorite: false,
      select: false,
    },
    {
      purchasedManufacturer: 'Xyz Foods',
      purchasedProduct: 'Spaghetti Bolognese',
      matchedManufacturer: 'Pasta Paradise',
      matchedProduct: 'Bolognese Spaghetti',
      favorite: false,
      select: false,
    },
    {
      purchasedManufacturer: 'Fresh Farms',
      purchasedProduct: 'Apple Pie',
      matchedManufacturer: 'Dessert Delights',
      matchedProduct: 'Homemade Apple Pie',
      favorite: false,
      select: false,
    },
    {
      purchasedManufacturer: 'Green Grocers',
      purchasedProduct: 'Fresh Spinach',
      matchedManufacturer: 'Healthy Greens Inc.',
      matchedProduct: 'Organic Spinach Leaves',
      favorite: false,
      select: false,
    },
    {
      purchasedManufacturer: 'Bakers Delight',
      purchasedProduct: 'Chocolate Cake',
      matchedManufacturer: 'Sweet Treats Bakery',
      matchedProduct: 'Double Chocolate Fudge Cake',
      favorite: false,
      select: false,
    },
  ]);

  const handleFavoriteClick = (rowData) => {
    const updatedData = [...data];
    const index = updatedData.indexOf(rowData);
    if (index !== -1) {
      updatedData[index].favorite = !updatedData[index].favorite;
      setData(updatedData);
    }
  };

  const handleSelectRow = (rowData) => {
    const updatedData = [...data];
    const index = updatedData.indexOf(rowData);
    if (index !== -1) {
      updatedData[index].select = !updatedData[index].select;
      setData(updatedData);
    }
  };

  return (
    <div>
      <h1>Table using TanStack</h1>
      <Table data={data} onFavoriteClick={handleFavoriteClick} onSelectRow={handleSelectRow} />
    </div>
  );
}

export default App;
