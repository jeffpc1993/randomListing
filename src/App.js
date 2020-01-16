import React from 'react';
import 'typeface-roboto';
import logo from './logo.svg';
import './App.css';
import { ProductListDataProvider } from "./dataContexts/ProductListContext";
import ProductDiscovery from "./pages/ProductDiscovery";
function App() {
  return (
    <div className="App">
      <ProductListDataProvider>
        <ProductDiscovery />
      </ProductListDataProvider>
    </div>
  );
}

export default App;
