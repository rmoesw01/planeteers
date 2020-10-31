# [Climateers](https://rmoesw01.github.io/Climateers/)
**_Created by [Maria Dong](https://github.com/mariajdong), [Ryan Jones](https://github.com/Jonsey1696), [Rebecca Leeds](https://github.com/rmoesw01), & [Amber Pizzo](https://github.com/apizzo1)._**

A site that analyzes and predicts climate change and its effects.

**Access the deployed page [here](https://rmoesw01.github.io/Climateers/).**

## Background
As our world progresses technologically, the health of our planet degrades day by day. Our group's aim was to analyze the trends seen today and model how our world could be affected by climate change in the future via machine learning.

## Topics, Models, & Analyses
We explored several different phenomena and questions for our models to answer.

### Temperature & Emissions
_Is there a link between CO<sub>2</sub> emissions and global temperature?_
Maximum temperature data collected from the [National Oceanic and Atmospheric Administration](https://www.ncdc.noaa.gov/cdo-web/datasets) as global summary of the year from multiple climate stations around the world.  The values were then averaged together for the years 1880 to 2010.  A linear regression machine learning model was used with the inputs listed below.Originally, the snow data was also used as an input for all the other outputs, but because it varied so greatly from year to year it was not a reliable input and caused the testing scores to decrease significantly.
- Maximum Temperature (TMAX):
  - Inputs: historical Gas Fuel CO<sub>2</sub> level,	Liquid Fuel CO<sub>2</sub> level,	Solid Fuel CO<sub>2</sub> level,	Cement CO<sub>2</sub> level,	Gas Flaring CO<sub>2</sub> level	population,	sea level,	extreme precipitation, precipitation, minimum temperature
  - Testing score: **0.91**

### Ocean Impacts
_How have the world's oceans been affected?_

#### Sea level modeling
A linear regression machine learning model was used to predict the future trend of sea levels, as historical sea level temperatures displayed a linear increase over time. Input factors included historical cement emissions, global temperature, population, sea temperature change, and CO2 emissions. When plotting this model with predictions to the year 2200, a steady increase over time can be seen. 

The testing score for this model was **0.98**, indicating that this model is, in fact, reliable. Future sea levels were also predicted by fitting a trend line to historical sea level data. The result of this simplistic linear regression for the year 2200 was within 1.5in of the result for the machine learning model for the same year, which also helps validate the machine learning model.

#### Sea temperature modeling
Noting that the historical sea temperature trend is fairly linear, a linear regression machine learning model was employed to predict the future trend for sea temperature. The input factors used for this model were historical global temperature, population, glacier mass, and sea level changes. When visualizing this model with predictions to the year 2200, the sea temperature is expected to continue to increase at its current rate. The testing score for this model was **0.97**, and therefore can be considered a very reliable model. 

### Weather Impacts
_How have weather and natural disasters responded to climate change? Should we expect more extreme weather systems?_

#### Precipitation & Snow Modeling
Precipitation and Snow data collected from the [National Oceanic and Atmospheric Administration](https://www.ncdc.noaa.gov/cdo-web/datasets) as global summary of the year from multiple climate stations around the world.  Those values were then averaged together for the years 1880 to 2010.  A linear regression machine learning model was used with the inputs listed below.Originally, the snow data was also used as an input for all the other outputs, but because it varied so greatly from year to year it was not a reliable input and caused the testing scores to decrease significantly.  The other impact the highly varied snow data had was when making predictions for the future.  For all other outputs, the most recent 40 years was used as the basis for the predictions, but for the snow data the most recent 100 years had to be used to see the larger overall trend reliably.
- Snow (SNOW):
  - Inputs: historical Gas Fuel CO<sub>2</sub> level,	Liquid Fuel CO<sub>2</sub> level,	Solid Fuel CO<sub>2</sub> level,	Cement CO<sub>2</sub> level,	Gas Flaring CO<sub>2</sub> level,	population,	sea level,	extreme precipitation, precipitation, maximum temperature, minimum temperature
  - Testing score: **0.91**
- Precipitation (PRCP):
  - Inputs: historical Gas Fuel CO<sub>2</sub> level,	Liquid Fuel CO<sub>2</sub> level,	Solid Fuel CO<sub>2</sub> level,	Cement CO<sub>2</sub> level,	Gas Flaring CO<sub>2</sub> level	population,	sea level,	extreme precipitation, precipitation, maximum temperature, minimum temperature
  - Testing score: **0.87**

#### Hurricane Modeling
Hurricane data  collected from the National Hurricane Center ranged back to the 1850s, but did not include a storm intensity category, likely because the method to categorize hurricanes, the [Saffir-Simpson Hurricane Wind Scale](https://en.wikipedia.org/wiki/Saffir%E2%80%93Simpson_scale), was not introduced until 1971. Therefore, unsupervised learning was utilized, in the form of a K-means clustering model, to group hurricanes by their minimum pressure and maximum windspeed. This model was optimized to have four categories of hurricane intensity. 

From there, linear regression machine learning models were used to predict the frequency of total hurricanes, as well as the frequency of each category of hurricane. Most models prove to be relatively reliable, with testing scores at 0.75 and above. However, the model for category 4 hurricanes shows a less reliable testing score of 0.68. The k-means clustering model shows the category 4 data as the most diverse of the 4 categories, with both maximum wind speed and minimum pressure having a larger range than any of the other categories. This model could be further optimized by adding more categories, and thus reducing the large range in this particular category.  This may lead to more reliable modeling of future trends. The model inputs and testing scores can be seen below. 
- Total hurricanes:
    - Inputs: historical gas fuel emissions, sea temperature changes, global temperature, and sea level changes
    - Testing score: **0.83**
- Category 1 hurricanes: 
    - Inputs: historical gas fuel emissions, sea temperature changes, global temperature, and sea level changes
    - Testing score: **0.79**
- Category 2 hurricanes:
    - Inputs: historical gas fuel emissions, cement emissions, global temperature, sea temperature changes, and sea level changes
    - Testing score: **0.75**
- Category 3 hurricanes: 
    - Inputs: historical gas fuel emissions, sea temperature changes, global temperature, and sea level changes  
    - Testing score: **0.78**
- Category 4 hurricanes:  
    - Inputs: historical gas fuel emissions, liquid fuel emissions, global temperature, sea temperature changes, and sea level changes  
    - Testing score: **0.68**

#### Tornado Modeling  
Linear regression models were used to predict the frequency of total tornadoes, as well as the frequency of tornado magnitudes 0 and 2 (based on the [Fujita Scale](https://en.wikipedia.org/wiki/Fujita_scale)). Reliable models could not be created for magnitude 1, 3, 4, or 5 tornadoes. This is likely because the historical data for tornadoes of these magnitudes shows very consistent numbers from year to year, making it difficult to predict their future with the global warming factors employed in this project that show a steady increase over time. This indicates tornadoes of these magnitudes are not reliant on the traditional indicators of global warming. The inputs for the models that were created, as well as their testing scores, can be seen below. 
- Total tornadoes:
    - Inputs: historical gas fuel emissions, cement emissions, global temperature, population, CO2 emissions, and sea level changes
    - Testing score: **0.69**
- Magnitude 0 tornadoes: 
    - Inputs: historical gas fuel emissions, liquid fuel emissions, cement emissions, global temperature, population, and CO<sub>2</sub> emissions
    - Testing score: **0.82**
- Magnitude 2 tornadoes:
    - Inputs: historical gas fuel emissions, liquid fuel emissions, cement emissions, global temperature, population and sea temperature changes 
    - Testing score: **0.74**

### Public Sentiment
_How does the public feel about climate change? Can we replicate online opinions with deep learning?_

In the U.S., the existence of climate change and the role of CO2 emissions have become a highly partisan topic. In a 2019 Pew Research survey, Democratic-associated respondents answered that human activity contributed "a great deal "to climate change _(76.8%)_ as opposed to the Republican-associated _(20.1%)_.

Furthermore, among 27 surveyed countries, the U.S. ranked in the lower-half of percent of respondents who consider climate change to be a "major threat" _(58%)_, and had the fourth-highest percentage _(18%)_ of respondents stating that climate change is "not a threat".

To measure online opinions on climate via Twitter, we explored two particularly opinionated hashtags: **#climatechangeisreal** and **#climatechangehoax**. We compiled lists of tweets for each tag from January 2014 to October 2020 that were retweeted at least 100 times.

We then used the module fastAI to create a language learning model based on the tweets and the [AWD-LSTM](https://yashuseth.blog/2018/09/12/awd-lstm-explanation-understanding-language-model/) recurrent neural network. The optimal learning rate was selected for [one-cycle cyclical learning](https://iconof.com/1cycle-learning-rate-policy/).

Finally, "Tweets" were created by using the model to predict a given number of words after being given a word or phrase. We used a TF-IDF vectorizer to determine some of the most n-grams for each hashtag, and chose some of them to feed the language model.

### Awareness
_What parts of our behavior could we change? What is the cost/effectiveness of renewable energy? And how are we directly impacting the CO2 concentration levels?_
* CO2 - The features of this model are related to different fossil fuel emission concentrations in the atmosphere and variations in global temperature. As a multivariate regression, correlation between these datapoints is proved to be linear. One of the major contributors to these emmisions is the agricultural supply chain that serves the World's population. Changing land use to meet the demand of most current diets and consuming farm sourced animal products has created a major problem of how we interact with the environment. This results in our rate of polution pairing with population growth to a degree that is dangerous for our future.

Investing in renewable energy is the one of the best chances society has to combat the alarming changes seen on the planet today. Over the last several decades the generation of renewable energy has been slowly increasing, with hydropower as a frontrunner. However, as of 2019, the energy generated by hydropower was just above 4200 TWh, which pales in comparison to the 40,000- 50,000 TWh of energy consumed in 2019 by each of our main sources of non-renewable energy: gas, oil, and coal. This indicates that, while renewable energy generation is increasing over time, these technologies still need to mature before any significant global impacts can be seen.

When looking at the return on investment for hydropower, solar energy, and wind energy, it can be seen that hydropower seems to give the biggest payout. However, hydropower cannot be the only way forward in the renewable energy arena, as it can only be used in specific areas (dams and reservoirs) and can pose a threat to the habitats nearby. Therefore, investments in wind and solar energy must continue, and likely, increase, to improve their efficiencies and reliabilities.

We trained our models to predict and validate indicators of the effects of climate change to answer the following questions:

---


How have the worlds oceans been affected?

This is consistent with rising global temperatures, both atmospheric and oceanic. This also directly contributes to rising sea levels, which in turn leads to flooding and higher likelihood of hurricane formation.


Should we expect more extreme weather systems?

What parts of our behavior could we change?

Opportunities to slow down the consumption of farmed animals which also would decrease the rate in which land is changed for housing livestock.


What is the cost/reward of renewable energy?

How are we directly impacting the CO2 concentration levels?

Changing landscape for agricultural purposes often leads to an unstable phosphate level in surrounding waterways. Land use change & animal waste accounts for 83% of greenhouse gas emissions from agriculture.

## Resources, Libraries, & Tools

**Data sources:**
* [Our World in Data](https://ourworldindata.org):
  * [Historical CO<sub>2</sub> levels & emissions](https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions);
  * [Agricultural data](https://ourworldindata.org/environmental-impacts-of-food)
  * [Renewable Energy data](https://ourworldindata.org/renewable-energy)
  * [Energy data](https://ourworldindata.org/energy)
* [Datahub.io](https://datahub.io/collections/climate-change):
  * [Sea level changes](https://datahub.io/core/sea-level-rise)
  * [Fossil fuel emissions](https://datahub.io/core/co2-fossil-global);
* [National Oceanic and Atmospheric Administration](https://www.ncdc.noaa.gov/cdo-web/datasets)
  * [Climate data](https://www.ncdc.noaa.gov/cdo-web/webservices/v2)
  * [Tornado data](https://oasishub.co/dataset/usa-tornado-historical-tracks-noaa/resource/b2a11100-eac5-4d10-869a-87ba064ede2d#)
  * [Hurricane data](https://www.kaggle.com/noaa/hurricane-database?select=atlantic.csv)
* [NSIDC](https://nsidc.org/data/g02135) for northern sea ice extent geoTIFFs
* [Pew Research](https://www.pewresearch.org/):
  * [U.S. opinions on climate](https://www.pewresearch.org/science/dataset/american-trends-panel-wave-55/);
  * [World opinions on climate](https://www.pewresearch.org/global/dataset/spring-2018-survey-data/)
* [International Energy Agency](https://www.iea.org/reports/world-energy-investment-2019/power-sector) for hydropower investment data
* [Environmental Protection Agency](https://www.epa.gov/climate-indicators/climate-change-indicators-sea-surface-temperature) for sea temperature data

**Libraries:**
* [amCharts](https://www.amcharts.com/) for all visualizations
* [Scikit.Learn](https://scikit-learn.org/stable/index.html):
  * [Multivariate linear regression](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html);
  * [TF-IDF vectorizer](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html);
* [Twint](https://github.com/twintproject/twint) for pulling Tweet information from [Twitter](https://twitter.com)
* [fastai.text](https://fastai1.fast.ai/text.html) for text analysis & deep learning
* [pytorch](https://pytorch.org/) for NLP models
* [QGIS](https://qgis.org/en/site/) for vectorizing geoTIFFs & converting to geoJSON, [mapshaper](https://mapshaper.org/) for simplifying & formatting JSON polygons
* [pyreadstat](https://pypi.org/project/pyreadstat/) for reading `.sav` files in Python  

**Tools & languages:** JavaScript, HTML, CSS, Python, Pandas, Jupyter Notebook

