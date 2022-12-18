import styled from "styled-components";

interface IStyledProps {
  fontWeight?: string | number;
  fontSize?: string;
  textCenter?: boolean;
  color?: string;
  lineHeight?: string;
}

export const HeadingOne = styled.h1`
  font-weight: 700;
  font-size: var(--font-size-1);
  color: ${({ color }) => (color ? `var(--${color})` : "var(--text-color)")};
`;

export const HeadingTwo = styled.h2`
  font-weight: 700;
  font-size: var(--font-size-2);
  color: ${({ color }) => (color ? `var(--${color})` : "var(--text-color)")};
`;

export const HeadingThree = styled.h3`
  font-weight: 700;
  font-size: var(--font-size-3);
  color: ${({ color }) => (color ? `var(--${color})` : "var(--text-color)")};
`;

export const HeadingFour = styled.h4`
  font-weight: 700;
  font-size: var(--font-size-5);
  color: ${({ color }) => (color ? `var(--${color})` : "var(--text-color)")};
`;

export const Paragraph = styled.p<IStyledProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};

  font-size: ${({ fontSize }) =>
    fontSize ? `var(--font-size-${fontSize})` : "var(--font-size-4)"};

  color: ${({ color }) => (color ? `var(--${color})` : "var(--text-color)")};

  line-height: 200%;
`;

export const Span = styled.span<IStyledProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};

  font-size: ${({ fontSize }) =>
    fontSize ? `var(--font-size-${fontSize})` : "var(--font-size-4)"};

  color: ${({ color }) => (color ? `var(--${color})` : "var(--text-color)")};

  line-height: 200%;
`;
