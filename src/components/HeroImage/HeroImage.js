import React from 'react';
import { QUERIES } from '../../constants';
import { styled } from 'styled-components';

function HeroImage() {
  return (
    <ImageWrapper>
      <MobileImage>
        <source
          type="image/webp"
          srcset="
      /assets/image-hero-mobile.webp 1x,
      /assets/image-hero-mobile@2x.webp 2x
    "
        />
        <source
          type="image/png"
          srcset="
      /assets/image-hero-mobile.png 1x,
      /assets/image-hero-mobile@2x.png 2x
    "
        />
        <FullWidthImg
          src="/assets/image-hero-mobile.png"
          alt="Eager student"
        />
      </MobileImage>
      <TabletImage>
        <source
          type="image/webp"
          srcset="
      /assets/image-hero-tablet.webp 1x,
      /assets/image-hero-tablet@2x.webp 2x
    "
        />
        <source
          type="image/png"
          srcset="
      /assets/image-hero-tablet.png 1x,
      /assets/image-hero-tablet@2x.png 2x
    "
        />
        <FullWidthImg
          src="/assets/image-hero-tablet.png"
          alt="Eager student"
        />
      </TabletImage>
      <DesktopImage>
        <source
          type="image/webp"
          srcset="
      /assets/image-hero-desktop.webp 1x,
      /assets/image-hero-desktop@2x.webp 2x
    "
        />
        <source
          type="image/png"
          srcset="
      /assets/image-hero-desktop.png 1x,
      /assets/image-hero-desktop@2x.png 2x
    "
        />
        <FullWidthImg
          src="/assets/image-hero-desktop.png"
          alt="Eager student"
        />
      </DesktopImage>
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  width: 100%;
`;

const FullWidthImg = styled.img`
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    width: 250%;
    margin-left: -80px;
    margin-top: clamp(-40vw, -1vw + 1rem, -30vw);
  }

  @media ${QUERIES.laptopAndUp} {
    width: 900px;
    margin-left: clamp(.1rem, 17vw - 11.5rem, 5rem);
    margin-top: clamp(-370px, -12vw + 4rem, -31vw);
  }
`;

const MobileImage = styled.picture`
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const TabletImage = styled.picture`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    max-width: 100%;
  }

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopImage = styled.picture`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

export default HeroImage;
