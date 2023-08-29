/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `nps`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Explore o Futuro da Experiência do Cliente: Sua Opinião é Fundamental! Participe da Nossa Pesquisa de Satisfação Exclusiva para Clientes e Ajude-nos a Aperfeiçoar Ainda Mais Nossos Serviços. Sua Voz Faz a Diferença!`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-use-query-params",
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-web-font-loader`,
    options: {
      google: {
        families: ['Mulish:300,400,500,600,700'],
      },
    },
  },]
};