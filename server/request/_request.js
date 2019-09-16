const sanityClient = require( '@sanity/client' );

const { apiProjectId, apiDataset, apiToken } = require( '../config' );

module.exports = sanityClient( {
  projectId: apiProjectId,
  dataset: apiDataset,
  token: apiToken,
  useCdn: false, // `false` if you want to ensure fresh data
} )
