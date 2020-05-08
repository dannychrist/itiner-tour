import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from "../../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();
  const colors = ['#87CEEB', '#ffb6c1', '#9370DB'];

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <ImgWrapper>
        <Image src={user.picture} alt="Profile" />
      </ImgWrapper>

      <DetailsWrapper>
        <NameWrapper>
          <Name>{user.name}</Name>
        </NameWrapper>
      </DetailsWrapper>
    </Wrapper>

  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  height: 100vh;
  width: 100%;
  position: fixed;
`;

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333333;
  flex-direction: column;
  color: white;
  letter-spacing: 2px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFADF;
`;

const NameWrapper = styled.div`
  padding: 5px;
  margin: 5px;
`;

const EmailWrapper = styled.div`
  padding: 5px;
  margin: 5px;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 30%;
  
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const Email = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export default Profile;