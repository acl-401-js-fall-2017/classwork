import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
`;

const Span = styled.span`
  display: inline-block;
  width: 100px;
`;

function AddImage({ addImage }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      const { elements } = e.target;
      addImage({ 
        title: elements.title.value,
        description: elements.description.value,
        url: elements.url.value,
      });
    }}>
      <Label>
        <Span>title:</Span>
        <input required name="title"/>
      </Label>
      <Label>
        <Span>description:</Span>
        <input name="description"/>
      </Label>
      <Label>
        <Span>url:</Span>
        <input required name="url"/>
      </Label>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddImage;