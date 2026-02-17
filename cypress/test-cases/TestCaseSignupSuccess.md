# Caso de Teste: Registrar novo usuário com dados válidos

## Informações Gerais

- **Tipo de Teste:** Funcional
- **Prioridade:** Alta
- **Autor:** Natanael
- **Data de Criação:** 16/02/2026
- **Status:** Aprovado

---

## Pré-condições

- Aplicação deve estar em execução
- Usuário não deve existir previamente

---

## Dados de Teste

| Campo        | Valor                         |
|--------------|-------------------------------|
| First Name   | Gerado dinamicamente (Faker)  |
| Last Name    | Gerado dinamicamente (Faker)  |
| Username     | first + last + timestamp      |
| Password     | s3cret                        |

---

## Passos para Execução

| # | Ação | Resultado Esperado |
|---|------|-------------------|
| 1 | Acessar a aplicação | Página inicial carregada |
| 2 | Clicar em Sign Up | Página de cadastro exibida |
| 3 | Preencher os campos obrigatórios | Campos aceitam os valores |
| 4 | Clicar em Sign Up | Usuário criado com sucesso |

---

## Resultado Final Esperado

- Usuário deve ser criado com sucesso (HTTP 201)
- Sistema deve redirecionar para 'Sign In'
- Botão "Sign In" deve estar visível

