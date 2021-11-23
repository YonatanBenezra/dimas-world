import React from 'react'
import styled from 'styled-components'

const Content = styled.footer`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 0.85rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: ${(props) => props.theme.colors.bg};
`

const Footer = () => (
  <Content>
    <a href="https://www.instagram.com/world_of_my_mind/?hl=en" rel="noreferrer">
      Instagram
    </a>
    , design and pictures by Dmitry Pomazan &copy; {new Date().getFullYear()}
  </Content>
)

export default Footer
