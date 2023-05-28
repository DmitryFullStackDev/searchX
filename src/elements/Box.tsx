import styled from 'styled-components'

export const Box: any = styled.div`
  &&& {
    all: revert;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    font-style: normal;
    line-height: ${({ lineHeight }: any) => lineHeight || '24px'};
    font-size: ${({ fontSize }: any) => fontSize || '14px'};
    font-weight: ${({ fontWeight }: any) => fontWeight || 'bold'};
    animation: ${({ animation }: any) => animation};
    transition: ${({ transition }: any) => transition};
    position: ${({ position }: any) => position || 'relative'};

    overflow-y: ${({ overflowY }: any) => overflowY};
    overflow-x: ${({ overflowX }: any) => overflowX};
    overflow: ${({ overflow }: any) => overflow};
    padding: ${({ padding }: any) => padding || 0};
    margin: ${({ margin }: any) => margin || 0};

    height: ${({ height }: any) => (height ? height : 'auto')};
    min-height: ${({ minHeight }: any) => minHeight};
    width: ${({ width }: any) => (width ? `${width}` : 'auto')};
    min-width: ${({ minWidth }: any) => minWidth || ''};
    max-height: ${({ maxHeight }: any) => maxHeight};

    display: ${({ display }: any) => display || 'flex'};
    flex-direction: ${({ direction }: any) => direction || 'row'};
    justify-content: ${({ justify }: any) => justify || 'flex-start'};
    align-items: ${({ align }: any) => align || 'initial'};
    align-self: ${({ alignSelf }: any) => alignSelf || 'initial'};
    flex-wrap: ${({ wrap }: any) => wrap || 'nowrap'};

    background: ${({ background }: any) => background};
    background-color: ${({ background }: any) => background};
    background-image: ${({ backgroundImg }: any) => backgroundImg && `url(${backgroundImg}`};
    background-clip: ${({ backgroundClip }: any) => backgroundClip};

    border: ${({ border }: any) => border || 'none'};
    border-radius: ${({ borderRadius }: any) => borderRadius || 'none'};
    border-bottom: ${({ borderBottom }: any) => borderBottom || ''};
    border-top: ${({ borderTop }: any) => borderTop || ''};
    border-right: ${({ borderRight }: any) => borderRight || ''};
    border-left: ${({ borderLeft }: any) => borderLeft || ''};
    border-color: ${({ borderColor }: any) => borderColor};
    border-top-color: ${({ borderTopColor }: any) => borderTopColor};
    outline: ${({ outline }: any) => outline};

    overflow: ${({ overflow }: any) => overflow};
    cursor: ${({ cursor }: any) => cursor};

    text-align: ${({ textAlign }: any) => textAlign || 'left'};
    opacity: ${({ opacity }: any) => opacity || '1'};

    color: ${({ color }: any) => color};
    position: ${({ relative, position }: any) => (relative && 'relative') || position};
    top: ${({ top }: any) => top};
    left: ${({ left }: any) => left};
    right: ${({ right }: any) => right};
    bottom: ${({ bottom }: any) => bottom};

    pointer-events: ${({ pointEvents }: any) => pointEvents};

    box-shadow: ${({ shadow }: any) => shadow};
    user-select: ${({ userSelect }: any) => userSelect};
    overflow-y: ${({ overflowY }: any) => overflowY};
    z-index: ${({ zIndex }: any) => zIndex};

    grid-template-columns: ${({ gridTemplateColumns }: any) => gridTemplateColumns};
    grid-row-gap: ${({ gridRowGap }: any) => gridRowGap};
    gap: ${({ gap }: any) => gap};

    &:hover {
      background: ${({ backgroundHover }: any) => backgroundHover};
    }

    &:before {
      ${({ beforeContent }: any) => beforeContent}
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(50px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`
