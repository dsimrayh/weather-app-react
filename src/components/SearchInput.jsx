export default function SearchInput({
  getWeather,
  searchValue,
  setSearchValue,
  error,
}) {
  async function handleSubmitForm(event) {
    event.preventDefault();
    if (!searchValue) return;
    try {
      await getWeather(searchValue);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="search-input">
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="search">Location:</label>
        <input
          type="search"
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
      <p id="error" className={error ? '' : 'hidden'}>
        Error: Location not found.
      </p>
    </div>
  );
}
