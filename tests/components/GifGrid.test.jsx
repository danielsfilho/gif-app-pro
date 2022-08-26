import { render, screen } from "@testing-library/react";

import { GifGrid } from '../../src/components'

describe('Testes no componente GifGrid ', () => {

  const category = "One Punch";
  
  test('deve mostrar o loading inicialmente', () => { 
    
    render( <GifGrid category={ category } /> );
    expect( screen.getByText( category ) );
  });

  test('deve mostrar itens quando carregue as imagens useFetchGifs', () => { 
    second 
  })
});