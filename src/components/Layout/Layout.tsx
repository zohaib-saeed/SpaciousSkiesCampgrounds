import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className=" w-full flex flex-col items-center justify-center">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
