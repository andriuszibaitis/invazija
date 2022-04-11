import * as React from "react"
import { Helmet } from "react-helmet"

export default function Head({ title, description, image }) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en-us",
      }}
    >
      <meta charSet="utf-8" />
      <title>Švaros Invazija &lsaquo; {title}</title>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <script
        src="https://your-site-or-cdn.com/fontawesome/v6.1.1/js/all.js"
        data-auto-replace-svg
      ></script>

      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.url} />}
    </Helmet>
  )
}
