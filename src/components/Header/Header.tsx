import style from './Header.module.scss';

import Logo from './images/Logo.svg';

const items = [
  'Como fazer',
  'Ofertas',
  'Depoimentos',
  'Vídeos',
  'Meu carrinho',
];

export default function Header() {
  const renderItems = () => {
    return items.map((item: string, index: number) => (
      <>
        <a className={style.item} href="/">
          {item}
        </a>
        {index !== items.length - 1 && <div className={style.divider}>/</div>}
      </>
    ));
  };
  return (
    <div className={style.container}>
      <Logo />
      <div className={style.itemContainer}>{renderItems()}</div>
    </div>
  );
}
