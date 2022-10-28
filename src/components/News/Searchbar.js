import React, { useState } from 'react';
import { IoSearchCircle } from 'react-icons/io5';
import styles from './Searchbar.module.css';

const Searchbar = ({ setUrl, numberOfArticles, setNumberOfArticles }) => {
  // variable für React State
  const [inputValue, setInputValue] = useState(''); // "" string, {} objekt

  function handleChange(event) {
    // value aus inputfield immer über event.target.value
    setInputValue(event.target.value);
  }

  function handleClick() {
    // inputValue State eine Komponente höher schicken
    if (inputValue === '') {
      setUrl(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=${numberOfArticles}`
      );
    } else {
      setUrl(
        `https://hn.algolia.com/api/v1/search?query=${inputValue}&hitsPerPage=${numberOfArticles}`
      );
    }
  }

  function handleQuantityRadio(e) {
    // console.log(e.target.value);
    setNumberOfArticles(e.target.value);
  }

  console.log(numberOfArticles);

  // https://hn.algolia.com/api/v1/search_by_date?query=${inputValue}

  return (
    <div>
      <div className={styles.searchbar}>
        <input type="text" placeholder="Suche..." onChange={handleChange} />
        <button className={styles.btn} onClick={handleClick}>
          <IoSearchCircle />
        </button>
      </div>
      <div className={styles.radioResult}>
        <h3>Suchergebnisse: </h3>
        <label className={styles.labelRadioResult}>
          <input
            type="radio"
            name="ergebnisse"
            value="10"
            onChange={handleQuantityRadio}
          ></input>
          10
        </label>
        <label className={styles.labelRadioResult}>
          <input
            type="radio"
            name="ergebnisse"
            value="50"
            onChange={handleQuantityRadio}
          ></input>
          50
        </label>
        <label className={styles.labelRadioResult}>
          <input
            type="radio"
            name="ergebnisse"
            value="100"
            onChange={handleQuantityRadio}
          ></input>
          100
        </label>
      </div>
    </div>
  );
};

export default Searchbar;
