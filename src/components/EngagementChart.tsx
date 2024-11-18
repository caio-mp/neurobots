// src/components/EngagementChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EngagementChart: React.FC = () => {
    const data = {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [
            {
                label: 'Interações',
                data: [12, 19, 3, 5, 2, 3, 7],
                borderColor: '#0079bf',
                backgroundColor: '#d4e8fa',
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            },
        },
        maintainAspectRatio: false, // Evita que o gráfico perca a proporção ao redimensionar
    };

    return (
        <section className="analytics">
            <h2>Análise Detalhada</h2>
            <div className="chart-container">
                <Line data={data} options={options} />
            </div>
        </section>
    );
};

export default EngagementChart;
