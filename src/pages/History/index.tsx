import { useContext } from 'react';
import { CyclesContext } from '../../contexts/CyclesContex';
import { HistoryContainer, HistoryList, Status } from './styled';

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 semanas</td>
              <td>
                <Status statusColor='green'>Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 semanas</td>
              <td>
                <Status statusColor='yellow'>Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 semanas</td>
              <td>
                <Status statusColor='red'>Interronpido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
