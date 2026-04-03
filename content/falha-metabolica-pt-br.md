# A Falha Metabólica na Agricultura Mundial

> Quantificando ineficiência agrícola e trade-offs de sustentabilidade em escala global

## Visão Geral do Projeto

Neste projeto de doutorado, desenvolvi uma análise quantitativa em escala global para investigar um problema central da sustentabilidade agrícola: **o aumento da produtividade agrícola tem sido proporcional ao aumento do uso de insumos?**

A partir da teoria da falha metabólica, construí uma abordagem empírica para testar se o modelo agrícola moderno está se tornando mais eficiente — ou apenas mais dependente de fertilizantes sintéticos ao longo do tempo.

Usando dados de 1961 a 2022, para 211 países e seis das principais commodities agrícolas do mundo, desenvolvi um pipeline analítico para medir, comparar e mapear a relação entre:

- uso de fertilizantes (N, P₂O₅, K₂O)
- ganhos de produtividade agrícola
- eficiência relativa entre países e regiões
- desigualdades entre Norte e Sul Global

O resultado foi a criação de um **indicador quantitativo original de falha metabólica**, capaz de transformar uma hipótese teórica complexa em uma métrica comparável, escalável e orientada por dados.

## Por que este projeto importa

> Estamos produzindo mais comida de forma mais eficiente — ou apenas aumentando a dependência de insumos para sustentar o sistema?

Esse problema tem aplicações diretas em:

- sustentabilidade e ESG
- agritech
- food systems analytics
- climate risk
- policy intelligence
- resource efficiency
- environmental impact modeling

## O que eu fiz

### 1) Construção de dataset global

Estruturei uma base histórica com dados da FAO para:

- **211 países**, período **1961–2022**
- **6 commodities agrícolas globais:** milho, arroz, trigo, soja, cana-de-açúcar, batata
- **3 classes de fertilizantes:** Nitrogênio (N), Fósforo (P₂O₅), Potássio (K₂O)

O pipeline incluiu tratamento de lacunas, alinhamento de séries e padronização para garantir comparabilidade entre países e décadas.

**Habilidades demonstradas:** data wrangling · harmonização temporal de séries históricas · padronização de dados incompletos · construção de indicadores compostos · organização de base longitudinal/painel

### 2) Criação de métrica própria de sustentabilidade

Desenvolvi um indicador de falha metabólica, calculado como a razão entre:

$$\text{Falha Metabólica} = \frac{\Delta \text{Fertilizante}}{\Delta \text{Produtividade}}$$

Essa métrica permitiu quantificar, para cada país, quanto o uso de fertilizantes cresce em relação ao ganho de produtividade.

| Valor do indicador | Interpretação |
|-------------------|---------------|
| Alto | Maior dependência de fertilizantes para sustentar ganhos produtivos |
| Baixo | Maior eficiência |
| Entre 0 e 1 | Indício de maior sustentabilidade relativa |

**Habilidades demonstradas:** feature engineering · criação de indicadores analíticos · operacionalização de conceitos complexos em métricas mensuráveis · modelagem aplicada a problemas reais

### 3) Modelagem de tendências temporais

Para cada país, estimei a variação temporal da produtividade e do uso de insumos usando modelos lineares, com o objetivo de extrair coeficientes de tendência comparáveis entre países e variáveis.

**Abordagem:**

- regressões lineares por país
- filtragem por robustez mínima de observações
- extração sistemática dos coeficientes angulares
- comparação de slopes entre insumos e produtividade

**Habilidades demonstradas:** statistical modeling · batch model fitting · análise de séries temporais · interpretação de coeficientes em larga escala

### 4) Análise comparativa global

Comparei padrões em diferentes escalas:

- global
- por país
- entre grandes produtores agrícolas
- entre Norte e Sul Global

Também usei testes estatísticos para investigar diferenças sistemáticas entre regiões do sistema agroalimentar mundial.

**Habilidades demonstradas:** comparative analytics · inferência estatística · hypothesis testing · segmentação geopolítica de padrões · análise de desigualdades estruturais via dados

### 5) Inteligência espacial

O projeto incorporou uma dimensão espacial ao mapear a distribuição da falha metabólica pelo mundo — identificando padrões geográficos de ineficiência e desigualdade.

**Habilidades demonstradas:** geospatial interpretation · data visualization · spatial pattern recognition · comunicação visual de resultados complexos

## Principais Resultados

### Resultado central

A produtividade agrícola mundial cresceu nas últimas décadas — mas **o uso de fertilizantes cresceu ainda mais rápido**.

### Destaques

- O uso global de fertilizantes aumentou fortemente ao longo do período
- Os ganhos de produtividade não acompanharam esse crescimento na mesma proporção
- **A razão global entre tendência de NPK e produtividade foi de aproximadamente 2,8**
- Em muitos países, a dependência de fertilizantes foi muito superior ao ganho produtivo
- Regiões do Sul Global apresentaram alguns dos padrões mais intensos de falha metabólica

### Interpretação

Na prática, isso significa que o sistema agrícola moderno está, em muitos contextos, comprando produtividade com crescente custo ecológico e material.

## Stack Tecnológico

**Linguagens e ferramentas:**

- R
- tidyverse
- modelagem estatística
- visualização de dados
- manipulação de séries temporais
- análise comparativa entre países

**Habilidades de dados demonstradas:**

- cleaning & preprocessing
- feature engineering
- statistical modeling
- longitudinal data analysis
- large-scale comparative analysis
- reproducible research workflow
- domain-informed analytical design

## Valor para Negócios / Tomada de Decisão

Este projeto posiciona quem o desenvolveu como alguém capaz de atuar em:

- Data Science
- ESG Analytics
- Climate / Sustainability Intelligence
- Agritech Analytics
- Public Policy Data
- Environmental Risk & Resource Modeling

## O que este projeto diz sobre mim

Este projeto sintetiza minha capacidade de transformar problemas socioambientais complexos em estruturas analíticas escaláveis, combinando rigor estatístico, conhecimento de domínio e geração de insight orientado à tomada de decisão.

---

## Resumo para Recrutadores

**A Falha Metabólica na Agricultura Mundial**

Desenvolvi uma análise quantitativa em escala global para avaliar se os ganhos de produtividade agrícola acompanharam proporcionalmente o aumento do uso de fertilizantes sintéticos.

**Principais contribuições:**

- Construção e padronização de dataset histórico global (FAO, 211 países, 1961–2022)
- Criação de indicador original de eficiência/falha metabólica
- Modelagem de tendências temporais por país via regressão linear
- Comparação de padrões estruturais entre regiões e sistemas de produção
- Geração de inteligência espacial global sobre dependência e ineficiência agrícola

**Principal resultado:** A produtividade agrícola cresceu mundialmente — mas a dependência de fertilizantes cresceu numa proporção de ~2,8×, evidenciando um padrão generalizado de declínio na eficiência ecológica.

**Tags:** Ciência de Dados · R · Feature Engineering · Modelagem Estatística · Análise de Séries Temporais · Sustentabilidade · ESG · Agritech · Dados da FAO · Análise Comparativa Global
