import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { FormContainer, MinutesAmountInput, TaskInput } from './setyled';

const newCycleFormValitadionSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValitadionSchema>;

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValitadionSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

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
