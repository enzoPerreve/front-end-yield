import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 24px;
`

const Blurb = styled(Text)`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  background-image: url('/images/egg/banner-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 40px;
  padding-top: 40px;
  margin-bottom: 32px;
`
const Hero = ({tokenMode}) => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <Container>
        <Title>{
          tokenMode ?
            TranslateString(10002, 'Stake tokens to earn RHINO')
            :
          TranslateString(320, 'Stake LP tokens to earn RHINO')
        }</Title>
        <Blurb>{TranslateString(10000, 'Deposit Fee will be used to buyback $RHINO')}</Blurb>
      </Container>
    </StyledHero>
  )
}

export default Hero
