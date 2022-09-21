import type { NextPage } from 'next';

import Header from '@components/Header/Header';
import Newsletter from '@components/Newsletter/Newsletter';

import style from './Home/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <Header />
      <Newsletter />
    </div>
  );
};

export default Home;
