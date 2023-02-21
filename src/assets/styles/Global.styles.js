import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const ContainerStyle = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
`;
export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}
*::before,
*::after {
  box-sizing: inherit;
}
html {
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
img,
svg {
  display: block;
  height: auto;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Poppins", "Arial", sans-serif;
  background-color: #fff;
  font-weight: 400;
  overflow-x: hidden;
}

.category-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  color: #FFFFFF;
}
.category-link-active {
  background-color: #EABF9F;

}
`;

export const GlobalModal = createGlobalStyle`
.css-1t1j96h-MuiPaper-root-MuiDialog-paper {
max-height: calc(100% - 64px);
min-width: 1110px !important;
}
`

export const GlobalDeletModal = createGlobalStyle`
.css-1t1j96h-MuiPaper-root-MuiDialog-paper {
max-height: calc(100% - 64px);
min-width: 330px !important;
}
`

export const GlobalLocationModal = createGlobalStyle`
.css-1t1j96h-MuiPaper-root-MuiDialog-paper {
max-height: calc(100% - 64px);
min-width: 815px !important;
}
`