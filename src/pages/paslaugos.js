import React, { useRef, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Box, NavLink, Heading } from "../components/ui"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Header from "../components/hero"
import Sponsers from "../components/sponsers"
import Klientai from "../components/klientai"
import LoadingBar from "react-top-loading-bar"

export default function Paslaugos() {
  const myRef = useRef(null)
  const ref = useRef(null)

  const data = {
    subItems: [
      {
        id: 0,
        title: "Langų valymas",
        description:
          "Atliekame nepriekaištingą langų valymą biuruose, komercinėse patalpose ar gyvenamosiose erdvėse. Tinkama langų priežiūra – tai Jūsų įmonės įvaizdžio dalis.",
        href: "/langu-valymas",
        pop: "popular",
        popText: "Populiariausia",
      },
      {
        id: 2,
        title: "Daugiabučių namų priežiūra",
        description:
          "Pamirškite apie laiptinių valymą ir plovimą. Valymu, šiukšlių išnešimu ir visais kitais daugiabučių namų priežiūros darbais pasirūpinsime mes.",
        href: "/daugiabuciu-namu-prieziura",
        pop: "popular",
        popText: "Populiariausia",
      },
      {
        id: 1,
        title: "Kiemo teritorijos priežiūra",
        description:
          "Galime užtikrinti, kad Jūsų kiemas bus tinkamai prižiūrimas. Pasirūpinsime vejos pjovimu, lapų surinkimu ir visa kita reikalinga teritorijos priežiūra.",
        href: "/kiemo-teritorijos-prieziura",
      },
    ],
    subItems2: [
      {
        id: 3,
        title: "Gamybinių patalpų valymas ir priežiūra",
        description:
          "Šiems darbams atlikti reikalingos ne tik žinios, bet ir tokiam valymui pritaikytos priemonės. Leiskite tuo profesionaliai pasirūpinti mums.",
        href: "/gamybiniu-patalpu-valymas",
      },
      {
        id: 4,
        title: "Sandėlių valymas ir priežiūra",
        description:
          "Užtikrinsime tinkamą sandėlių priežiūrą ir švarą, kad sandėliavimas atitiktų visus higienos reikalavimus.",
        href: "/sandeliu-valymas",
        pop: "new",
        popText: "Nauja paslauga",
      },
      {
        id: 5,
        title: "Biurų valymas ir priežiūra",
        description:
          "Pasirūpinsime Jūsų biuro švara, reikalingų higienos priemonių papildymu ir kitais priežiūros darbais. Mūsų valytojai darbus atliks prisitaikydami prie Jūsų įmonės darbo laiko.",
        href: "/biuru-valymas",
      },
    ],
    subItems3: [
      {
        id: 6,
        title: "Automobilių parkingų valymas",
        description:
          "Pasirūpinsime reguliaria stovėjimo aikštelių priežiūra ir nuvalysime sniegą, surinksime lapus ar šiukšles bei pasirūpinsime kitais reikalingais priežiūros darbais.",
        href: "/parkingu-valymas",
        active: "active",
      },
      {
        id: 7,
        title: "Dezinfekcija",
        description:
          "Atliekame patalpų ir paviršių dezinfekciją nuo COVID-19 ir ne tik greitai bei nesukeliant klientui papildomų nepatogumų.",
        href: "/dezinfekcija",
      },
      {
        id: 8,
        title: "Kenkėjų kontrolė",
        description:
          "Pasirūpinsime kenkėjų išnaikinimu efektyviai ir greitai laikantis visų tokiems darbams numatytų saugos reikalavimų.",
        href: "/kenkeju-kontrole",
      },
    ],
  }

  useEffect(() => {
    ref.current.complete()
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    })
  })

  const { subItems, subItems2, subItems3 } = data
  return (
    <>
      <GlobalStyle>
        <LoadingBar color="#f11946" ref={ref} />
        <Layout title="Paslaugos">
          <Header />
          <Sponsers />
          <Box paddingY={5}>
            <Container width="narrow">
              <div ref={myRef} className="scroll">
                <Heading className="mt-5" as="h1">
                  Paslaugos
                </Heading>
                <Row>
                  {subItems &&
                    subItems.map((item) => (
                      <Col lg={4}>
                        <NavLink className={item.active} to={item.href}>
                          {item.title}
                        </NavLink>
                        <span className={item.pop}>{item.popText}</span>
                        <p className="menu_description">{item.description}</p>
                      </Col>
                    ))}
                </Row>
                <Row>
                  {subItems2 &&
                    subItems2.map((item) => (
                      <Col lg={4}>
                        <NavLink to={item.href}>{item.title}</NavLink>
                        <span className={item.pop}>{item.popText}</span>
                        <p className="menu_description">{item.description}</p>
                      </Col>
                    ))}
                </Row>
                <Row>
                  {subItems3 &&
                    subItems3.map((item) => (
                      <Col lg={4}>
                        <NavLink to={item.href}>{item.title}</NavLink>
                        <span className={item.pop}>{item.popText}</span>
                        <p className="menu_description">{item.description}</p>
                      </Col>
                    ))}
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
  .scroll {
    padding-top: 100px;
  }
`
