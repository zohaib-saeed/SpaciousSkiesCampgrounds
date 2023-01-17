import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default Container;
