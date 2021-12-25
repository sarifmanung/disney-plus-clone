import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D8AEB7DE234898392BFD20E7D9B112B841E920AF9A3F54CCFB966722AFF3461/scale?width=1920&aspectRatio=1.78&format=jpeg" />
      </Background>
      <ImageTitle>
        <img src="https://www.icone-png.com/png/52/52022.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>

        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>COMING SOON Releases December 22, 2021</Subtitle>
      <Description>
        Return to a world of two realities: one, everyday life; the other, what
        lies behind it. To find out if his reality is a construct, to truly know
        himself, Mr. Anderson will have to choose to follow the white rabbit
        once more.
      </Description>
    </Container>
  );
}

export default Detail;
const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw - 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: white;
  text-transform: uppercase;
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;

  span {
    font-size: 26px;

    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
const Subtitle = styled.div`
  border-radius: 8px;
  /* background:rgba(0,0,0,0.1); */
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  border-radius: 8px;

  background: rgba(0, 0, 0, 0.1);
  line-height: 1.4;
  font-size: 20px;
  min-height: 20px;
  margin-top: 16px;
`;
