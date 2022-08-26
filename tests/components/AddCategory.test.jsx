import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Testando o componente AddCategory', () => { 
  const inputValue = 'Saitama';

  test('deve mudar o valor do campo de texto', () => { 
    
    render( <AddCategory onNewCategory={ () => {} } /> );
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: inputValue } });

    expect( input.value ).toBe( 'Saitama' );
  });

  test('deve chamar o onNewCategory se o input tem um valor', () => { 
    
    const onNewCategory = jest.fn();
    
    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue } });
    fireEvent.submit( form );

    expect( input.value ).toBe( '' );

    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  });

  test('o onNewCategory não poderá ser chamado se o input estiver vazio', () => { 
    const onNewCategory = jest.fn();
    render( <AddCategory onNewCategory={ onNewCategory } /> );
    
    const form = screen.getByRole('form');
    fireEvent.submit( form );

    expect( onNewCategory ).toHaveBeenCalledTimes(0);
  });
});