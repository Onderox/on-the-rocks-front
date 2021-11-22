import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Tag, Typography } from 'antd';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title } = Typography;
const MOHITO_IMAGE_URL =
  'https://c.pxhere.com/photos/30/2a/beverage_citrus_close_up_cocktail_cold_cold_drink_cool_delicious-1554107.jpg!d';
const KEYWORDS = ['달콤', '새콤', '초록색', '라임', '민트', '설탕', '탄산수'];
const TAG_COLORS = [
  'red',
  'magenta',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
];
const SHARE = ['페', '카', '네', '트', 'URL'];
const CocktailDetails = props => {
  return (
    <Container>
      <img
        src={MOHITO_IMAGE_URL}
        alt="cocktail mohito"
        width="300"
        height="300"
      />
      <DetailsWrapper>
        <Title level={2}>피냐 콜라다</Title>
        <div>
          <Title level={5}>칵테일에 포함된 키워드 </Title>
          {KEYWORDS.map((word, i) => (
            <Tag id={i} color={TAG_COLORS[i % 9]}>
              {word}
            </Tag>
          ))}
        </div>
        <FeedbackButtons style={{ marginTop: '2rem' }}>
          <LikeOutlined />
          <DislikeOutlined />
        </FeedbackButtons>
        <Title level={5} style={{ marginTop: '2rem' }}>
          공유하기
        </Title>
        <ShareButtons>
          {SHARE.map((v, i) => (
            <Avatar key={i}>{v}</Avatar>
          ))}
        </ShareButtons>
      </DetailsWrapper>
    </Container>
  );
};

CocktailDetails.propTypes = {};

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
`;
const FeedbackButtons = styled.div`
  font-size: 2.4rem;
`;
const ShareButtons = styled.div`
  width: 100%;
  display: flex;
`;
const Container = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.color.lineGray};
`;
export default CocktailDetails;
