import React from "react"
import { InputGroup, FormControl, Button } from "react-bootstrap"

function Search({ query, onChangeQuery, onClickSearch }) {
  return (
    <div className="bounce">
     <h1 className="topic" id="topic">เที่ยวไหนดี</h1>
      <InputGroup className="mb-3 ">
        <InputGroup.Prepend></InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          
          type="text"
          placeholder="ค้นหาสถานที่ท่องเที่ยว"
          value={query}
          onChange={onChangeQuery}
        />
      </InputGroup>
      <Button variant="secondary" size="lg" block onClick={onClickSearch}>
        ค้นหาสถานที่ท่องเที่ยว
      </Button>
    </div>
  );
}

export default Search;
