import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../Layout';
import tipStyles from '../styles/tip.module.scss';

export default function Tip({ data, pageContext }) {
  const tip = data.mdx;
  return (
    <Layout>
      <Helmet>
        <title>{tip.frontmatter.title}</title>
      </Helmet>
      <div className={tipStyles.tip}>
        <h2>{tip.frontmatter.title}</h2>
        <MDXRenderer>{tip.body}</MDXRenderer>

        {pageContext.prev && (
          <Link bg="#fff" direction="right" to={`/tip/${pageContext.prev}`}>
            ← Prev Tip
          </Link>
        )}
        {pageContext.next && (
          <Link bg="#fff" direction="left" to={`/tip/${pageContext.next}`}>
            Next Tip →
          </Link>
        )}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        slug
        title
      }
    }
  }
`;
