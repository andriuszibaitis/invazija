import React from "react"
import { Container } from "../components/ui"
import { Col, Row } from "react-bootstrap"
import CountUp from "react-countup"
import styled from "styled-components"
import { useLottie } from "lottie-react"
import SvarosInvazija from "../animations/svarosinvazija_02.json"

function Klientai() {
  const title = "Švaros invazija – Jūsų švaros garantas"
  const description =
    "Savo klientams siūlome aukščiausios kokybės valymo paslaugas. Esame orientuoti į geriausią rezultatą, todėl naudojame tik profesionalias priemones ir technologijas. Net jeigu valymo paslaugų jums prireikė staiga, visuomet esame pasiruošę padėti."
  const style = {
    height: 350,
  }
  const InvazijaAnimation = () => {
    const options = {
      animationData: SvarosInvazija,
      loop: true,
      style: style,
      height: "auto",
      autoplay: true,
    }

    const { View } = useLottie(options)

    return View
  }
  return (
    <GlobalStyle>
      <Container>
        <Row>
          <Col md={6}>
            <InvazijaAnimation />
          </Col>
          <Col md={6}>
            <h1>{title}</h1>
            <p>{description}</p>
            <Row>
              <Col>
                <div className="text-center">
                  <h1 className="calc">
                    <CountUp delay={0.2} end={256} />
                  </h1>
                  <p>Turimi klientai</p>
                </div>
              </Col>
              <Col>
                <div className="text-center">
                  <h1 className="calc">
                    <CountUp delay={0.2} end={256} />
                  </h1>
                  <p>Aptarnauti klientai</p>
                </div>
              </Col>
              <Col>
                <div className="text-center">
                  <h1 className="calc">
                    <CountUp delay={0.2} end={256} />
                  </h1>
                  <p>Nuvalytų langų</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </GlobalStyle>
  )
}

export default Klientai

const GlobalStyle = styled.div`
  .calc {
    color: #fff;
    border-radius: 20px;
    margin: 10px;
    background: #e02424;
  }
`
