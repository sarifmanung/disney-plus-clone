import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Movie() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Link to="/Detail">
          {" "}
          <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1019/1091019-v-86b6f6ecbf01" />
          </Wrap>
        </Link>
        <Link to="/Detail">
          <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/351/1090351-v-d5e020e85546" />
          </Wrap>
        </Link>
        <Link to="/Detail">
          <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3129/1063129-v-3af2c28814b5" />
          </Wrap>
        </Link>
        <Link to="/Detail">
          <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3181/1063181-v-6314df9285fd" />
          </Wrap>
        </Link>
      </Content>
      <h4>Disney+Originals</h4>
      <Content>
        <Wrap>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5703/1095703-v-991745cb8efd" />
        </Wrap>
        <Wrap>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3319/1083319-v-917cb2f16fc8" />
        </Wrap>
        <Wrap>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5887/1085887-v-ff820302bf78" />
        </Wrap>
        <Wrap>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/351/1090351-v-d5e020e85546" />
        </Wrap>
      </Content>
      <h4>Spy Collection</h4>
      <Content>
        <Wrap>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3409/943409-v" />
        </Wrap>
        <Wrap>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/3237/943237-v" />
        </Wrap>
        <Wrap>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6229/1016229-v-de414aca9d14" />
        </Wrap>
        <Wrap>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/819/940819-v" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movie;
const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.08);
  }
`;
