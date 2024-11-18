// src/components/Overview.tsx
import React from 'react';

const Overview: React.FC = () => {
    return (
        <section className="overview">
            <h2>Visão Geral do Engajamento</h2>
            <p>Visualize as métricas de engajamento para entender a interação dos usuários com a plataforma.</p>
            <div className="metric">
                <h3>Usuários Ativos</h3>
                <p>120 usuários ativos nesta semana</p>
            </div>
        </section>
    );
};

export default Overview;