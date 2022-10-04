import { FC } from 'react';
import styled from 'styled-components';
import RadioButtonsGroup from 'components/atoms/RadioForm';

export type RadioProps = {
  name: string;
};

export const DecomposeDiagnose: FC = () => {
  return (
    <>
      <div>hello</div>
      <RadioButtonsGroup />
    </>
  );
};
