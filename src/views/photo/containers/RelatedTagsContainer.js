import React from 'react';

import RelatedTags from '../components/RelatedTags';

const RelatedTagsContainer = ({ detail }) => <RelatedTags tags={detail.tags} />;

export default RelatedTagsContainer;
