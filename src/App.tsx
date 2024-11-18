import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
import { Line } from 'react-chartjs-2';
import './App.css';
import logo from './assets/logo.png'; // Importe a logo

function App() {
  // Dados de exemplo para o gráfico de linha
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Engajamento',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#00000',
      },
    ],
  };
  
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Logo da Empresa" className="logo" />
        <h1>Análise de Engajamento</h1>
      </header>
      <div className="analysis-container">
        <div className="chart-section">
          <Line data={data} />
        </div>
        <div className="feedback-section">
          <h2>Feedback do Usuário</h2>
          <textarea placeholder="Escreva aqui um feedback..." />
          <button className="submit-button">Enviar Feedback</button>
        </div>
      </div>
    </div>
  );
}

export default App;
