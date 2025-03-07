import { HomeContainer } from './style';
import { FormHome } from './FormHome';
import { Header } from './Header';
import { useState } from 'react';

export function Home() {
  return (
    <HomeContainer>
      <div className='main'>
        <div className='container'>
          <Header />
          <div className='content'>
            <FormHome />
          </div>
        </div>
      </div>
    </HomeContainer>
  );
}