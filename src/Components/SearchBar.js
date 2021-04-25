function SearchBar(props) {
  return (
    <div>
      <input
        aria-labelledby="search-button"
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
