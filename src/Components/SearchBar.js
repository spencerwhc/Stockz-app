function SearchBar(props) {
  return (
    <div className="searchBar">
      <input
        aria-labelledby="search-button"
        placeholder="Search by stock"
        name="search"
        id="search"
        type="search"
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
      />
    </div>
  );
}

export default SearchBar;
