import React, { useState } from 'react';
import {IoSearchCircle} from 'react-icons/io5'
import styles from './Searchbar.module.css'

const Searchbar = ({ setUrl, numberOfArticles }) => {

  // variable für React State
  const [inputValue, setInputValue] = useState("")    // "" string, {} objekt

  function handleChange(event) {

    // value aus inputfield immer über event.target.value
    setInputValue(event.target.value)


  }

  function handleClick() {
    // inputValue State eine Komponente höher schicken
    if (inputValue === "") {
      setUrl(`https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=${numberOfArticles}`)
    } else {
      setUrl(`https://hn.algolia.com/api/v1/search?query=${inputValue}&hitsPerPage=${numberOfArticles}`)
    }
  }

  // https://hn.algolia.com/api/v1/search_by_date?query=${inputValue}

  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder='Suche...' onChange={handleChange} />
      <button className={styles.btn} onClick={handleClick}><IoSearchCircle/></button>
    </div>
  )
}

export default Searchbar;
