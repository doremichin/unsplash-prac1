import React from 'react';
import { useDispatch } from 'react-redux';

import RelatedTags from '../components/RelatedTags';
import { Action } from '../../../redux/popup/slice';

function RelatedTagsContainer({ detail }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(Action.Creators.togglePopup(false));
  };
  return <RelatedTags tags={detail.tags} onClick={onClick} />;
}

export default RelatedTagsContainer;
