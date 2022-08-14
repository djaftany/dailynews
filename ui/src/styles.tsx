import styled from "styled-components";

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex: 1;
  left: 0;
  top: 0;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Header = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Emphasis = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  align-items: center;
`

export const Video = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  flex: 1;
  max-height: 200px;
  max-width: 100%;

  video {
    max-width: 100%;
    max-height: 100%;
  }
`
export const Footer = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #150e13;
  color: #ffffff;
  display: flex;
`
