// src/pages/DashboardPage.tsx
import React from "react";
import EngagementChart from "../components/EngagementChart"; // Importe o gráfico
import EngagementTable from "../components/EngagementTable"; // Importe a tabela de engajamento
import logo from "../assets/logo.png"; // Importe o logo da empresa (se estiver na pasta assets)
import './DashboardPage.css'; // Importe o arquivo de estilo específico para esta página

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-page">
      <header className="header">
        <img src={logo} alt="Logo Neurobots" className="logo" /> {/* Exibe apenas o logo */}
        <h1>Dashboard de Engajamento</h1> {/* Título da página */}
      </header>
      <div className="content">
        <div className="chart-section">
          <h2>Gráfico de Engajamento</h2>
          <EngagementChart /> {/* Exibe o gráfico */}
        </div>
        <EngagementTable /> {/* Exibe a tabela de engajamento */}
      </div>
    </div>
  );
};

export default DashboardPage;
