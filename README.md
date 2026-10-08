# Jest Testing Practice

Repositório criado para praticar e consolidar testes automatizados com Jest utilizando TypeScript.

O objetivo é desenvolver familiaridade com testes unitários, mocks, spies, testes assíncronos e validação de diferentes cenários de uma aplicação.

## 🚀 Tecnologias

- TypeScript
- Jest
- Node.js
- GitHub Actions

## 🧪 Conteúdos praticados

Durante os exercícios foram praticados:

- Testes unitários
- Testes síncronos e assíncronos
- `jest.fn()`
- `jest.spyOn()`
- `mockReturnValue()`
- `mockImplementation()`
- `mockRejectedValue()`
- `mockClear()`
- `jest.restoreAllMocks()`
- `afterEach()`
- `toHaveBeenCalled()`
- `toHaveBeenCalledWith()`
- `toHaveBeenCalledTimes()`
- `resolves` e `rejects`
- Validação de erros
- Mock de dependências
- Injeção de dependências
- Isolamento entre testes
- Testes de regras de negócio
- Testes de diferentes caminhos de execução

## 📂 Estrutura

Cada exercício possui sua própria pasta dentro de `src/`.

```text
src/
├── 01-find-active-user/
├── 02-user-validation/
├── 03-find-product/
├── ...
├── 19-order-service/
└── 20-complete-order/
```

Cada exercício contém sua implementação e seus respectivos testes:

```text
exercise/
├── index.ts
└── index.spec.ts
```

## ▶️ Executando os testes

Instale as dependências:

```bash
npm install
```

Execute todos os testes:

```bash
npm test
```

Execute os testes com cobertura:

```bash
npm test -- --coverage
```

## 📊 Cobertura

O projeto possui **20 exercícios com testes automatizados**, cobrindo diferentes cenários, regras de negócio, comportamentos assíncronos e dependências.

### Resultado

**100% de cobertura nos testes.**

<img width="1870" height="897" alt="Jest Coverage - Overview" src="https://github.com/user-attachments/assets/1605af47-c421-4e89-8060-31bb7bfb1da1" />

<img width="1878" height="888" alt="Jest Coverage - Details" src="https://github.com/user-attachments/assets/0f67fea1-0413-47b1-97b2-75abff458b35" />

A cobertura pode ser gerada novamente com:

```bash
npm test -- --coverage
```

## 🔄 Continuous Integration

O projeto utiliza GitHub Actions para executar automaticamente os testes a cada `push` e `pull request` na branch `main`.

Dessa forma, os testes são executados tanto localmente quanto no ambiente do GitHub.

## 🎯 Objetivo

Este repositório faz parte do meu processo de aprendizado em desenvolvimento backend com Node.js, TypeScript e NestJS.

A prática com Jest tem como objetivo fortalecer a capacidade de escrever testes automatizados e preparar a aplicação desses conhecimentos em projetos backend reais.
