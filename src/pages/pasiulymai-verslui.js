import React, { useRef, useEffect } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container, Box, Heading } from "../components/ui"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Header from "../components/hero"
import Sponsers from "../components/sponsers"
import Klientai from "../components/klientai"
import LoadingBar from "react-top-loading-bar"

export default function PasiulymaiVerslui() {
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
        <Layout title="Pasiūlymai verslui">
          <Header />
          <Sponsers />
          <Box paddingY={5}>
            <Container width="narrow">
              <div ref={myRef} className="scroll">
                <Heading className="mt-5" as="h1">
                  Pasiūlymai verslui
                </Heading>
                <Row>
                  <Col md={12}>
                    <p>
                      Siekdami pasiūlyti savo klientams kuo lankstesnius
                      paslaugų paketus, atsižvelgiame ir į juridinių asmenų
                      poreikius. Verslo klientams siūlome sudaryti švaros
                      paslaugų teikimo sutartį, kuri leistų pasinaudoti
                      patraukliomis privilegijomis:
                    </p>
                    <p>
                      • Taikoma tik speciali, juridiniams asmenims pritaikyta
                      kainodara, leidžianti taupyti įmonės kaštus.
                    </p>
                    <p>
                      • Galimybė išrašyti sąskaitas-faktūras ne už kiekvieną
                      paslaugą, bet ir už mėnesio eigoje suteiktas paslaugas.
                    </p>
                    <p>
                      Dėl partnerystės prašome{" "}
                      <Link className="link" to="/kontaktai">
                        susisiekti su mumis
                      </Link>
                      .
                    </p>
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
  .link {
    color: #000;
  }
  .link:hover {
    color: #e02424;
  }
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
