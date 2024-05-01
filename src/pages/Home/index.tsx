import { Play } from 'phosphor-react';
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styled';

export function Home() {
  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <TaskInput
            id='task'
            list='task-sugestion'
            placeholder='Dê um nome para seu projeto'
          />

          <datalist id='task-sugestion'>
            <option value='Projeto 1'></option>
          </datalist>

          <label>durante</label>
          <MinutesAmountInput
            type='number'
            id='minutesAmount'
            placeholder='00'
            step='5'
            min='5'
            max='60'
          />
          <span>minutos</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type='submit'>
          <Play />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
