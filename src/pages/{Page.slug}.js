import React, { useEffect, useRef } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import styled from "styled-components"
import LoadingBar from "react-top-loading-bar"
import Sponsers from "../components/sponsers"
import Klientai from "../components/klientai"
import Form from "../components/form"
import { Container, Box, Heading } from "../components/ui"

export default function Page(props) {
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

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const { page } = props.data

  return (
    <>
      <GlobalStyle>
        <LoadingBar color="#f11946" ref={ref} />
        <Layout {...page}>
          <Hero />
          <Sponsers />
          <Box paddingY={5}>
            <Container width="narrow">
              <div ref={myRef}>
                <div className="scroll">
                  <Heading className="mt-5" as="h1">
                    {page.title}
                  </Heading>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: page.html,
                }}
              />
              <Form />
            </Container>
          </Box>
          <Klientai />
        </Layout>
      </GlobalStyle>
    </>
  )
}

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`
const GlobalStyle = styled.div`
  .primary:active,
  .primary:hover,
  .primary:focus {
    background-color: orange !important;
  }
  .primary {
    background-color: #e02424;
    color: #fff;
    border: 0px;
    border-radius: 0px;
    padding: 20px;
  }
  .primary:active,
  .primary:hover,
  .primary:focus {
    background-color: #e03424 !important;
    color: #fff;
    border: 0px;
    border-radius: 0px;
    padding: 20px;
  }
  .scroll {
    padding-top: 100px;
  }
`
