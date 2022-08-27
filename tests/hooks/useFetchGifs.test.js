import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks';

describe('Testando o hook useFetchGifs', () => {

  test('deve retornar o estado inicial', () => {

    const { result } = renderHook( () => useFetchGifs('One Punch') );
    const { images, isLoading } = result.current;

    expect( images.length ).toBe( 0 );
    expect( isLoading ).toBeTruthy();
  });

  test('deve retornar um array de imagens e isLoading em false', async() => {

    const { result } = renderHook( () => useFetchGifs('One Punch') );

    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  }); 
});