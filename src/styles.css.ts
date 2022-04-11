import { globalStyle, globalKeyframes } from "@vanilla-extract/css"
import { theme } from "./theme.css"

globalStyle("body", {
  margin: 0,
  fontFamily: theme.fonts.text,
  color: theme.colors.text,
  backgroundColor: theme.colors.background,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
})

globalStyle(".menu_description", {
  fontFamily: theme.fonts.poppins,
  color: theme.colors.primary_p,
  fontSize: 11,
})

globalStyle(".activee", {
  color: theme.colors.background,
})

globalStyle(".popular", {
  fontFamily: theme.fonts.poppins,
  color: theme.colors.white,
  fontSize: 11,
  padding: 2,
  marginLeft: 10,
  backgroundColor: theme.colors.primary,
})

globalStyle(".accept", {
  fontFamily: theme.fonts.poppins,
  color: theme.colors.white,
  fontSize: 11,
  border: 0,
  padding: 10,
  marginLeft: 10,
  backgroundColor: theme.colors.primary_p,
})

globalStyle(".back", {
  fontFamily: theme.fonts.poppins,
  color: theme.colors.white,
  fontSize: 11,
  border: 0,
  padding: 10,
  marginLeft: 10,
  backgroundColor: theme.colors.primary_p,
})

globalStyle(".new", {
  fontFamily: theme.fonts.poppins,
  color: theme.colors.white,
  fontSize: 11,
  padding: 2,
  marginLeft: 10,
  backgroundColor: theme.colors.black,
})

globalStyle("*", {
  boxSizing: "border-box",
})

globalKeyframes("zoomInUp", {
  "0%": {
    transform: "scale(0.95) translateY(10px) translateX(-50%)",
    visibility: "hidden",
    opacity: 0,
  },
  "100%": {
    opacity: 1,
    transform: "scale(1), translateY(0) translateX(-50%)",
    visibility: "visible",
  },
})

globalKeyframes("zoomOutDown", {
  "0%": {
    transform: "scale(1) translateY(0) translateX(-50%)",
    opacity: 1,
  },
  "100%": {
    opacity: 0,
    transform: "scale(0.95) translateY(10px) translateX(-50%)",
    visibility: "hidden",
  },
})

globalKeyframes("fadeIn", {
  "0%": {
    visibility: "hidden",
    opacity: 0,
  },
  "100%": {
    opacity: 1,
    visibility: "visible",
  },
})

globalKeyframes("fadeOut", {
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
    visibility: "hidden",
  },
})
