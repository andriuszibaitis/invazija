import { graphql } from "gatsby"
import { useLottie } from "lottie-react"
import * as React from "react"
import {
  Box,
  Space,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"

import { Button } from "react-bootstrap"
import styled from "styled-components"

import SvarosInvazija from "../animations/svarosinvazija.json"

const InvazijaAnimation = () => {
  const options = {
    animationData: SvarosInvazija,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options)

  return View
}

export default function Hero(props) {
  return (
    <GlobalStyles>
      <Section>
        <Space size={4} />
        <Container>
          <Flex gap={4} variant="responsive">
            <Box className="d-lg-none" width="half">
              <InvazijaAnimation />
            </Box>
            <Box width="half">
              <Heading as="h1">
                <Kicker>Švaros Invazija</Kicker>
                Leiskite švarai užkariauti
              </Heading>
              <Subhead as="h2">{props.subhead}</Subhead>
              <Text as="p">
                Teikiame plačias valymo ir teritorijų priežiūros paslaugos
                privatiems ir juridiniams asmenims. Galime pasiūlyti tiek
                gyvenamųjų, tiek gamybinių ar biuro paslaugų tvarkymo paslaugas.
                Taip pat pasirūpinsime teritorijų tvarkymų ir valymo darbais.
                Visa tai atlieka mūsų profesionalūs darbuotojai. Paslaugos
                teikiamos visos Lietuvos teritorijoje.
              </Text>
              <Button size="lg">Užsisakyti</Button>{" "}
              <b>
                <a href="">Sužinokite daugiau</a>
              </b>
            </Box>
            <Box className="d-none d-lg-block" width="half">
              <InvazijaAnimation />
            </Box>
          </Flex>
        </Container>
      </Section>
    </GlobalStyles>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
const GlobalStyles = styled.div`
  a {
    color: #8f8f8f;
    text-decoration: none;
  }
  a:hover {
    color: #e02424;
  }
  .btn-primary {
    color: #fff;
    margin: 10px;
    border: 0px;
    background: #e02424;
  }
  .btn-primary:hover {
    color: #fff;
    margin: 10px;
    border: 0px;
    background: #e02424;
  }
`
