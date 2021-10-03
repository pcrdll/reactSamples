import React from 'react';
import ComponentWithProps from './ComponentWithProps';

const MyComponent = () => {
    return (
        <>
          <h1>MyComponent Header</h1>
          <ComponentWithProps 
          content="Content from props" 
          number={10} 
          />
        </>
    );
};


export default MyComponent;
