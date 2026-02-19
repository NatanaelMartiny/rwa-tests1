# Caso de Teste: Login com credenciais inválidas

## Informações Gerais

- **Tipo de Teste:** Funcional / Negativo
- **Prioridade:** Alta
- **Status:** Aprovado

**Objetivo:** Verificar se o sistema impede o login com credenciais inválidas.

## Pré-condições
- Usuário não cadastrado no ambiente de desenvolvimento
- Aplicação rodando em http://localhost:3000

## Dados de Teste
| Campo     | Valor             |
|-----------|-------------------|
| Usuário   | usuario1          |
| Senha     | senhateste1       |

## Passos
1. Abrir o navegador e acessar http://localhost:3000/login
2. Preencher o campo "Usuário" com `usuario1`
3. Preencher o campo "Senha" com `senhateste1`
4. Clicar no botão "Entrar"

## Resultado Esperado
- Usuário recebe mensagem de erro "Username or password is invalid"
