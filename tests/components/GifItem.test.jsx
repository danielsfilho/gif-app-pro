import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Provas no <GifItem />', () => { 

  const title = 'Saitama';
  const url = 'https://one-punch.com/saitama.jpg';

  test('deve fazer match com o snapshot', () => { 
    
    const { container } = render( <GifItem title={ title } url={ url } /> );
    expect( container ).toMatchSnapshot();
  });

  test('deve mostrar a imagem com a URL e o ALT indicado', () => { 
    
    render( <GifItem title={ title } url={ url } /> );
    // screen.debug();
    // expect( screen.getByRole('img').src ).toBe( url );
    // expect( screen.getByRole('img').alt ).toBe( title );
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );

  });

  test('deve mostrar o titulo no componente', () => { 
    
    render( <GifItem title={ title } url={ url } /> );
    
    expect( screen.getByText( title ) ).toBeTruthy()

  }); 
});