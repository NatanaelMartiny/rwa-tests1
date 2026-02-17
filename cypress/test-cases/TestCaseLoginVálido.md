# Caso de Teste: Login com Sucesso

- **Tipo de Teste:** Funcional / Negativo
- **Prioridade:** Alta
- **Status:** Aprovado

**Objetivo:** Verificar se o usuário consegue fazer login com credenciais válidas.

## Pré-condições
- Usuário já cadastrado no ambiente de desenvolvimento
- Aplicação rodando em http://localhost:3000

## Dados de Teste
| Campo     | Valor             |
|-----------|-------------------|
| Usuário   | natanaelmartiny   |
| Senha     | s3cret            |

## Passos
1. Abrir o navegador e acessar http://localhost:3000/login
2. Preencher o campo "Usuário" com `natanaelmartiny`
3. Preencher o campo "Senha" com `s3cret`
4. Clicar no botão "Entrar"

## Resultado Esperado
- Usuário é redirecionado para a página inicial
- Elementos do dashboard (ex: tabs) estão visíveis
- URL contém `/home`