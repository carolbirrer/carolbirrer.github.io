# Geospatial Data Science for Biodiversity Conservation

> Integrating genetic, ecological, and spatial data to support conservation decision-making

## Project Overview

This project applied data science, spatial modeling, and biological inference to identify priority areas for biodiversity conservation across the Neotropics.

The core objective was to evaluate whether conservation planning based only on species occurrence is sufficient, or whether incorporating intraspecific genetic structure changes conservation priorities.

To answer this, I developed a workflow integrating:

- species occurrence data
- environmental predictors
- georeferenced genetic sequences
- species distribution models
- phylogeographic inference
- spatial prioritization algorithms

The result was a decision-support framework for conservation planning that bridges ecological modeling and data-driven spatial analysis.

## Why this project matters

Conservation decisions are often made using species presence alone, which can overlook hidden evolutionary diversity within each species.

From a data science perspective, this creates a real analytical problem:

> How can we combine heterogeneous biological and spatial datasets to produce better conservation decisions?

This project addresses that challenge by transforming fragmented ecological and genetic information into actionable spatial intelligence.

## The analytical question

**Can species-level conservation planning adequately protect intraspecific genetic diversity?**

To answer this, I compared two conservation prioritization strategies:

| Scenario | Approach |
|----------|----------|
| Scenario 1 | Prioritization based only on species distributions |
| Scenario 2 | Prioritization based on species distributions + phylogeographic lineages |

This comparison allowed me to quantify how much relevant biodiversity information is lost when genetic structure is ignored.

## My role

I was responsible for the end-to-end analytical workflow, including:

- data collection and curation
- spatial and environmental preprocessing
- species distribution modeling
- phylogeographic and genetic structure analysis
- lineage spatialization
- spatial prioritization and scenario comparison
- interpretation and communication of results

## Dataset

### Biological scope

The project focused on four Neotropical otter species:

- *Lontra longicaudis*
- *Lontra felina*
- *Lontra provocax*
- *Pteronura brasiliensis*

### Geographic scope

The full study area covered the Neotropics, from Mexico to southern South America.

### Data sources

The analysis integrated three main data layers:

**1. Species occurrence data**
Used to estimate geographic distributions and ecological suitability.

**2. Environmental and climatic variables**
Bioclimatic predictors were used to model habitat suitability, including:

- temperature seasonality
- annual precipitation
- dry-month precipitation
- wet-quarter precipitation
- annual thermal range
- daily thermal amplitude

**3. Genetic data**
Georeferenced mitochondrial sequences were compiled to reconstruct phylogeographic structure and identify independent evolutionary lineages.

## Tech Stack

### Languages & tools

- R
- QGIS
- Maxent
- Wallace
- Zonation
- FigTree

### R packages / analytical libraries

- DECIPHER
- rhierbaps
- phangorn
- phytools

### Core technical competencies demonstrated

- geospatial data integration
- ecological niche modeling
- predictive modeling
- Bayesian clustering
- phylogenetic inference
- spatial prioritization
- environmental raster processing
- scenario comparison and decision support

## Methodology

### 1) Data integration and preprocessing

The first stage involved consolidating and harmonizing multiple types of biological and spatial data.

This required:

- cleaning and standardizing occurrence records
- integrating environmental raster layers
- associating genetic records with geographic coordinates
- preparing inputs for spatial modeling and prioritization

**Data science relevance:** This stage reflects strong experience in multi-source data integration, spatial preprocessing, feature preparation for downstream modeling, and working with messy scientific datasets.

### 2) Species Distribution Modeling

I built species distribution models (SDMs) to estimate habitat suitability across the study region.

**Approach:**

- algorithm: Maxent
- spatial partitioning for validation
- bias control through background randomization
- occurrence filtering using spatial thinning
- environmental predictor selection to reduce redundancy

**What this demonstrates:** This step highlights skills in predictive ecological modeling, spatial validation strategies, bias mitigation, model tuning and regularization, and translating raw occurrence data into spatial predictions.

### 3) Genetic structure and phylogeographic inference

To identify meaningful evolutionary units, I reconstructed within-species genetic structure using mitochondrial sequence data.

**Analytical procedures:**

- sequence alignment and curation
- Bayesian clustering of genetic groups
- phylogenetic reconstruction
- comparison of tree-building approaches
- interpretation of lineage divergence patterns

**Why this is important:** From a data science perspective, this stage demonstrates the ability to work with non-tabular biological data, latent structure inference, Bayesian analytical frameworks, and comparative model-based interpretation. This is especially valuable because it shows experience beyond standard tabular machine learning.

### 4) Spatialization of evolutionary lineages

One of the most technically interesting parts of the project was expanding lineage-level information into geographic space.

Because not all occurrence records had genetic sampling, I developed a workflow to infer the probable spatial distribution of each lineage based on:

- known genetic sampling points
- modeled environmental suitability
- spatial continuity and ecological plausibility

**Why this matters:** This step demonstrates a critical data science skill — using indirect inference to extend incomplete datasets into usable analytical products. In practice, this is analogous to solving sparse-data problems using model-based spatial interpolation and biological constraints.

### 5) Spatial prioritization

The final stage transformed all model outputs into a decision-support product.

**Tool used:** Zonation

**Objective:** To rank landscapes according to their conservation importance under different biodiversity representation strategies.

**Scenarios compared:**

- species-only prioritization
- lineage-informed prioritization

**Output:** Spatially explicit conservation priority maps that can be used to inform protected area planning, biodiversity policy, ecological monitoring priorities, and conservation investment decisions.

## Key Results

### 1) Multiple hidden evolutionary lineages were identified

The project revealed substantial within-species genetic structure, showing that biodiversity was not evenly distributed across geographic space or homogeneous within species.

This means that treating each species as a single homogeneous unit would hide biologically important variation.

### 2) Species distribution models produced strong predictive performance

The habitat suitability models showed robust performance across species, supporting their use as spatial inputs for downstream prioritization.

This provided a reliable environmental basis for integrating ecological and genetic information.

### 3) The two prioritization strategies produced substantially different results

This was the most important finding of the project.

When comparing the outputs of species-based prioritization with lineage-informed prioritization, **the spatial overlap between them was only 45.56%.**

**What this means:** Protecting species occurrence alone would fail to adequately represent a large share of the underlying genetic and evolutionary diversity.

> Species presence is not a sufficient proxy for biodiversity conservation quality.

### 4) High-priority conservation regions were identified

The workflow highlighted critical regions across the Neotropics where conservation value is especially high when evolutionary diversity is considered.

These outputs can directly support spatial conservation planning and evidence-based prioritization.

## Business / Decision-Making Value

Although this project was developed in a scientific context, its structure is highly aligned with real-world data science challenges.

This project demonstrates how to:

- turn a complex domain question into a structured analytical pipeline
- integrate heterogeneous datasets into a unified framework
- build predictive and inferential models
- compare alternative decision scenarios
- produce interpretable outputs for stakeholders

**Equivalent business-facing translation:** This is essentially a decision intelligence project, where the goal is to optimize limited resources under incomplete information.

That is directly transferable to work involving public policy, ESG analytics, environmental intelligence, geospatial analytics, territorial planning, risk mapping, and impact evaluation.

## What I learned / what this project says about me

This project reflects my ability to work on high-complexity analytical problems involving biological data, spatial data, incomplete information, model uncertainty, and multi-stage analytical pipelines.

It also demonstrates that I can move from:

**raw data → preprocessing → modeling → inference → spatial analysis → decision-support outputs**

That end-to-end capacity is one of the strongest aspects of my work as a data professional.

## Technical Highlights

**Key strengths demonstrated in this project:**

- End-to-end analytical pipeline design
- Spatial and ecological predictive modeling
- Bayesian and phylogenetic inference
- Integration of structured and semi-structured scientific data
- Scenario comparison for decision support
- Clear communication of technically complex results

---

## Short Recruiter-Friendly Summary

**Conservation Prioritization Using Geospatial and Genetic Data**

Developed an end-to-end data science workflow integrating species occurrence records, environmental predictors, and georeferenced genetic sequences to optimize conservation planning across the Neotropics.

**Main contributions:**

- Built species distribution models to estimate habitat suitability
- Inferred phylogeographic lineages using genetic sequence data
- Spatialized lineage-level biodiversity patterns
- Compared species-only vs lineage-informed prioritization strategies
- Generated spatial decision-support outputs for conservation planning

**Main result:** Conservation prioritization based only on species distributions captured only part of the biodiversity signal — the overlap between strategies was only **45.56%**.

**Tags:** Data Science · Geospatial Analysis · R · Ecological Modeling · Bayesian Analysis · Biodiversity · Conservation Planning · Spatial Prioritization · Phylogeography
