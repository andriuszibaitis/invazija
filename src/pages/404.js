import React, { useRef, useEffect, Component } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import GoogleMapReact from "google-map-react"
import { Container, Box, NavLink, Heading } from "../components/ui"
import { Row, Col, Form, Button } from "react-bootstrap"
import styled from "styled-components"
import Header from "../components/hero"
import Sponsers from "../components/sponsers"
import Klientai from "../components/klientai"

const AnyReactComponent = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }

  render() {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyCBJwD3ytWPKOZq059iuuAAUqz7iZ2RLcQ` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={20.955413}
            lng={30.337844}
            text="Mes randamės"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default function NotFound() {
  const myRef = useRef(null)

  useEffect(() => {
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    })
  })

  const FormStyle = {
    background: "#ff0000",
    borderRadius: 10,
    color: "#fff",
  }

  return (
    <>
      <GlobalStyle>
        <Layout title="Puslapis nerastas!">
          <Header />
          <Sponsers />
          <Box paddingY={5}>
            <Container width="narrow">
              <div ref={myRef} className="scroll">
                <Heading className="mt-5" as="h1">
                  Puslapis nerastas
                </Heading>
                <Row>
                  <Col md={12}>
                    <p>
                      Atsiprašome, tačiau toks puslapis „Švaros invazija“
                      neegzistuoja. Prašome pabandyti vėliau arba susisiekti su
                      administracija.
                    </p>
                    <Link to="/">Grįžti į pagrindinį</Link>
                  </Col>
                </Row>
              </div>
            </Container>
          </Box>
          <Klientai />
        </Layout>
      </GlobalStyle>
    </>
  )
}

const GlobalStyle = styled.div`
  .form-control {
    background: #e02424 !important;
    border: 0px !important;
    border-radius: 0px !important;
  }
  .form-control::placeholder {
    color: #fff;
    opacity: 1;
  }

  .form-control:-ms-input-placeholder {
    color: #fff;
  }

  .form-control::-ms-input-placeholder {
    color: #fff;
  }
  .btn-black {
    background: #000;
    border: 0px;
    border-radius: 0px;
    color: #fff;
    width: 100%;
  }
  .bg {
    background: #f2f2f2;
    padding: 20px;
  }
  .bg_02 {
    background: #e02424;
    width: auto;
    color: #fff;
    padding: 5px;
  }
  .bg_03 {
    background: #000;
    width: auto;
    color: #fff;
    padding: 5px;
  }
  .bg_03 a {
    text-decoration: none;
    color: white;
  }
  .scroll {
    padding-top: 100px;
  }
  @media only screen and (max-width: 768px) {
    .mobile {
      padding-top: 20px;
    }
    .bg_03 {
      font-size: 10px;
    }
    .bg_02 {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    .mobile {
      padding-top: 20px;
    }
    .bg_03 {
      font-size: 10px;
    }
    .bg_02 {
      font-size: 10px;
    }
    .scroll {
      position: relative;
      padding-top: 10px;
    }
  }
`
