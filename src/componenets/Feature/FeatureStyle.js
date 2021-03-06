import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const FeatureContainer = styled.div`
  width: 300px;
  transition: all 0.3s ease-in-out;

  &:hover {
    svg {
      color: ${colors.secondary};
    }

    span {
      background-color: ${colors.primary};
    }
  }

  @media (${breakpoints.tabletMedium}) {
    width: 200px;
  }

  @media (${breakpoints.tablet}) {
    width: 230px;
  }
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  border-radius: 50%;
  background-color: ${colors.secondary};
  margin-bottom: 16px;
  width: 32px;
  height: 32px;
  transition: all 0.3s ease-in-out;

  @media (${breakpoints.desktop}) {
    margin-bottom: 24px;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 12px;
  color: ${colors.textPrimary};

  @media (${breakpoints.desktop}) {
    font-size: 2.4rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.6rem;
  color: ${colors.textSecondary};
  line-height: 1.6;

  @media (${breakpoints.tabletMedium}) {
    font-size: 1.4rem;
  }

  @media (${breakpoints.tablet}) {
    font-size: 1.6rem;
  }
`;
