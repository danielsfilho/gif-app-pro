import { render, screen } from "@testing-library/react";

import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Testes no componente GifGrid ', () => {

  const category = "One Punch";
  
  test('deve mostrar o loading inicialmente', () => { 
    
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render( <GifGrid category={ category } /> );
    expect( screen.getByText( category ) );
  });

  test('deve mostrar itens quando carregue as imagens useFetchGifs', () => { 
    
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render( <GifGrid category={ category } /> );
    expect( screen.getAllByRole('img').length ).toBe(2);
  });
});