import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['Acordar os filhos', 'Tomar café da manhã', 'Levar os filhos para brincar no sol', 'Fazer almoço', 'Preparar lancheiras e mochilas', 'Arrumar os filhos para a escola', 'Guardar brinquedos', 'Aspirar o chão', 'Verificar Slack e lista de afazeres', 'Entrar no Zoom - Abertura', 'Estudar o conteúdo do dia', 'Assistir aula ao vivo', 'Iniciar exercícios', 'Entrar no Zoom - Monitoria', 'Amamentar', 'Responder formulário', 'Entrar no Zoom - Fechamento', 'Dar banho nos filhos e tomar banho', 'Colocar filhos para dormir', 'Jantar', 'Secar a louça', 'Finalizar exercícios', 'Dormir'];

function App() {
  return (
    <ol className="App">
      {taskList.map((item) => Task(item))}
    </ol>
  );
}

export default App;
