import React from 'react';
import './App.css';
import feed from './feeds/feed_10_06.json';

console.log(feed.rss[0].channel[0].item);
const products = feed.rss[0].channel[0].item.sort((a, b) => a["g:title"] - b["g:title"]);

function App() {
  return (
    <div className="App">
      <ul className="items_list">
        {products.map(product => (<li className="item" key={product["g.id"]}>
          <p className="item_title">{product["g:title"]}</p>
          <div className="content_wrapper">
          <img className="item_img" src={product["g:image_link"]} alt={product["g:id"].toString()}></img>
          <div>
            <div className="item_options">
              <p className="item_option">Артикул: <span className="item_option-value">{product["g:id"]}</span></p>
              <p className="item_option">Цена: <span className="item_option-value">{product["g:price"]}</span></p>
            </div>
            <p className="item_description">{product["g:description"]}</p>
          </div>
          </div>
          </li>))}
      </ul>
    </div>
  );
}

export default App;
