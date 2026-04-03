# Ciência de Dados Geoespaciais para Conservação da Biodiversidade

> Integrando dados genéticos, ecológicos e espaciais para apoiar a tomada de decisão em conservação

## Visão Geral do Projeto

Este projeto aplicou ciência de dados, modelagem espacial e inferência biológica para identificar áreas prioritárias para conservação da biodiversidade no Neotrópico.

O objetivo central foi avaliar se o planejamento da conservação baseado apenas na ocorrência das espécies é suficiente, ou se incorporar a estrutura genética intraespecífica altera as prioridades de conservação.

Para responder a isso, desenvolvi um fluxo analítico integrando:

- dados de ocorrência de espécies
- preditores ambientais
- sequências genéticas georreferenciadas
- modelos de distribuição de espécies
- inferência filogeográfica
- algoritmos de priorização espacial

O resultado foi uma estrutura de apoio à decisão para o planejamento da conservação, conectando modelagem ecológica e análise espacial orientada por dados.

## Por que este projeto importa

Decisões de conservação frequentemente são tomadas com base apenas na presença das espécies, o que pode ignorar diversidade evolutiva oculta dentro de cada espécie.

Sob a perspectiva da ciência de dados, isso gera um problema analítico real:

> Como combinar conjuntos de dados biológicos e espaciais heterogêneos para produzir decisões de conservação melhores?

Este projeto enfrenta esse desafio ao transformar informações ecológicas e genéticas fragmentadas em inteligência espacial acionável.

## A pergunta analítica

**O planejamento da conservação em nível de espécie é suficiente para proteger adequadamente a diversidade genética intraespecífica?**

Para responder a isso, comparei duas estratégias de priorização da conservação:

| Cenário | Abordagem |
|---------|-----------|
| Cenário 1 | Priorização baseada apenas nas distribuições das espécies |
| Cenário 2 | Priorização baseada em distribuições das espécies + linhagens filogeográficas |

Essa comparação permitiu quantificar o quanto de informação relevante sobre biodiversidade é perdido quando a estrutura genética é ignorada.

## Meu papel

Fui responsável por todo o fluxo analítico de ponta a ponta, incluindo:

- coleta e curadoria de dados
- pré-processamento espacial e ambiental
- modelagem de distribuição de espécies
- análise filogeográfica e de estrutura genética
- espacialização de linhagens
- priorização espacial e comparação de cenários
- interpretação e comunicação dos resultados

## Base de Dados

### Escopo biológico

O projeto focou em quatro espécies de Lutrinae do Neotrópico:

- *Lontra longicaudis*
- *Lontra felina*
- *Lontra provocax*
- *Pteronura brasiliensis*

### Escopo geográfico

A área total de estudo abrangeu o Neotrópico, do México ao sul da América do Sul.

### Fontes de dados

A análise integrou três camadas principais de dados:

**1. Dados de ocorrência de espécies**
Utilizados para estimar distribuições geográficas e adequação ecológica.

**2. Variáveis ambientais e climáticas**
Preditores bioclimáticos foram utilizados para modelar a adequação de habitat, incluindo:

- sazonalidade da temperatura
- precipitação anual
- precipitação do mês mais seco
- precipitação do trimestre mais úmido
- amplitude térmica anual
- amplitude térmica diária

**3. Dados genéticos**
Sequências mitocondriais georreferenciadas foram compiladas para reconstruir a estrutura filogeográfica e identificar linhagens evolutivas independentes.

## Stack Tecnológico

### Linguagens e ferramentas

- R
- QGIS
- Maxent
- Wallace
- Zonation
- FigTree

### Pacotes / bibliotecas analíticas em R

- DECIPHER
- rhierbaps
- phangorn
- phytools

### Principais competências técnicas demonstradas

- integração de dados geoespaciais
- modelagem de nicho ecológico
- modelagem preditiva
- clusterização bayesiana
- inferência filogenética
- priorização espacial
- processamento de dados raster ambientais
- comparação de cenários e apoio à decisão

## Metodologia

### 1) Integração e pré-processamento dos dados

A primeira etapa consistiu em consolidar e harmonizar múltiplos tipos de dados biológicos e espaciais.

Isso exigiu:

- limpeza e padronização de registros de ocorrência
- integração de camadas raster ambientais
- associação de registros genéticos a coordenadas geográficas
- preparação dos dados para modelagem espacial e priorização

**Relevância em ciência de dados:** Essa etapa demonstra forte experiência em integração de dados de múltiplas fontes, pré-processamento espacial, preparação de variáveis para modelagem posterior e trabalho com bases científicas complexas e desorganizadas.

### 2) Modelagem de Distribuição de Espécies

Construí modelos de distribuição de espécies (SDMs) para estimar a adequação de habitat em toda a área de estudo.

**Abordagem:**

- algoritmo: Maxent
- particionamento espacial para validação
- controle de viés por randomização de background
- filtragem de ocorrências via spatial thinning
- seleção de preditores ambientais para reduzir redundância

**O que isso demonstra:** Essa etapa evidencia habilidades em modelagem ecológica preditiva, estratégias de validação espacial, mitigação de viés, ajuste e regularização de modelos, e tradução de dados brutos de ocorrência em predições espaciais.

### 3) Estrutura genética e inferência filogeográfica

Para identificar unidades evolutivas relevantes, reconstruí a estrutura genética intraespecífica utilizando dados de sequenciamento mitocondrial.

**Procedimentos analíticos:**

- alinhamento e curadoria de sequências
- clusterização bayesiana de grupos genéticos
- reconstrução filogenética
- comparação de abordagens de construção de árvores
- interpretação de padrões de divergência entre linhagens

**Por que isso é importante:** Sob a perspectiva da ciência de dados, essa etapa demonstra a capacidade de trabalhar com dados biológicos não tabulares, inferência de estrutura latente, estruturas analíticas bayesianas e interpretação comparativa baseada em modelos. Isso é especialmente valioso porque mostra experiência além do machine learning tabular padrão.

### 4) Espacialização de linhagens evolutivas

Uma das partes tecnicamente mais interessantes do projeto foi expandir a informação em nível de linhagem para o espaço geográfico.

Como nem todos os registros de ocorrência possuíam amostragem genética, desenvolvi um fluxo analítico para inferir a distribuição espacial provável de cada linhagem com base em:

- pontos de amostragem genética conhecidos
- adequação ambiental modelada
- continuidade espacial e plausibilidade ecológica

**Por que isso importa:** Essa etapa demonstra uma habilidade crítica em ciência de dados — usar inferência indireta para transformar bases incompletas em produtos analíticos utilizáveis. Na prática, isso é análogo a resolver problemas de dados esparsos usando interpolação espacial baseada em modelos e restrições biológicas.

### 5) Priorização espacial

A etapa final transformou todos os outputs dos modelos em um produto de apoio à decisão.

**Ferramenta utilizada:** Zonation

**Objetivo:** Classificar paisagens de acordo com sua importância para conservação sob diferentes estratégias de representação da biodiversidade.

**Cenários comparados:**

- priorização baseada apenas em espécies
- priorização informada por linhagens

**Output:** Mapas espacialmente explícitos de prioridade para conservação, que podem ser utilizados para orientar planejamento de áreas protegidas, formulação de políticas de biodiversidade, definição de prioridades de monitoramento ecológico e decisões de investimento em conservação.

## Principais Resultados

### 1) Foram identificadas múltiplas linhagens evolutivas ocultas

O projeto revelou uma estrutura genética intraespecífica substancial, mostrando que a biodiversidade não estava distribuída de forma homogênea no espaço geográfico, nem era homogênea dentro das espécies.

Isso significa que tratar cada espécie como uma unidade homogênea esconderia variações biologicamente importantes.

### 2) Os modelos de distribuição de espécies apresentaram forte desempenho preditivo

Os modelos de adequação de habitat mostraram desempenho robusto entre as espécies, sustentando seu uso como insumo espacial para a priorização posterior.

Isso forneceu uma base ambiental confiável para integrar informação ecológica e genética.

### 3) As duas estratégias de priorização produziram resultados substancialmente diferentes

Esse foi o achado mais importante do projeto.

Ao comparar os outputs de priorização baseada em espécies com priorização informada por linhagens, **a sobreposição espacial entre eles foi de apenas 45,56%.**

**O que isso significa:** Proteger apenas a ocorrência das espécies não representaria adequadamente uma grande parcela da diversidade genética e evolutiva subjacente.

> A presença da espécie não é um proxy suficiente para a qualidade da conservação da biodiversidade.

### 4) Foram identificadas regiões de alta prioridade para conservação

O fluxo analítico destacou regiões críticas ao longo do Neotrópico onde o valor para conservação é especialmente elevado quando se considera a diversidade evolutiva.

Esses outputs podem apoiar diretamente o planejamento espacial da conservação e a priorização baseada em evidências.

## Valor para Negócios / Tomada de Decisão

Embora este projeto tenha sido desenvolvido em contexto científico, sua estrutura está altamente alinhada com aplicações reais de ciência de dados.

Este projeto demonstra como:

- transformar uma pergunta complexa de domínio em um pipeline analítico estruturado
- integrar bases heterogêneas em um framework unificado
- construir modelos preditivos e inferenciais
- comparar cenários alternativos de decisão
- produzir outputs interpretáveis para stakeholders

**Tradução equivalente para contexto de negócios:** Essencialmente, este é um projeto de inteligência para tomada de decisão, em que o objetivo é otimizar recursos limitados sob informação incompleta.

Isso é diretamente transferível para trabalhos envolvendo políticas públicas, analytics para ESG, inteligência ambiental, geospatial analytics, planejamento territorial, mapeamento de risco e avaliação de impacto.

## O que aprendi / o que este projeto diz sobre mim

Este projeto reflete minha capacidade de atuar em problemas analíticos de alta complexidade, envolvendo dados biológicos, dados espaciais, informação incompleta, incerteza de modelo e pipelines analíticos em múltiplas etapas.

Também demonstra que sou capaz de conduzir um projeto desde:

**dados brutos → pré-processamento → modelagem → inferência → análise espacial → outputs para apoio à decisão**

Essa capacidade de ponta a ponta é um dos aspectos mais fortes do meu trabalho como profissional de dados.

## Destaques Técnicos

**Principais forças demonstradas neste projeto:**

- Desenho de pipeline analítico de ponta a ponta
- Modelagem preditiva espacial e ecológica
- Inferência bayesiana e filogenética
- Integração de dados científicos estruturados e semiestruturados
- Comparação de cenários para apoio à decisão
- Comunicação clara de resultados tecnicamente complexos

---

## Resumo para Recrutadores

**Priorização da Conservação com Dados Geoespaciais e Genéticos**

Desenvolvi um fluxo de ciência de dados de ponta a ponta integrando registros de ocorrência de espécies, preditores ambientais e sequências genéticas georreferenciadas para otimizar o planejamento da conservação no Neotrópico.

**Principais contribuições:**

- Construção de modelos de distribuição de espécies para estimar adequação de habitat
- Inferência de linhagens filogeográficas com base em dados de sequenciamento genético
- Espacialização de padrões de biodiversidade em nível de linhagem
- Comparação entre estratégias de priorização baseadas apenas em espécies vs informadas por linhagens
- Geração de outputs espaciais de apoio à decisão para planejamento da conservação

**Principal resultado:** A priorização da conservação baseada apenas nas distribuições das espécies capturou apenas parte do sinal da biodiversidade — a sobreposição entre as estratégias foi de apenas **45,56%**.

**Tags:** Ciência de Dados · Análise Geoespacial · R · Modelagem Ecológica · Análise Bayesiana · Biodiversidade · Planejamento da Conservação · Priorização Espacial · Filogeografia
