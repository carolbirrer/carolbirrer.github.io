# Metabolic Rift in Global Agriculture

> Quantifying agricultural inefficiency and sustainability trade-offs at global scale

## Project Overview

In this doctoral research project, I developed a global-scale quantitative analysis to investigate a core question in agricultural sustainability: **Have agricultural productivity gains kept pace with rising synthetic fertilizer use?**

Drawing on metabolic rift theory, I built an empirical framework to test whether modern agricultural systems are becoming more efficient — or simply more dependent on external inputs over time.

Using historical data from 1961 to 2022, across 211 countries and six of the world's major agricultural commodities, I developed an analytical pipeline to measure, compare, and map the relationship between:

- fertilizer use (N, P₂O₅, K₂O)
- agricultural productivity gains
- relative efficiency across countries and regions
- structural inequalities between the Global North and Global South

The result was the creation of an **original quantitative indicator of metabolic rift** — transforming a complex theoretical hypothesis into a comparable, scalable, data-driven metric.

## Why This Project Matters

> Are we producing more food more efficiently — or just increasing input dependence to sustain the system?

This question has direct applications in:

- sustainability and ESG
- agritech
- food systems analytics
- climate risk
- policy intelligence
- resource efficiency
- environmental impact modeling

## What I Did

### 1) Built a global analytical dataset

I structured a historical dataset using FAO data for:

- **211 countries**, covering **1961–2022**
- **6 major global commodities:** maize, rice, wheat, soybean, sugarcane, potato
- **3 fertilizer classes:** Nitrogen (N), Phosphorus (P₂O₅), Potassium (K₂O)

The pipeline included gap treatment, time series alignment, and standardization to ensure comparability across countries and decades.

**Skills demonstrated:** data wrangling · temporal harmonization · handling incomplete historical datasets · composite indicator construction · longitudinal/panel data organization

### 2) Engineered a custom sustainability metric

I developed a metabolic rift indicator, calculated as the ratio between:

$$\text{Metabolic Rift} = \frac{\Delta \text{Fertilizer}}{\Delta \text{Productivity}}$$

This metric quantifies — for each country — how much fertilizer use grows relative to productivity gains.

| Indicator value | Interpretation |
|----------------|---------------|
| High | Greater input dependence to sustain productivity gains |
| Low | Greater efficiency |
| Between 0 and 1 | Indicator of higher relative sustainability |

**Skills demonstrated:** feature engineering · analytical indicator design · operationalizing complex concepts into measurable metrics · applied modeling on real-world problems

### 3) Modeled long-term temporal trends

For each country, I estimated the temporal variation in productivity and input use through linear regression, extracting comparable trend coefficients across countries and variables.

**Approach:**

- country-level linear regressions
- filtering by minimum observation robustness
- systematic extraction of slope coefficients
- cross-variable comparison between inputs and productivity

**Skills demonstrated:** statistical modeling · batch model fitting · time series analysis · large-scale coefficient interpretation

### 4) Generated global comparative insights

I compared patterns across different scales:

- global aggregate
- country-level
- major agricultural producers
- Global North vs. Global South

I also used statistical tests to investigate systematic differences between regions of the global food system.

**Skills demonstrated:** comparative analytics · statistical inference · hypothesis testing · geopolitical pattern segmentation · data-driven analysis of structural inequalities

### 5) Spatial intelligence

The project incorporated a spatial dimension by mapping the global distribution of metabolic rift, identifying geographic patterns of inefficiency and inequality.

**Skills demonstrated:** geospatial interpretation · data visualization · spatial pattern recognition · visual communication of complex results

## Key Findings

### Main result

Agricultural productivity increased globally over recent decades — but **fertilizer use grew even faster**.

### Standout findings

- Global fertilizer use increased substantially across the study period
- Productivity gains did not keep pace with this growth proportionally
- **The global NPK-to-productivity trend ratio was approximately 2.8**
- In many countries, fertilizer dependence far outpaced productivity gains
- Regions of the Global South showed some of the most intense metabolic rift patterns

### Interpretation

In practice, this means that modern agricultural systems are, in many contexts, purchasing productivity through increasing ecological and material cost.

## Tech Stack

**Core tools:**

- R
- tidyverse
- statistical modeling
- data visualization
- time series analysis
- cross-country comparative analysis

**Data skills demonstrated:**

- cleaning & preprocessing
- feature engineering
- statistical modeling
- longitudinal data analysis
- large-scale comparative analysis
- reproducible research workflow
- domain-informed analytical design

## Business / Decision-Making Value

This project positions its author as someone capable of working in:

- Data Science
- ESG Analytics
- Climate / Sustainability Intelligence
- Agritech Analytics
- Public Policy Data
- Environmental Risk & Resource Modeling

## What This Project Says About Me

This project reflects my ability to transform complex socio-environmental questions into scalable, data-driven analytical frameworks — combining statistical rigor, domain expertise, and decision-oriented insight generation.

---

## Short Recruiter-Friendly Summary

**Metabolic Rift in Global Agriculture**

Developed a global-scale quantitative analysis to evaluate whether agricultural productivity gains have kept pace with increasing synthetic fertilizer use.

**Main contributions:**

- Built and standardized a large historical agricultural dataset (FAO, 211 countries, 1961–2022)
- Designed a custom sustainability efficiency metric
- Modeled country-level temporal trends using regression
- Compared structural patterns across regions and production systems
- Generated interpretable global insights on agricultural dependence and inefficiency

**Main insight:** Agricultural productivity increased globally — but fertilizer dependence grew at ~2.8× the rate, suggesting a widespread pattern of declining ecological efficiency in modern agricultural systems.

**Tags:** Data Science · R · Feature Engineering · Statistical Modeling · Time Series Analysis · Sustainability · ESG · Agritech · FAO Data · Global Comparative Analysis
