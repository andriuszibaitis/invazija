import React, { useRef, useEffect, Component } from "react"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import { Row, Col } from "react-bootstrap"
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
        <Layout title="Apie mus">
          <Header />
          <Sponsers />
          <Box paddingY={5}>
            <Container width="narrow">
              <div ref={myRef} className="scroll">
                <Heading className="mt-5" as="h1">
                  Apie mus
                </Heading>
                <Row>
                  <Col md={12}>
                    <p>
                      „Švaros invazija“ - profesionalias vidaus bei lauko valymo
                      ir teritorijų priežiūros paslaugas teikianti įmonė,
                      subūrusi profesionalų komandą. Atliekame kasdienio valymo
                      darbus bei galime pasirūpinti specializuotomis užduotimis,
                      tokioms kaip dezinfekcija.
                    </p>
                    <p>
                      Savo klientams siūlome aukščiausios kokybės valymo
                      paslaugas. Esame orientuoti į geriausią rezultatą, todėl
                      naudojame tik profesionalias priemones ir technologijas.
                      Net jeigu valymo paslaugų jums prireikė staiga, visuomet
                      esame pasiruošę padėti.
                    </p>
                    <p>
                      Mums svarbu, kad darbai būtų atlikti laiku ir tinkamai,
                      todėl mūsų darbe svarbu ne tik švara, bet ir profesionalus
                      darbo atlikimas. Tam skiriame ypatingą dėmesį, todėl
                      reguliariai darbuotojams organizuojame mokymus ir
                      kvalifikacijos kėlimo tikrinimus. Kad klientai galėtų
                      džiaugtis švariomis patalpomis, užtikriname kokybės
                      kontrolę.
                    </p>
                    <p>
                      <b>MISIJA</b> – teikti profesionalias patalpų valymo ir
                      aplinkos tvarkymo paslaugas verslui bei gyventojams visoje
                      Lietuvoje.
                    </p>
                    <p>
                      <b>VIZIJA</b> – tapti lyderiaujančia švaros įmone
                      Lietuvoje, teikiančia plataus profilio valymo paslaugas
                      privačiam ir viešajam sektoriui.
                    </p>
                    <p>
                      <b>TIKSLAI</b> – norėdami pasiekti savo viziją, keliame
                      sau tikslus, tarp kurių ir daug dėmesio skirti nuolatiniam
                      paslaugų tobulinimui. Todėl esame lankstūs, atsižvelgiame
                      į kiekvieno kliento poreikius. Stengdamiesi pasiūlyti kuo
                      platesnį paslaugų spektrą, atliekame ir valymą
                      ekologiškomis priemonėmis.
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
