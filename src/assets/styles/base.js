import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;
  }
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#root {
    height: 100%;
  }
`;
