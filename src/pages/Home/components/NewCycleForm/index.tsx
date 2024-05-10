import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { CyclesContext } from '../../../../contexts/CyclesContex';
import { FormContainer, MinutesAmountInput, TaskInput } from './setyled';

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor='task'>Vou trabalhar em</label>
      <TaskInput
        id='task'
        list='task-sugestion'
        placeholder='Dê um nome para seu projeto'
        disabled={!!activeCycle}
        {...register('task')}
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos</span>
    </FormContainer>
  );
}
