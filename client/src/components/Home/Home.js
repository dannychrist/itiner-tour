import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <SectionOne>
          <Image 
            src="https://s3-us-west-1.amazonaws.com/static-spin-com/files/131018-screaming-females03-640x426.jpg"
            alt="tour-van"
          />
        </SectionOne>
        
        <SectionTwo>
          <FooterDiv>
            <Footer>dannyjameschrist@gmail.com</Footer>
          </FooterDiv>
        </SectionTwo>

        <MainSection>
          <MainSectionWrapper>
            <HeaderDiv>
              <Header>Itiner-tour</Header>
            </HeaderDiv>

            <ContentDiv>
              <Content>
                A practical tool to stay organized on the road.
              </Content>
            </ContentDiv>
          </MainSectionWrapper>
        </MainSection>

      </Wrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1.5fr;
  grid-template-rows: 2fr 3fr 3fr 2fr;
  height: 100vh;
`;

const SectionOne = styled.div`
  grid-area: 1 / 1 / 4 / 3;
  overflow: hidden;
`;

const SectionTwo = styled.div`
  grid-area: 4 / 1 / 5 / 3;
  background: #202020;
`;

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

const Footer = styled.h2`
  color: white;
  font-size: 15px;
  letter-spacing: 1px;
`;

const Image = styled.img`
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const MainSection = styled.div`
  grid-area: 1 / 3 / 5 / 4;
  background: #FFFADF;
  padding: 50px;
`;

const MainSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HeaderDiv = styled.div`
  border: solid black;
  margin: 30px;
  padding: 20px;
  box-shadow: 5px 10px #888888;
  border-radius: 10px;
  background: white;
`;

const Header = styled.h1`
  font-weight: bold;
  color: black;
  font-size: 50px;
  text-decoration: underline;
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
  padding: 30px;
  background: white;
  border-radius: 40px;;
`;

const Content = styled.h2`
  color: black;
  font-size: 30px;
`;

export default Home
