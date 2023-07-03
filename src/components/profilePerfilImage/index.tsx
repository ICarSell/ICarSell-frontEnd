import React from "react";
import styled from "styled-components";
import { generateColor } from "../../services/utils";

type ProfilePictureProps = {
  name: string;
};

const StyledImagePerfil = styled.div<{ backgroundColor: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
  }
`;

export const ProfilePicture: React.FC<ProfilePictureProps> = ({ name }) => {
  const initials = name[0].toUpperCase();
  const backgroundColor = generateColor(name);

  return (
    <StyledImagePerfil backgroundColor={backgroundColor}>
      <p>{initials}</p>
    </StyledImagePerfil>
  );
};
