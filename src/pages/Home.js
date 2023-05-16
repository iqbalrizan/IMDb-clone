import React from 'react'
import "./Home.scss"
import { Col, Container, Row } from 'react-bootstrap'
import TopRated from '../components/TopRated'
import MoreWatch from '../components/MoreWatch'
import Popular from '../components/Popular'
import Carrousel from '../components/Carrousel'

const Home = () => {
  return (
    <div className='home'>
        <Container fluid className='container'>
          <Row>
            <Col xl={8} lg={8} md={8} sm={12} xs={12} className='col1'>
              <Carrousel />
            </Col>
            <Col xl={4} lg={4} md={4} sm={12} xs={12} className='col2'>
              <TopRated />
            </Col>
          </Row>
          <MoreWatch />
          <Popular />
        </Container>
        </div>

  )
}

export default Home