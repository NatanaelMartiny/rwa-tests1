# Caso de Teste: Tentar visualizar o histórico de transações sem transações anteriores

## Informações Gerais

- **Tipo de Teste:** Funcional / Negativo  
- **Prioridade:** Alta  
- **Status:** Aprovado  

**Objetivo:** Verificar se o sistema exibe uma mensagem informativa quando o usuário não possui transações registradas.

---

## Pré-condições

- Usuário cadastrado no ambiente de desenvolvimento  
- Usuário autenticado no sistema  
- Aplicação rodando em http://localhost:3000  
- Usuário não deve possuir transações registradas  

---

## Dados de Teste

| Campo                | Valor              |
|----------------------|--------------------|
| Usuário              | natanaelmartiny    |
| Senha                | 123456             |

---

## Passos

1. Acessar http://localhost:3000/signin  
2. Realizar login com usuário `natanaelmartiny`  
3. Acessar a aba **"Mine"** (Histórico pessoal)  
4. Verificar o conteúdo exibido na área de transações  

---

## Resultado Esperado

- O sistema não deve exibir itens de transação  
- Deve apresentar mensagem informando que não há transações registradas  
- Exemplo de mensagem esperada: `"No Transactions"`  