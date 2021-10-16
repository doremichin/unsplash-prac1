import React, { useState } from 'react';
import styled from 'styled-components';

import { IconSearch } from '../../../../icons';
import { DefaultButton } from '../Button/Button.Styled';

const SearchBox = ({
  value, onSubmit, onChange, shape,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <Container className={shape}>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <IconSearch />
        </Button>
        <Label>
          <Input
            type="text"
            onChange={onChange}
            value={value}
            placeholder="Search Free..."
          />
        </Label>
      </Form>
    </Container>
  );
};

const Container = styled.div`
    
`;
const Form = styled.form`
  display: flex;
  width: 100%;
  transition: 0.4s;
  border: 1px solid transparent;
  .round & {
    background: #eee;
    border-radius: 30px;
  }
  .square & {
    background: #fff;
    border-radius: 6px;
  }
  &:hover{
    border: 1px solid #d1d1d1;
  }
`;
const Button = styled(DefaultButton)`
  fill: #767676;
  width: 25px;
`;
const Label = styled.div`
  display: block;
  width: 100%;
`;
const Input = styled.input`
  display: block;
  height: 38px;
  width: 100%;
  border: 0;
  background: transparent;
  outline: 0;
  padding: 8px;
  font-size: 14px;
  .round & {
    height: 38px;
  }
  .square & {
    height: 54px;
  }
`;
export default SearchBox;
