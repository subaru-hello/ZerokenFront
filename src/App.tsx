import { FC } from 'react';
import { TextField, Checkbox } from '@material-ui/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { DecomposeDiagnose } from 'components/templates/DecomposeDiagnose';
type Inputs = {
  name: string;
  email: string;
  checkbox: string;
};

const inputProps = {
  step: 300,
};

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const App: FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const Title = styled.section`
    text-align: center;
  `;

  return (
    <Container>
      <Title>{title}</Title>
      <Container>
        <DecomposeDiagnose />
        <DecomposeDiagnose />
        <DecomposeDiagnose />
      </Container>

      <FormControlUnstyled
        defaultValue=""
        required
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputLabel>名前</InputLabel>
        <Input
          {...register('name', { required: 'Please enter your first name.' })}
          inputProps={inputProps}
        />

        <TextField {...register('name', { required: true })} />
        <TextField {...register('email', { required: true })} />
        <Checkbox />

        <input type="submit" />
      </FormControlUnstyled>
    </Container>
  );
};

export default App;
