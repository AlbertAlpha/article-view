import React, {useState} from "react";

type InputSearchProps = {
  onSearch: (text: string) => void,
  minCharacters?: number,
  initialValue?: string
}

const InputSearch = ({onSearch, minCharacters = 1, initialValue = ''}: InputSearchProps) => {

  const [searchValue, setSearchValue] = useState(initialValue);

  function handleSearchValueChange($event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue($event.target.value);
  }

  function submit($event: React.FormEvent<HTMLFormElement>) {
    $event.preventDefault();
    const value = searchValue.trim();
    if (value && value.length < minCharacters) return;
    onSearch(value);
  }

  return (
    <form className="form-inline" onSubmit={submit}>
      <div className="form-group mb-2 mr-2">
        <input type="text"
               className="form-control"
               id="searchValue"
               value={searchValue}
               placeholder="Search by title, author or content"
               size={40}
               onChange={handleSearchValueChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">Search</button>
    </form>
  );
};

export default InputSearch;
