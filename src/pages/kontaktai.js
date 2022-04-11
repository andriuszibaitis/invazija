import React, { useRef, useEffect, Component } from "react"
import Layout from "../components/layout"
import GoogleMapReact from "google-map-react"
import { Container, Box, NavLink, Heading } from "../components/ui"
import { Row, Col, Form, Button } from "react-bootstrap"
import styled from "styled-components"
import Header from "../components/hero"
import Sponsers from "../components/sponsers"
import Klientai from "../components/klientai"
import LoadingBar from "react-top-loading-bar"

export default function Kontaktai() {
  const myRef = useRef(null)
  const ref = useRef(null)

  useEffect(() => {
    ref.current.complete()
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    })
  })

  return (
    <>
      <GlobalStyle>
        <LoadingBar color="#f11946" ref={ref} />
        <Layout title="Kontaktai">
          <Header />
          <Sponsers />
          <Box paddingY={5}>
            <Container width="narrow">
              <div ref={myRef} className="scroll">
                <Heading className="mt-5" as="h1">
                  Kontaktai ir rekvizitai
                </Heading>
                <Row>
                  <Col md={6}>
                    <div className="bg">
                      <div className="pb-3">
                        <span className="bg_02">Įmonės kodas:</span>{" "}
                        <span className="bg_03">305931817</span>
                      </div>
                      <div className="pb-3">
                        <span className="bg_02"> PVM mokėtojo kodas:</span>{" "}
                        <span className="bg_03">305931817</span>
                      </div>
                      <div className="pb-3">
                        <span className="bg_02">Adresas:</span>{" "}
                        <span className="bg_03">
                          V. Nagevičiaus g. 3, LT-08237 Vilnius
                        </span>
                      </div>
                      <div className="pb-3">
                        <span className="bg_02">Mobilus telefonas:</span>{" "}
                        <span className="bg_03">
                          <a href="tel:+37067533059">+370 675 33 059</a>
                        </span>
                      </div>
                      <div className="pb-3">
                        <span className="bg_02">Buhalterijos telefonas:</span>{" "}
                        <span className="bg_03">
                          <a href="tel:+37068703914">+370 687 03 914</a>
                        </span>
                      </div>
                      <div className="pb-3">
                        <span className="bg_02">Bankas:</span>{" "}
                        <span className="bg_03">"Šiaulių Bankas" AB</span>
                      </div>
                      <div className="pb-3">
                        <span className="bg_02">Atsiskaitomoji sąskaita:</span>{" "}
                        <span className="bg_03">LT307180300047467553</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            <h3 className="mobile">
                              <span>Susisiekite su mumis</span>
                            </h3>
                            <div className="text-center">
                              <p className="menu_description">
                                Galite su mumis susisiekti užpildę šią
                                susisiekimo formą
                              </p>
                            </div>
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Įveskite savo el. pašto adresą"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-2"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <span>Palikite mums žinutę</span>
                          <p className="menu_description">
                            Parašykite mums savo klausimą ir mes jūms pateiksime
                            atsakymą
                          </p>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="black" type="submit">
                          Pateikti žinutę
                        </Button>
                      </Form>
                    </div>
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
