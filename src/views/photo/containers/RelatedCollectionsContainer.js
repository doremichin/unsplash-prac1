import React from 'react';

import RelatedCollections from '../components/RelatedCollections';

function RelatedCollectionsContainer({ detail }) {
  return <RelatedCollections collection={detail.related_collections.results} />;
}

export default RelatedCollectionsContainer;
