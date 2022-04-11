import React from "react"
import { Container } from "../components/ui"
import { Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

function Sponsers() {
  return (
    <Container>
      <div>
        <div className="text-center">
          <h2>Mūsų partneriai</h2>
          <p>
            Mes turime partnerių su kuriais dirbame,{" "}
            <a href="">
              <b>tapti partneriu</b>
            </a>{" "}
            galite ir jūs.
          </p>
        </div>
        <div className="text-center mb-2">
          <Row>
            <Col>
              <StaticImage
                width={200}
                src="../sponsers/hopper.png"
                alt="Hopper"
              />
            </Col>
            <Col>
              <StaticImage width={70} src="../sponsers/2.avif" alt="7pack" />
            </Col>
            <Col>
              <StaticImage
                width={200}
                src="../sponsers/3.avif"
                alt="Grežiniai"
              />
            </Col>
            <Col>
              <StaticImage
                width={70}
                src="../sponsers/4.avif"
                alt="Luxlex law"
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default Sponsers
