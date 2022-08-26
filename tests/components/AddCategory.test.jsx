import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Testando o componente AddCategory', () => { 
  
  test('deve mudar o valor do campo de texto', () => { 
    
    render( <AddCategory onNewCategory={ () => {} } /> );
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: 'Saitama' } });

    expect( input.value ).toBe( 'Saitama' );
  });
});