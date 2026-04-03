# Qualificação e Validação de Base de Dados Socioeconômica

> Consultoria de Dados · AEDAS · Programa Médio Rio Doce

## Visão Geral do Projeto

Atuei na qualificação e validação de uma base de dados complexa derivada do **Registro Familiar (RF)**, instrumento utilizado no âmbito do Programa Médio Rio Doce, com foco em identificar erros de preenchimento, inconsistências lógicas, problemas estruturais e falhas de integridade de dados.

O trabalho apoiou diretamente as equipes de Gestão da Informação e Mobilização na melhoria da confiabilidade da base para uso analítico e operacional.

**Período:** 3 meses

## O que eu fiz em dados

- Integração de múltiplas bases de dados a partir de chaves relacionais
- Tratamento, limpeza e padronização de dados estruturados
- Validação de consistência lógica entre variáveis dependentes
- Detecção de erros, duplicidades, campos ausentes e inconsistências cadastrais
- Estruturação de saídas padronizadas para auditoria e correção de dados
- Organização de regras de negócio e validação em escala para questionários extensos e relacionais

## Habilidades de Data Science Demonstradas

### 1. Engenharia e integração de dados

Trabalhei com a consolidação de diferentes arquivos de dados — `tbAtingidos.csv`, `tbImoveisAt.csv`, `tbNucleoPR.csv` e `tbNucleoSC.csv` — realizando o cruzamento entre tabelas por chaves como `IDNucleo` e `ID de membro`, preservando registros e tratando ausências com valores nulos quando necessário.

Isso exigiu visão de **estrutura relacional**, integridade de chave e consistência entre tabelas.

### 2. Manipulação de dados em Python

Toda a manipulação, organização, filtragem, consolidação e validação dos dados foi conduzida em Python, com foco em construir **fluxos reproduzíveis** para análise, detecção de inconsistências e geração de saídas utilizáveis pelas equipes técnicas.

### 3. Qualidade e governança de dados

Desenvolvi e apliquei rotinas para identificar:

- campos obrigatórios não preenchidos
- CPFs inválidos ou duplicados
- telefones e CEPs inconsistentes
- nomes inválidos
- duplicação de núcleos e indivíduos
- erros de codificação e estrutura de identificadores
- respostas fora de contexto ou quebrando regras de dependência lógica

### 4. Modelagem lógica de regras de negócio

O projeto envolveu um questionário com aproximadamente **550 perguntas**, distribuídas entre dimensões de núcleo familiar e membros do núcleo, exigindo a construção de uma lógica robusta de validação entre campos, blocos e respostas condicionais.

### 5. Estruturação de dados qualitativos e quantitativos

Trabalhei com dados de naturezas distintas, incluindo:

- dados cadastrais e numéricos
- dados territoriais e domiciliares
- informações socioeconômicas
- respostas qualitativas categóricas e condicionais
- relações entre indivíduos, domicílios, atividades econômicas e programas reparatórios

### 6. Padronização analítica e rastreabilidade

Estruturei saídas organizadas com metadados como:

- bloco temático
- código da questão
- campo
- tipo de erro/inconsistência
- orientação para correção
- identificação do registro

Esse processo tornou a base mais **auditável, rastreável e pronta para uso analítico**.

## Diferencial Técnico do Projeto

Este trabalho foi especialmente relevante por envolver:

- grande volume de variáveis interdependentes
- integração entre múltiplas tabelas
- tratamento de dados sociais complexos
- uso combinado de dados estruturados, qualitativos e quantitativos
- tradução de regras de formulário em lógica computacional aplicada à qualidade de dados

Em termos práticos, foi um projeto de **data quality, data wrangling, validação de bases, estruturação relacional e análise de consistência** — exatamente o tipo de experiência altamente aplicável a posições de Cientista de Dados, Analista de Dados ou Data Quality Analyst.

## Stack Tecnológico

**Python** · Manipulação de Dados · Limpeza de Dados · Data Quality · Validação de Regras de Negócio · Integração de Bases · Dados Relacionais · Dados Qualitativos e Quantitativos · Estruturação Analítica · Auditoria de Dados

---

## Resumo para Recrutadores

**Qualificação e Validação de Base de Dados Socioeconômica — AEDAS**

Atuei em projeto de consultoria desenvolvendo a qualificação e validação de bases de dados socioeconômicas complexas para a AEDAS, integrando múltiplas tabelas, estruturando regras de consistência lógica e automatizando a identificação de erros, ausências, duplicidades e inconsistências cadastrais.

**Principais contribuições:**

- Integração relacional de 4 tabelas com cruzamento por chaves compostas
- Desenvolvimento de rotinas Python para detecção automatizada de inconsistências
- Validação de ~550 variáveis com dependências lógicas entre respostas
- Estruturação de saídas padronizadas para auditoria e rastreabilidade
- Suporte direto às equipes de gestão da informação na melhoria da confiabilidade da base

**Tags:** Python · Data Quality · Data Wrangling · Dados Relacionais · Engenharia de Dados · Validação de Regras de Negócio · Dados Socioeconômicos · Auditoria de Dados · Consultoria
