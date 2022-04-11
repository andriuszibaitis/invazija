import * as React from "react"
import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import { Container } from "../components/ui"

import Sponsers from "../components/sponsers"
import Klientai from "../components/klientai"

import Hero from "../components/hero"

export default function Homepage() {
  return (
    <GlobalStyle>
      <Layout title="Pagrindinis puslapis">
        <Hero />
        <Sponsers />
        <Klientai />
      </Layout>
    </GlobalStyle>
  )
}

const GlobalStyle = styled.div`
  .calc {
    color: #fff;
    border-radius: 20px;
    margin: 10px;
    background: #e02424;
  }
`
