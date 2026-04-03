# Modelagem Espacial de Risco Socioambiental: Foz do Amazonas

> Integrando biodiversidade, vulnerabilidade social e dados oceanográficos para identificar zonas críticas de conflito

## Visão Geral do Projeto

Desenvolvi um modelo espacial para avaliar o risco de derramamento de óleo na Foz do Amazonas, integrando dados ambientais, biodiversidade, vulnerabilidade social e variáveis oceanográficas para identificar áreas de maior sensibilidade e conflito.

O objetivo foi transformar um problema socioambiental altamente complexo em uma **ferramenta quantitativa de suporte à decisão**, com aplicação em planejamento espacial marinho, análise de risco e políticas públicas.

## Por que este projeto importa

A Foz do Amazonas concentra um dos ecossistemas marinhos mais biodiversos e socialmente sensíveis do planeta. A pressão crescente por exploração petrolífera nessa região levanta questões críticas sobre risco ambiental, impacto social e tomada de decisão baseada em evidências.

Este projeto responde a essa questão com dados:

> Quais áreas seriam atingidas em caso de derramamento, e com que probabilidade?

## O que eu fiz

### 1) Estruturação da base geoespacial

Compilei e integrei dados públicos de múltiplas fontes, cobrindo:

- áreas prioritárias para conservação (MMA)
- territórios indígenas
- vulnerabilidade social
- blocos de exploração de petróleo (ANP)
- recifes, estuários, mamíferos marinhos, aves e peixes
- variáveis oceanográficas (correntes, batimetria)

### 2) Modelagem probabilística de dispersão de óleo

Desenvolvi em Python um modelo probabilístico de dispersão de óleo, incorporando:

- distância geográfica a partir dos blocos de exploração
- direção e velocidade de correntes marinhas
- propriedades físico-químicas do óleo
- cenários de incerteza via **ensemble simulation**

### 3) Análise de sobreposição espacial e mapeamento de risco

Produzi mapas de risco e sobreposição espacial em QGIS, identificando:

- áreas com maior probabilidade de impacto ecológico
- zonas de sobreposição entre exploração e biodiversidade
- regiões de alta vulnerabilidade social expostas ao risco
- pontos críticos de conflito entre conservação e atividade econômica

## Principais Resultados

O modelo mostrou que, em um cenário de derramamento a partir dos blocos ofertados no 5° Rodada de Licitações:

| Área / Grupo afetado | Probabilidade de atingimento |
|----------------------|------------------------------|
| Sistema Recifal Amazônico (GARS) | > 55% |
| Áreas prioritárias para peixes | > 55% |
| Áreas prioritárias para mamíferos marinhos | > 55% |
| Áreas prioritárias para aves marinhas | > 55% |
| Estuários | > 22% |
| Territórios indígenas | > 22% |
| Populações em alta vulnerabilidade social | > 22% |

Além disso, foi identificada **forte sobreposição entre blocos de exploração e áreas ambientalmente sensíveis**, evidenciando alto potencial de conflito entre conservação e exploração econômica.

## Habilidades Demonstradas

- Python para modelagem ambiental
- Análise espacial e geoprocessamento
- Modelagem probabilística e simulação de cenários
- Integração de bases heterogêneas (ecológicas, sociais, oceanográficas)
- Risk analytics
- Visualização espacial de dados
- Tomada de decisão orientada por dados

## Stack Tecnológico

**Python** · Jupyter Notebook · **QGIS** · Dados geoespaciais públicos · Modelagem espacial · Simulação de incerteza

## Diferencial do Projeto

Este projeto demonstra a capacidade de:

- transformar um problema real e multidimensional em modelo analítico aplicável
- integrar dados ecológicos, sociais e espaciais em uma estrutura coerente
- construir soluções com potencial de uso em ESG, análise de risco, sustentabilidade, meio ambiente, planejamento territorial e políticas públicas

---

## Resumo para Recrutadores

**Modelagem Espacial de Risco — Foz do Amazonas**

Desenvolvi um modelo espacial probabilístico para avaliar o risco de derramamento de óleo na Foz do Amazonas, integrando dados de biodiversidade, vulnerabilidade social, variáveis oceanográficas e áreas de exploração petrolífera.

**Principais contribuições:**

- Estruturação de base geoespacial multi-fonte
- Desenvolvimento de modelo probabilístico de dispersão (Python + ensemble simulation)
- Mapeamento de zonas críticas de conflito socioambiental (QGIS)
- Quantificação de probabilidades de impacto por área e grupo biológico/social

**Principal resultado:** > 55% de probabilidade de o óleo atingir o Sistema Recifal Amazônico e áreas prioritárias de biodiversidade; > 22% de probabilidade de atingir estuários, territórios indígenas e populações vulneráveis.

**Tags:** Ciência de Dados · Python · Análise Geoespacial · Modelagem Probabilística · QGIS · Risk Analytics · ESG · Sustentabilidade · Planejamento Espacial Marinho
