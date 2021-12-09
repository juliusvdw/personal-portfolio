import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SideMenu from "../components/SideMenu"
import ContentBody from "../components/ContentBody"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <SideMenu />
    <ContentBody />
  </>
)

export default IndexPage
