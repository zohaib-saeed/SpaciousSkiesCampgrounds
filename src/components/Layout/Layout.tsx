import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

interface Props {
  children: React.ReactNode;
}

// Layout Component => Have header at top and footer at the bottom and will wrap the children on each page , can be handled when required conditionally

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
