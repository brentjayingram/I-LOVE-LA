import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfiniteImages from "../components/InfiniteImages"

const Gallery = () => {
    return (
      <Layout>
        <SEO title="Gallery" />
        <h1 className="is-size-3">Images from Unsplash...</h1>
        <p style={{ marginBottom: "5%" }}>
          Scroll to see more images of the beautiful and eclectic city of Los Angeles!  🏢🏫
        </p>
        <InfiniteImages />
      </Layout>
    )
  }
  
  export default Gallery