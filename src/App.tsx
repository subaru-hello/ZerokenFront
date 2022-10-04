import { useState } from 'react'
// import Form from './components/Form';
import { useForm, SubmitHandler,Controller } from "react-hook-form";
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import { TextField, Checkbox, Input  } from "@material-ui/core";
type Inputs = {
  name: string,
  email: string,
  checkbox: string
};

import './App.css'

const title = import.meta.env.VITE_APP_TITLE
console.dir(import.meta.env)

function App() {
  const { register, handleSubmit, formState: { errors }, control } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <div className="App">
      <h1>{title}</h1>
      <FormControlUnstyled defaultValue="" required onSubmit={handleSubmit(onSubmit)}>
        <TextField  {...register("name", {required: true})}/>
        <TextField  {...register("email", {required: true})}/>
        <Checkbox />
        <input type="submit" />
      </FormControlUnstyled>

    </div>
  )
}

export default App
