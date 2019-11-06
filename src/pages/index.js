import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bulma/css/bulma.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="has-text-centered" style={{ marginTop: "20%" }}>
      <h1 className="is-size-2">Do you love L.A. ?</h1>
      <p className="is-size-5" style={{ marginTop: "2%" }}>
        I do! Los Angeles is one of the most beatiful and eclectic cities in the U.S. Enter to check out some of the views of it.
      </p>
      <button className="button is-dark is-large" style={{ marginTop: "10%" }}>
        <Link to="/gallery/" className="has-text-white">
          Open Sesame! 🔥
        </Link>
      </button>
    </div>
  </Layout>
)

export default IndexPage