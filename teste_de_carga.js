import http from 'k6/http';
import { check, sleep } from 'k6';

// URL da API pública (API de Mock)
const url = 'https://jsonplaceholder.typicode.com/posts';

// Configuração de opções do teste (500 usuários por 5 minutos)
export let options = {
  stages: [
    { duration: '5m', target: 500 }, // De 0 a 500 VUs (usuários virtuais) em 5 minutos
  ],
};

// Função principal que será executada por cada usuário virtual
export default function () {
  // Enviando uma requisição GET para o endpoint
  let res = http.get(url);

  // Verificando se o status da resposta é 200 (OK)
  check(res, {
    'status é 200': (r) => r.status === 200,
    'tempo de resposta <= 200ms': (r) => r.timings.duration <= 200,
  });

  // Simula um pequeno delay entre as requisições (para não sobrecarregar)
  sleep(1);
}



