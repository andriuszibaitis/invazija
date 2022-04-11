import React, { useState } from "react"
import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Button,
  InteractiveIcon,
  Nudge,
  VisuallyHidden,
} from "./ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from "./header.css"
import BrandLogo from "./brand-logo"
import LoadingBar from "react-top-loading-bar"

import { Row, Col } from "react-bootstrap"

const data = {
  navItems: [
    {
      id: 0,
      navItemType: "Link",
      href: "/pasiulymai-verslui",
      text: "Pasiūlymai verslui",
    },
    {
      id: 1,
      navItemType: "Link",
      href: "/paslaugos",
      text: "Paslaugos",
      icon: "down",
    },
    {
      id: 2,
      navItemType: "Link",
      href: "/kontaktai/",
      text: "Kontaktai",
    },
    {
      id: 3,
      navItemType: "Link",
      href: "/apie-mus/",
      text: "Apie mus",
    },
  ],
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
  cta: {
    href: "#!",
    text: "Užsisakyti",
  },
}

export default function Header() {
  const { navItems, cta, subItems, subItems2, subItems3 } = data
  const [isOpen, setOpen] = React.useState(false)

  const [dropdown, setDropdown] = React.useState(false)

  const [progress, setProgress] = useState(0)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <>
      <LoadingBar
        color="#ff0000"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <header>
        <Container className={desktopHeaderNavWrapper}>
          <Flex variant="spaceBetween">
            <NavLink to="/">
              <VisuallyHidden>Švaros Invazija</VisuallyHidden>
              <BrandLogo />
            </NavLink>
            <nav>
              <FlexList gap={3}>
                {navItems &&
                  navItems.map((navItem) => (
                    <li key={navItem.id}>
                      <NavLink
                        onMouseEnter={
                          navItem.icon
                            ? () => setDropdown(true)
                            : () => setDropdown(false)
                        }
                        to={navItem.href}
                      >
                        {navItem.text}{" "}
                        <i
                          className={
                            navItem.icon
                              ? "fas fa-kiwi-bird"
                              : "fas fa-kiwi-bird"
                          }
                        ></i>
                      </NavLink>
                    </li>
                  ))}
              </FlexList>
            </nav>
            <div>{cta && <Button to={cta.href}>{cta.text}</Button>}</div>
          </Flex>
          <div
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            style={{
              transition: "ease-in-out 2s",
              display: dropdown ? "block" : "none",
            }}
          >
            <Row>
              {subItems &&
                subItems.map((item) => (
                  <Col lg={4}>
                    <NavLink
                      className={item.active}
                      onClick={() => setDropdown(false)}
                      to={item.href}
                    >
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
                    <NavLink onClick={() => setDropdown(false)} to={item.href}>
                      {item.title}
                    </NavLink>
                    <span className={item.pop}>{item.popText}</span>
                    <p className="menu_description">{item.description}</p>
                  </Col>
                ))}
            </Row>
            <Row>
              {subItems3 &&
                subItems3.map((item) => (
                  <Col lg={4}>
                    <NavLink onClick={() => setDropdown(false)} to={item.href}>
                      {item.title}
                    </NavLink>
                    <span className={item.pop}>{item.popText}</span>
                    <p className="menu_description">{item.description}</p>
                  </Col>
                ))}
            </Row>
          </div>
        </Container>
        <Container
          className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}
        >
          <Space size={2} />
          <Flex variant="spaceBetween">
            <span
              className={
                mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
              }
            >
              <NavLink to="/">
                <VisuallyHidden>Home</VisuallyHidden>
                <BrandLogo />
              </NavLink>
            </span>
            <Flex>
              <Space />
              <div>
                {cta && (
                  <Button
                    to={cta.href}
                    variant={isOpen ? "reversed" : "primary"}
                  >
                    {cta.text}
                  </Button>
                )}
              </div>
              <Nudge right={3}>
                <InteractiveIcon
                  title="Toggle menu"
                  onClick={() => setOpen(!isOpen)}
                  className={
                    mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
                  }
                >
                  {isOpen ? <X /> : <Menu />}
                </InteractiveIcon>
              </Nudge>
            </Flex>
          </Flex>
        </Container>
        {isOpen && (
          <div className={mobileNavOverlay}>
            <nav>
              <FlexList responsive variant="stretch">
                {navItems?.map((navItem) => (
                  <li key={navItem.id}>
                    <NavLink to={navItem.href} className={mobileNavLink}>
                      {navItem.text}
                    </NavLink>
                  </li>
                ))}
              </FlexList>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
