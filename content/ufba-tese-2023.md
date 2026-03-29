# Evolução e Conservação de Lutrinae no Neotrópico

## Resumo

A subfamília Lutrinae (Mustelidae) agrupa algumas das espécies de mamíferos aquáticos mais ameaçadas do Neotrópico, como a **lontra neotropical** (*Lontra longicaudis*) e a **ariranha** (*Pteronura brasiliensis*). Esta tese integra dados de genética de populações, filogeografia e modelagem de distribuição de espécies (SDM) para reconstruir a história evolutiva do grupo na América do Sul e identificar unidades prioritárias de conservação.

Os resultados demonstram que eventos de vicariância associados à história climática e fluvial do continente moldaram a estruturação genética das espécies, com implicações diretas para o delineamento de áreas protegidas e estratégias de manejo adaptativo.

---

## Introdução

O Neotrópico abriga a maior biodiversidade por unidade de área do planeta, mas é também a região com maior taxa de perda de habitat. Para mamíferos aquáticos de topo de cadeia como Lutrinae, essa perda tem efeitos em cascata que vão muito além da extinção local: reverberam na estrutura dos ecossistemas aquáticos que dependem desses animais como sentinelas biológicos.

> As lontras e ariranhas não são apenas objetos de estudo — são indicadores da saúde dos rios que sustentam comunidades humanas inteiras.

---

## Capítulo 1 — Filogeografia de *Lontra longicaudis*

### Hipóteses testadas

- **H1:** A história hidrográfica da América do Sul (captura de drenagens, inversões de fluxo) gerou isolamento vicariante nas populações de *L. longicaudis*
- **H2:** O último Máximo Glacial (LGM, ~21 ka) funcionou como evento de contração e expansão de distribuição que moldou a diversidade haplotípica atual

### Métodos moleculares

Foram utilizados marcadores mitocondriais (citocromo *b*, região controle) e microssatélites nucleares em 187 amostras provenientes de 23 localidades distribuídas ao longo da distribuição da espécie.

A análise filogenética foi conduzida no software **BEAST 2.6** com relógio molecular calibrado, e a estrutura populacional foi inferida com **STRUCTURE 2.3** e **DAPC** (pacote *adegenet*, R).

### Resultados

A análise revelou **quatro clados principais** com suporte bootstrap > 90%, correspondendo aproximadamente às grandes bacias hidrográficas:

1. Bacia Amazônica ocidental
2. Bacia Amazônica oriental + costa atlântica norte
3. Bacia do Paraná-Paraguai
4. Costa atlântica sul (sul do Brasil até o Prata)

![Mapa de distribuição dos clados](../media/publications/ufba-tese-2023/mapa-clados.png)
*Distribuição geográfica dos quatro clados identificados. Os polígonos indicam as áreas de ocorrência amostrais. Imagem ilustrativa — substituir pela figura final.*

---

## Capítulo 2 — Modelagem de Distribuição de Espécies

### Cenários modelados

Foram projetados modelos de nicho ecológico para três horizontes temporais:

| Período | Referência |
|---|---|
| Presente (1970–2000) | WorldClim v2 |
| Último Máximo Glacial (~21 ka) | PMIP3/CCSM4 |
| Futuro próximo (2041–2060) | SSP2-4.5 e SSP5-8.5 |

### Algoritmo

Os modelos foram gerados com **MaxEnt 3.4** e validados com AUC (área sob a curva ROC) e TSS (True Skill Statistic).

### Projeções futuras

As simulações indicam retração de até **38% da área climaticamente adequada** para *L. longicaudis* sob o cenário SSP5-8.5 até 2060, com as maiores perdas concentradas no Cerrado e na Caatinga.

---

## Capítulo 3 — Implicações para Conservação

### Unidades de Manejo Evolutivamente Significativas (ESUs)

Com base na concordância entre estrutura genética e distribuição modelada, propõem-se **quatro ESUs** para *L. longicaudis* no Brasil, cada uma com recomendações específicas de manejo:

- **ESU Amazônica Ocidental** — proteger conectividade com Peru e Colômbia
- **ESU Amazônica Oriental** — monitorar impactos do desmatamento no Pará e Maranhão
- **ESU Platina** — corredores ribeirinhos no Paraná e Rio Grande do Sul
- **ESU Atlântica** — prioridade para restauração de mata ciliar na Mata Atlântica

### Lacunas de proteção

A análise de *gap* demonstra que apenas **17% das ocorrências genéticas únicas** estão dentro de unidades de conservação federais, reforçando a necessidade de expansão do sistema de áreas protegidas.

---

## Considerações Finais

Esta tese não encerra as questões sobre Lutrinae no Neotrópico — abre portas. As ferramentas integradas aqui (genômica de populações + SDM + análise de gap) oferecem um protocolo replicável para qualquer grupo taxonômico, com potencial de aplicação direta em políticas públicas de conservação.

O rio que a lontra habita é o mesmo que abastece a cidade. Proteger uma é proteger o outro.
