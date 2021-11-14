import React from 'react';

import RelatedCollections from '../components/RelatedCollections';

const RelatedCollectionsContainer = ({ detail }) => <RelatedCollections collection={detail.related_collections.results} />;

export default RelatedCollectionsContainer;
