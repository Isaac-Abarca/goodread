import "./search.css";
import iconSearch from "../../assets/lupa.png";

function Search() {
  return (
    <div className="container-search">
      <section className="search">
        <div className="text-search">
          <p>EXPLORE BOOKS</p>
        </div>
        <div className="search-bar">
          <div className="search-filter">
            <select id="combobox-art" value="Art">
              <option className="option" value="Art">Art</option>
            </select>
            <select id="combobox-year" value="year">
              <option value="year">Year</option>
            </select>
            <input type="text" id="textbox-search" placeholder="Search" />
          </div>

          <div className="search-btn">
            <button className="btn-search">
              <img className="btn-search-img" src={iconSearch} alt="Lupa" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
