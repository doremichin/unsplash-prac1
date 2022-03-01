import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const useFilter = () => {
  const { query } = useParams<{query : string}>();
  const history = useHistory();
  const [orientationToggle, setOrientationToggle] = useState(false);
  const [colorToggle, setColorToggle] = useState(false);
  const [sortToggle, setSortToggle] = useState(false);

  const clickOrientation = () => {
    setOrientationToggle((p) => !p);
    setColorToggle(false);
    setSortToggle(false);
  };
  const clickColor = () => {
    setColorToggle((p) => !p);
    setOrientationToggle(false);
    setSortToggle(false);
  };
  const clickSort = () => {
    setSortToggle((p) => !p);
    setOrientationToggle(false);
    setColorToggle(false);
  };
  const clickClear = () => {
    setOrientationToggle(false);
    setColorToggle(false);
    setSortToggle(false);
    history.push(`/search/photos/${query}`);
  };
  const clickOut = () => {
    setOrientationToggle(false);
    setColorToggle(false);
    setSortToggle(false);
  };

  return {
    clickOrientation,
    clickColor,
    clickSort,
    clickClear,
    clickOut,
    orientationToggle,
    colorToggle,
    sortToggle,
  };
};
