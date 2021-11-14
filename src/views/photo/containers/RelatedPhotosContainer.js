import React from 'react';

import RelatedPhotos from '../components/RelatedPhotos';

const RelatedPhotosContainer = ({ related }) => <RelatedPhotos data={related.results} />;

export default RelatedPhotosContainer;
