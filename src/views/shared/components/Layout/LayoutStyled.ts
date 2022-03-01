import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

export const ContentContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;
interface Props {
  children : JSX.Element
}
export function Desktop({ children } : Props) {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
}
export function Tablet({ children } : Props) {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
}
export function Mobile({ children } : Props) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
}
