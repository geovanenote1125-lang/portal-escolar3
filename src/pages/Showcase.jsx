import React from 'react';
import '../styles/showcase.css';

export default function Showcase() {
  return (
    <div className="showcase">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Portal Escolar</h1>
          <p>Plataforma moderna de acompanhamento acadêmico</p>
          <a href="/portal-escolar3/" className="cta-button">Acessar Portal</a>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">📱</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Funcionalidades Principais</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Para Professores</h3>
            <p>Gerencie turmas, lançamento de notas, frequência e comunicação com responsáveis</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">👨‍👩‍👧</div>
            <h3>Para Responsáveis</h3>
            <p>Acompanhe o desempenho, notas, faltas e comunicados dos seus filhos em tempo real</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Para Coordenação</h3>
            <p>Visualize relatórios gerenciais, controle de turmas e gerenciamento de acesso</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Relatórios</h3>
            <p>Gere relatórios detalhados de desempenho e frequência dos alunos</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Notificações</h3>
            <p>Receba alertas sobre baixo desempenho, faltas e eventos importantes</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Segurança</h3>
            <p>Controle de acesso baseado em permissões e dados protegidos</p>
          </div>
        </div>
      </section>

      {/* Demo Accounts Section */}
      <section className="demo-accounts">
        <h2>Contas de Demonstração</h2>
        <p className="subtitle">Teste a plataforma com diferentes perfis de acesso</p>
        
        <div className="accounts-grid">
          <div className="account-card">
            <h3>👨‍👩‍👧 Responsável</h3>
            <div className="credentials">
              <div className="credential">
                <span className="label">Email:</span>
                <code>ana@colegiotrilhas.com.br</code>
              </div>
              <div className="credential">
                <span className="label">Senha:</span>
                <code>123456</code>
              </div>
            </div>
            <p className="description">Visualize notas e frequência dos seus filhos</p>
          </div>

          <div className="account-card">
            <h3>👨‍🏫 Professor</h3>
            <div className="credentials">
              <div className="credential">
                <span className="label">Email:</span>
                <code>carlos@colegiotrilhas.com.br</code>
              </div>
              <div className="credential">
                <span className="label">Senha:</span>
                <code>123456</code>
              </div>
            </div>
            <p className="description">Gerencie suas turmas e lançamento de notas</p>
          </div>

          <div className="account-card">
            <h3>⚙️ Coordenação</h3>
            <div className="credentials">
              <div className="credential">
                <span className="label">Email:</span>
                <code>coordenacao@colegiotrilhas.com.br</code>
              </div>
              <div className="credential">
                <span className="label">Senha:</span>
                <code>123456</code>
              </div>
            </div>
            <p className="description">Controle toda a operação acadêmica</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies">
        <h2>Tecnologias</h2>
        <div className="tech-stack">
          <div className="tech-item">React 18</div>
          <div className="tech-item">Vite</div>
          <div className="tech-item">JavaScript ES6+</div>
          <div className="tech-item">CSS3</div>
          <div className="tech-item">LocalStorage</div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info">
        <h2>Sobre Esta Versão</h2>
        <div className="info-content">
          <div className="info-box">
            <h3>🧪 Versão Demonstração</h3>
            <p>Esta é uma versão funcional com autenticação e dados armazenados localmente no navegador. Ideal para testes e apresentações.</p>
          </div>
          
          <div className="info-box">
            <h3>🚀 Pronto para Produção</h3>
            <p>Para ambiente de produção, recomendamos integrar com um backend como Supabase, Firebase ou sua própria API.</p>
          </div>
          
          <div className="info-box">
            <h3>📱 Responsivo</h3>
            <p>A plataforma é totalmente responsiva e funciona em desktop, tablet e dispositivos móveis.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Pronto para começar?</h2>
        <p>Acesse o Portal Escolar agora mesmo</p>
        <a href="/portal-escolar3/" className="cta-button large">Entrar no Portal</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Portal Escolar. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
