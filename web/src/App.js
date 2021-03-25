import './App.css'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Image } from "react-bootstrap"
import Search from './component/Search'
import sorry from './picture/sorry.jpg'

function App() {
  const [data, setData] = useState({ trips: [] })
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('')

  const upQuery = event => setQuery(event.target.value)
  const upSearch = () => setSearch(query)
  const onClickTag = event => setSearch(event.target.value)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:9000/trips/?keyword=${search}`,
      );
      setData({
        trips: result.data
      });
    };
    fetchData();
  }, [search]);

  return (
    <Container className="contain">
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <Search query={query} onChangeQuery={upQuery} onClickSearch={upSearch}></Search>
          <br />
          {
            data.trips.length > 0 &&
            data.trips.map(trip => {
              let tag = []
              for (let i = 0; i < Object.keys(trip.tags).length; i++) {
                tag.push(
                  <button key={i.toString()} onClick={(event) => { upQuery(event); onClickTag(event) }} value={trip.tags[i]} className="text tags">
                    {trip.tags[i] + "  "}
                  </button>)
              }
              return (
                <Row className="rowheight bounce">
                  <Col lg={4}>
                    <Image src={trip.photos[0]} rounded className="picture" />
                  </Col>
                  <Col lg={8} >
                    <h3><a className="topic title" href={trip.url}>{trip.title}</a></h3>
                    <h6 className="description">{trip.description} <a href={trip.url} className="readmore">  อ่านต่อ...</a> </h6>
                    <h6> <span className="text">หมวดหมู่ : </span> <a href='#title'> {tag} </a> </h6>
                    <Image src={trip.photos[1]} roundedCircle className="smallpicture" />
                    <Image src={trip.photos[2]} roundedCircle className="smallpicture" />
                    <Image src={trip.photos[3]} roundedCircle className="smallpicture" />
                    <br /> <br /> <hr />
                  </Col>
                </Row>
              )
            })
          }
          {
            data.trips.length < 1 &&
            <div>
              <Image src={sorry} alt="sorypicture" className="sorrypicture" />
              <h3 className="textnotfound">ไม่เจอสถานที่ท่องเที่ยวที่ค้นหา !! <br />ลองหาสถานที่อื่นดูสิ</h3>
            </div>
          }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
