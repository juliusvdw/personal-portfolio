import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SideMenu from "../components/SideMenu"
import ContentBody from "../components/ContentBody"
import MouseCircle from "../components/mouseCircle"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
  <Helmet>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
  </Helmet>
    <Seo title="Home" />
    <MouseCircle />
    <SideMenu />
    <ContentBody />
  </>
)

export default IndexPage
