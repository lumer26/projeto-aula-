'use client';

import { CreditCard, ShoppingCart, TrendingUp, PiggyBank, Plus } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", entradas: 4000, saidas: 2400 },
  { name: "Feb", entradas: 3000, saidas: 1398 },
  { name: "Mar", entradas: 2000, saidas: 9800 },
  { name: "Apr", entradas: 2780, saidas: 3908 },
  { name: "May", entradas: 1890, saidas: 4800 },
  { name: "Jun", entradas: 2390, saidas: 3800 },
  { name: "Jul", entradas: 3490, saidas: 4300 },
];

export default function Dashboard() {
  return (
    <div className="pagina">

      {/* Top Bar */}
      <div className="top-bar">
        <PiggyBank size={32} className="icon-green" />
        <Plus size={32} className="icon-plus" />
      </div>

      {/* Cards */}
      <div className="cards">
        <div className="card">
          <div className="card2">
            <div>
              <p className="card-titulo">Entradas</p>
              <h2 className="card-entrada">R$ 7.840,56</h2>
            </div>
            <TrendingUp className="icon-green" size={32} />
          </div>
        </div>

        <div className="card">
          <div className="card2">
            <div>
              <p className="card-titulo">Saídas</p>
              <h2 className="card-saida">R$ 1.580,45</h2>
            </div>
            <CreditCard className="icon-red" size={32} />
          </div>
        </div>

        <div className="card">
          <div className="card2">
            <div>
              <p className="card-titulo">Balanço</p>
              <h2 className="card-entrada">R$ 6.260,11</h2>
            </div>
            <ShoppingCart className="icon-green" size={32} />
          </div>
        </div>
      </div>

      {/* Gráfico e Categorias */}
      <div className="grafico">
        <div className="grafico2">
          <h3 className="titulo">Análise</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="entradas" fill="#10B981" />
              <Bar dataKey="saidas" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="categorias">
          <h3 className="titulo">Categorias</h3>
          <table className="table">
            <tbody>
              <tr className="table-row">
                <td className="table-cell">Alimentação</td>
                <td className="table-cell text-right">R$ 1.508,15</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Mercado</td>
                <td className="table-cell text-right">R$ 508,90</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Transporte</td>
                <td className="table-cell text-right">R$ 300,00</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Lazer</td>
                <td className="table-cell text-right">R$ 450,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Transações */}
      <div className="transacoes">
        <h3 className="titulo">Transações</h3>
        <table className="table">
          <thead>
            <tr>
              <th className="table-head">Descrição</th>
              <th className="table-head">Tipo</th>
              <th className="table-head">Valor</th>
              <th className="table-head">Banco</th>
              <th className="table-head">data</th>
              <th className="table-head">Parcelas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-cell">Supermercado Big Master</td>
              <td className="table-cell">Crédito</td>
              <td className="table-cell texto-red">R$ 896,00</td>
              <td className="table-cell">Nubank</td>
              <td className="table-cell">21/03/2024</td>
              <td className="table-cell">1/1</td>
            </tr>
            <tr>
              <td className="table-cell">Supermercado Big Master</td>
              <td className="table-cell">Crédito</td>
              <td className="table-cell texto-red">R$ 896,00</td>
              <td className="table-cell">Nubank</td>
              <td className="table-cell">21/03/2024</td>
              <td className="table-cell">1/1</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
