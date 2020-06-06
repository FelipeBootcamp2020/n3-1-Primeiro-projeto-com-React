import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/brand.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="vem tranquilo" />
      <Title> Explore repositórios no Github </Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/1197816?s=460&v=4"
            alt="Felipe Genuino"
          />
          <div>
            <strong>MyfidAcademy</strong>
            <p>Repositório da academia myfid</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/1197816?s=460&v=4"
            alt="Felipe Genuino"
          />
          <div>
            <strong>MyfidAcademy</strong>
            <p>Repositório da academia myfid</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/1197816?s=460&v=4"
            alt="Felipe Genuino"
          />
          <div>
            <strong>MyfidAcademy</strong>
            <p>Repositório da academia myfid</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/1197816?s=460&v=4"
            alt="Felipe Genuino"
          />
          <div>
            <strong>MyfidAcademy</strong>
            <p>Repositório da academia myfid</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
