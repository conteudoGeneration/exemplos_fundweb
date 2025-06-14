export interface Participante {
  nome: string;
  turma: string;
  ativo: boolean;
}

const participantes: Participante[] = [
  { nome: 'Ana', turma: 'Java', ativo: true },
  { nome: 'Bruno', turma: 'Java', ativo: false },
  { nome: 'Carla', turma: 'Java', ativo: true }
];

// Filtrar apenas os participantes ativos
const participantesAtivos = [...participantes.filter(p => p.ativo)];

console.log(participantesAtivos);