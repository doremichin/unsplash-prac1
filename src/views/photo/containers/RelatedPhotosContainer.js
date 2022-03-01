import React from 'react';

import RelatedPhotos from '../components/RelatedPhotos';

function RelatedPhotosContainer({ related }) {
  return <RelatedPhotos data={related.results} />;
}

export default RelatedPhotosContainer;
