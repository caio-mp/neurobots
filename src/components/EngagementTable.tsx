// src/components/EngagementTable.tsx
import React from 'react';
import './EngagementTable.css'; // Importe o CSS para o componente

interface UserEngagement {
  user: string;
  interactions: number;
  lastAccess: string;
}

const EngagementTable: React.FC = () => {
  const data: UserEngagement[] = [
    { user: 'Usuário 1', interactions: 25, lastAccess: '10/11/2024' },
    { user: 'Usuário 2', interactions: 15, lastAccess: '08/11/2024' },
  ];

  return (
    <section className="engagement-table">
      <h2>Tabela de Engajamento</h2>
      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Interações</th>
            <th>Último Acesso</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.user}</td>
              <td>{item.interactions}</td>
              <td>{item.lastAccess}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EngagementTable;
