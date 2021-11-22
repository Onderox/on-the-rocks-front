import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Card } from 'antd';
import CocktailDetails from '../components/CocktailDetails';
import Layout from '../components/Layout';

const OTHER_COCKTAILS = ['모힛또', '모힐또', '모힉도', '모리도', '모힠또'];
const gridStyle = {
  width: '33.333%',
  textAlign: 'center',
};

const DetailPage = props => {
  return (
    <Layout>
      <Container>
        <CocktailDetails />
        <CardStyled title="선택한 키워드를 포함한 다른 칵테일">
          {OTHER_COCKTAILS.map((cocktail, i) => (
            <Link to={i}>
              <Card.Grid style={gridStyle} id={i}>
                {cocktail}
              </Card.Grid>
            </Link>
          ))}
        </CardStyled>
      </Container>
    </Layout>
  );
};

DetailPage.propTypes = {};
const CardStyled = styled(Card)`
  margin-top: 3rem;
  .ant-card-body {
    padding: 0;
  }
`;

const Container = styled.div`
  width: 86rem;
  display: flex;
  flex-direction: column;
`;

export default DetailPage;
