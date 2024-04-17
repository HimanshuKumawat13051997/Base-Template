import React, { useEffect, useRef } from 'react';
import { TestimonialCard } from './TestimonialCard';
import styled, { keyframes, css } from 'styled-components';

const Carousel = ({ props }) => {
    return (
        <AppContainer>
            <Wrapper>
                <Marquee>
                    <MarqueeGroup>
                        {props.map((el, index) => (
                            <TestimonialCard key={index} data={el} />
                        ))}
                    </MarqueeGroup>
                    <MarqueeGroup>
                        {props.map((el, index) => (
                            <TestimonialCard key={index} data={el} />
                        ))}
                    </MarqueeGroup>
                </Marquee>
                <Marquee>
                    <MarqueeGroup2>
                        {props.map((el, index) => (
                            <TestimonialCard key={index} data={el} />
                        ))}
                    </MarqueeGroup2>
                    <MarqueeGroup2>
                        {props.map((el, index) => (
                            <TestimonialCard key={index} data={el} />
                        ))}
                    </MarqueeGroup2>
                </Marquee>
            </Wrapper>
        </AppContainer>
    );
};

export default Carousel;

const AppContainer = styled.div`
    color: #000000;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Marquee = styled.div`
    display: flex;
    overflow: hidden;
    user-select: none;
    width: 1400px;
    mask-image: linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0));
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 50px;
    animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
    ${common}
    margin-bottom: 20px;
    margin-right: 50px;
`;
const MarqueeGroup2 = styled.div`
    ${common}
    animation-direction: reverse;
    animation-delay: -3s;
    margin-left: 50px;
`;
