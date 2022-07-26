/* eslint-disable @next/next/no-img-element */
import { Content, SectionStyle, Title } from './styles'
import type { ISectionProps } from './types'

import Button from 'components/atoms/Button'

const Section = ({
  buttonText,
  content,
  image,
  mobileImage,
  title
}: ISectionProps) => (
  <SectionStyle>
    <img className='mobile-image' alt='' src={mobileImage} />

    <img className='image' alt='' src={image} />

    <article>
      <Title>{title}</Title>

      <Content>{content}</Content>

      <Button>{buttonText}</Button>
    </article>
  </SectionStyle>
)

export default Section
