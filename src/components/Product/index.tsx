import React from 'react';
import ProductAction from '../ProductAction'
import tshirtImage from '../../assets/tshirt.png'
import SellerInfo from '../SellerInfo'

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que você está esperando ou develvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);


const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe explicabo sapiente, molestias quos animi optio voluptates. Assumenda, eos obcaecati dolore ducimus vero, deleniti similique delectus fugit porro id esse laborum!
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae et vitae quisquam nam. Aliquid, nisi repellat neque eos, ab, esse soluta omnis voluptatem consequatur praesentium obcaecati minus beatae dicta nostrum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptas nulla quasi! Vel tenetur consequatur vero ea velit, esse dolorem corrupti, modi quo est, incidunt voluptate eligendi sit nam aliquam!
    </p>
  </Description>
);

export default Product;
