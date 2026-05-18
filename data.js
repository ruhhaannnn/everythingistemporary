const database = {
    paper1: [
        {
            question: "[P1-Q1] Consider the following statements regarding the Constitution of India:\n\n1. The Preamble is recognized as a part of the Constitution and can be amended under Article 368.\n2. Economic Justice is explicitly guaranteed as a Fundamental Right under Part III of the Constitution.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "A",
            explanation: "Statement 1 is a correct historical and legal fact established by the Kesavananda Bharati case (1973). Statement 2 uses a Location Swap trap; Economic Justice is a constitutional ideal mentioned in the Preamble and Directive Principles (Part IV), not in the Fundamental Rights (Part III)."
        },
        {
            question: "[P1-Q2] Consider the following statements regarding the Monetary Policy in India:\n\n1. A decrease in the Repo Rate by the Reserve Bank of India generally injects liquidity into the market.\n2. The Monetary Policy Committee (MPC) is chaired solely by the Union Finance Minister.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "A",
            explanation: "Statement 1 is a correct, moderate macroeconomic principle (using the safe word 'generally'). Statement 2 uses an Authority Swap and the extreme word 'solely'. The MPC is chaired by the Governor of the Reserve Bank of India, not the Finance Minister."
        },
        {
            question: "[P1-Q3] With reference to India's biodiversity and protected areas, consider the following statements:\n\n1. The Asiatic Lion is naturally found in exactly three states across the Indian subcontinent.\n2. Commercial eco-tourism and resource extraction are strictly prohibited in the designated core area of a Biosphere Reserve.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses a Specific Number Swap trap ('exactly three'). The Asiatic Lion is naturally found only in one state (Gujarat, specifically the Gir National Park). Statement 2 correctly describes the strict, absolute legal protections mandated for the core zones of Biosphere Reserves."
        },
        {
            question: "[P1-Q4] Consider the following statements regarding the historical Government of India Acts:\n\n1. The Government of India Act 1919 introduced the system of dyarchy at the provincial level.\n2. The Indian National Congress unconditionally accepted all the provisions of the Government of India Act 1935.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "A",
            explanation: "Statement 1 is a factually correct historical statement. Statement 2 uses the extreme modifiers 'unconditionally' and 'all'. The Congress heavily criticized the Act of 1935, particularly the lack of genuine responsible government at the center, rejecting its federal structure."
        },
        {
            question: "[P1-Q5] Consider the following statements regarding the Indian Monsoon and global climate phenomena:\n\n1. The occurrence of an El Niño event always results in severe drought conditions across the entire Indian landmass.\n2. The Inter Tropical Convergence Zone (ITCZ) shifts north and south of the equator, tracking the apparent movement of the sun.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses the extreme words 'always' and 'entire'. While El Niño is generally associated with weaker monsoons, it does not guarantee a drought every time, and regional variations exist. Statement 2 correctly describes the dynamic, shifting nature of the ITCZ, which drives the monsoon mechanism."
        },
        {
            question: "[P1-Q6] Consider the following statements regarding the passing of a Money Bill in the Indian Parliament:\n\n1. The Rajya Sabha has the exclusive power to reject or amend a Money Bill within 14 days of receiving it.\n2. The President of India cannot return a Money Bill for reconsideration of the Houses.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 is an Authority Swap and extreme trap. The Rajya Sabha has NO power to reject or amend a Money Bill; they can only make recommendations. Statement 2 is factually correct; since Money Bills are introduced with the prior permission of the President, they cannot be returned for reconsideration."
        },
        {
            question: "[P1-Q7] With reference to the Indian economy, consider the following statements regarding the Wholesale Price Index (WPI) and Consumer Price Index (CPI):\n\n1. The WPI is published solely by the Reserve Bank of India to formulate monetary policy.\n2. The WPI does not capture changes in the prices of services, whereas the CPI does.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses 'solely' and an Authority Swap. WPI is published by the Office of Economic Adviser (Ministry of Commerce and Industry), not the RBI. Statement 2 is a correct structural difference between the two indices."
        },
        {
            question: "[P1-Q8] Consider the following statements regarding the Quit India Movement of 1942:\n\n1. The movement was completely peaceful and devoid of any underground parallel governments.\n2. The Communist Party of India officially boycotted the movement and supported the British war effort.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses extreme modifiers ('completely peaceful', 'devoid'). The movement saw massive violence, destruction of government property, and the establishment of parallel governments (like in Ballia and Satara). Statement 2 is a correct historical fact regarding the CPI's stance after Germany attacked the USSR."
        },
        {
            question: "[P1-Q9] With reference to environmental protection, consider the following statements regarding the National Air Quality Index (AQI):\n\n1. The AQI measures exactly twelve specific pollutants to calculate urban air quality.\n2. Carbon Dioxide (CO2) is explicitly listed as one of the core pollutants monitored under the AQI framework.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "D",
            explanation: "Statement 1 uses a Specific Number Swap; the AQI tracks exactly 8 pollutants, not 12. Statement 2 is a classic conceptual trap; CO2 is a greenhouse gas causing global warming, but it is NOT classified as a toxic air pollutant under the AQI (which tracks CO, SO2, NO2, etc.)."
        },
        {
            question: "[P1-Q10] Consider the following statements regarding modern biotechnology:\n\n1. CRISPR-Cas9 is a technology used exclusively for cloning endangered mammalian species.\n2. Recombinant DNA technology allows genes to be transferred across completely different biological species.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses the extreme trap 'exclusively'. CRISPR-Cas9 is a broad gene-editing tool used in agriculture, human medicine, and disease treatment, not just cloning. Statement 2 describes the correct, fundamental capability of recombinant DNA (transgenics)."
        },
        {
            question: "[P1-Q11] Consider the following statements regarding the physical geography of India:\n\n1. All the major peninsular rivers of India originate in the Western Ghats and flow eastwards into the Bay of Bengal.\n2. The Narmada and Tapi rivers flow through rift valleys.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses the extreme word 'All'. While many do (Godavari, Krishna, Cauvery), rivers like Narmada and Tapi flow westwards into the Arabian Sea. Statement 2 is a core, correct geographical fact regarding those specific western-flowing rivers."
        },
        {
            question: "[P1-Q12] With reference to the Constitution of India, consider the following statements regarding a National Emergency:\n\n1. A proclamation of National Emergency automatically suspends all Fundamental Rights of citizens.\n2. The Parliament can extend its own normal tenure by exactly one year at a time during a National Emergency.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses the extreme word 'automatically' and 'all'. Under the 44th Amendment, Articles 20 and 21 cannot be suspended even during an emergency. Statement 2 correctly outlines the parliamentary power to extend its life under Article 83."
        },
        {
            question: "[P1-Q13] Consider the following statements regarding Foreign Direct Investment (FDI) in India:\n\n1. FDI is completely prohibited in the lottery business and gambling sectors under all circumstances.\n2. A foreign entity can invest up to 100% in India's atomic energy sector via the automatic route.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "A",
            explanation: "Statement 1 uses extreme words ('completely prohibited', 'all circumstances') but in this rare case, it is factually true—India strictly bans FDI in lottery and gambling. Statement 2 is false; atomic energy is another sector where FDI is entirely prohibited due to national security."
        },
        {
            question: "[P1-Q14] With reference to ancient Indian religions, consider the following statements:\n\n1. Both Buddhism and Jainism completely rejected the authority of the Vedas.\n2. The concept of 'Anekantavada' (many-sidedness of reality) is a core philosophical pillar belonging solely to Buddhism.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "A",
            explanation: "Statement 1 is a correct historical fact; both belonged to the Sramana tradition that rejected Vedic authority. Statement 2 uses the extreme word 'solely' and a Subject Swap; Anekantavada is the core philosophy of Jainism, not Buddhism."
        },
        {
            question: "[P1-Q15] Consider the following statements regarding global climate agreements:\n\n1. The Kyoto Protocol was legally binding on all developed and developing countries equally.\n2. The International Solar Alliance (ISA) was jointly launched by India and France.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses the extreme words 'all' and 'equally'. The Kyoto Protocol placed binding emission reduction targets primarily on developed nations (Annex I) based on the principle of 'Common but Differentiated Responsibilities'. Statement 2 is factually correct."
        },
        {
            question: "[P1-Q16] Consider the following statements regarding the Attorney General of India:\n\n1. The Attorney General is a full-time counsel for the Government of India and is completely debarred from private legal practice.\n2. The Attorney General has the right to speak and take part in the proceedings of both Houses of Parliament, including the right to vote.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "D",
            explanation: "Statement 1 uses the extreme trap 'completely debarred'. The AG is not a full-time government servant and is allowed private practice. Statement 2 includes the absolute trap 'including the right to vote', which they do not possess."
        },
        {
            question: "[P1-Q17] With reference to the Indian economy, consider the following statements regarding the Goods and Services Tax (GST) Council:\n\n1. It is a statutory body established solely by an act of Parliament without requiring a constitutional amendment.\n2. Every decision of the GST Council requires a unanimous vote from all the attending members.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "D",
            explanation: "Statement 1 is an Authority/Structure Swap; it is a constitutional body (Article 279A). Statement 2 uses the extreme word 'unanimous'; decisions require a majority of not less than three-fourths of the weighted votes of the members present and voting."
        },
        {
            question: "[P1-Q18] Consider the following statements regarding the geological structure of India:\n\n1. The Himalayas are young fold mountains formed primarily by the convergent collision of the Indo-Australian Plate and the Eurasian Plate.\n2. The Peninsular Plateau is completely devoid of any significant fault lines or rift valleys.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "A",
            explanation: "Statement 1 is a correct, moderate statement. Statement 2 uses the extreme modifier 'completely devoid'. The Peninsular Plateau contains major rift valleys (Narmada, Tapi, Mahanadi) formed by ancient faulting."
        },
        {
            question: "[P1-Q19] With reference to ancient Indian culture, consider the following statements regarding the Ajanta Caves:\n\n1. All the caves at Ajanta are exclusively dedicated to the Theravada (Hinayana) sect of Buddhism.\n2. The mural paintings at Ajanta predominantly depict scenes from the Jataka tales.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses the extreme words 'All' and 'exclusively'. The caves contain both Hinayana and Mahayana Buddhist monuments. Statement 2 uses the moderate and correct word 'predominantly'."
        },
        {
            question: "[P1-Q20] Consider the following statements regarding the International Monetary Fund (IMF):\n\n1. The Special Drawing Right (SDR) is an actual global currency that can be directly used by private citizens for cross-border transactions.\n2. India's voting share in the IMF is directly proportional to its total geographical area and population size.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "D",
            explanation: "Statement 1 is a conceptual trap; SDR is an international reserve asset, not a currency. Statement 2 is a parameter swap; voting power is determined primarily by a country's quota, not geography or population."
        },
        {
            question: "[P1-Q21] With reference to environmental conventions, consider the following statements regarding the Ramsar Convention:\n\n1. It is an intergovernmental treaty that provides the framework for the conservation and wise use of all wetlands and their resources globally.\n2. The Montreux Record is a register of wetland sites where changes in ecological character have occurred, are occurring, or are likely to occur as a result of human interference.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "C",
            explanation: "Statement 1 correctly identifies the broad mandate of the treaty. Statement 2 is the exact, factual definition of the Montreux Record."
        },
        {
            question: "[P1-Q22] Consider the following statements regarding the Union Public Service Commission (UPSC):\n\n1. The Chairman of the UPSC is eligible for a second term in the same office immediately following the conclusion of their first term.\n2. The entire expense of the UPSC, including salaries and pensions, is charged upon the Consolidated Fund of India.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 contradicts a core constitutional safeguard; under Article 319, the Chairman is strictly ineligible for reappointment to that office. Statement 2 correctly identifies the financial independence mechanism."
        },
        {
            question: "[P1-Q23] With reference to the history of the Indian National Movement, consider the following statements regarding the Swadeshi Movement (1905):\n\n1. It was launched primarily as a direct response to the passing of the Rowlatt Act by the British Government.\n2. The movement witnessed the active participation of women and students in picketing foreign cloth shops.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 contains a massive Chronology Swap. The Swadeshi Movement was launched in 1905 in response to the Partition of Bengal, whereas the Rowlatt Act was passed in 1919. Statement 2 accurately reflects mass participation."
        },
        {
            question: "[P1-Q24] Consider the following statements regarding monetary aggregates in India:\n\n1. The measure 'M1' represents the most liquid portion of the money supply, consisting solely of currency with the public and demand deposits with the banking system.\n2. 'M3', known as Broad Money, completely excludes all time deposits held by commercial banks.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "A",
            explanation: "Statement 1 correctly defines Narrow Money (M1). Statement 2 uses the extreme trap 'completely excludes'. M3 is characterized precisely by the INCLUSION of time deposits."
        },
        {
            question: "[P1-Q25] With reference to the physical geography of the ocean floor, consider the following statements:\n\n1. The continental shelf is always the deepest and steepest part of the ocean basin.\n2. Mid-oceanic ridges are primarily formed by divergent tectonic plate boundaries.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses the extreme word 'always' combined with a structural inversion trap; the continental shelf is the shallowest part. Statement 2 is a correct, fundamental principle of plate tectonics."
        },
        {
            question: "[P1-Q26] Consider the following statements regarding the Panchayati Raj Institutions (PRIs):\n\n1. It is mandatory for all states, regardless of their population size, to constitute panchayats at the village, intermediate, and district levels.\n2. The Governor of a state constitutes a State Finance Commission every five years to review the financial position of the panchayats.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses the extreme phrase 'mandatory for all states, regardless of their population size'. States with a population of less than 20 lakhs are exempted from constituting the intermediate level. Statement 2 is a correct constitutional provision under Article 243-I."
        },
        {
            question: "[P1-Q27] With reference to the agricultural sector in India, consider the following statements:\n\n1. The recommendations of the Commission for Agricultural Costs and Prices (CACP) regarding Minimum Support Prices (MSP) are strictly binding on the Central Government.\n2. The Fair and Remunerative Price (FRP) is the pricing mechanism specifically used for sugarcane.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 contains the extreme trap 'strictly binding'. The CACP is an advisory body, and the final decision lies with the Cabinet Committee on Economic Affairs (CCEA). Statement 2 is factually correct; sugarcane is governed by FRP, not the standard MSP."
        },
        {
            question: "[P1-Q28] Consider the following statements regarding the Bhakti Movement in medieval India:\n\n1. The Nirguna school of Bhakti poetry believed in a formless God and rejected idol worship.\n2. Guru Nanak was a direct contemporary of the Mughal Emperor Akbar.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "A",
            explanation: "Statement 1 is a correct definition of the Nirguna ideology (followed by saints like Kabir and Guru Nanak). Statement 2 is a Chronology Swap trap. Guru Nanak (1469–1539) was a contemporary of Babur and Humayun, not Akbar (who ruled later, 1556–1605)."
        },
        {
            question: "[P1-Q29] With reference to wildlife conservation in India, consider the following statements:\n\n1. The Great Indian Bustard is found exclusively within the geographical boundaries of the state of Rajasthan.\n2. It is listed in Schedule I of the Wildlife (Protection) Act, 1972.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses the extreme trap 'exclusively'. While Rajasthan has the largest population (Desert National Park), the bird is also found in smaller numbers in Gujarat, Maharashtra, and Karnataka. Statement 2 is correct, reflecting its critically endangered status and highest legal protection."
        },
        {
            question: "[P1-Q30] Consider the following statements regarding global ocean currents:\n\n1. The Agulhas Current is a warm western boundary current in the southwestern Indian Ocean.\n2. The Canary Current is a major warm water current flowing through the northern Pacific Ocean.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "A",
            explanation: "Statement 1 is geographically correct. Statement 2 is a double trap (Temperature Swap + Ocean Swap). The Canary Current is a cold current, and it flows in the North Atlantic Ocean off the coast of Africa, not the Pacific."
        },
        {
            question: "[P1-Q31] With reference to space technology, consider the following statements:\n\n1. A Geostationary orbit is located at an altitude of exactly 20,000 kilometers above the Earth's equator.\n2. Polar Satellite Launch Vehicles (PSLVs) are primarily designed to deliver earth observation satellites into sun-synchronous circular polar orbits.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 is a Specific Number Swap. A geostationary orbit is located at approximately 35,786 kilometers, whereas 20,000 kilometers is typically the altitude for Medium Earth Orbit (MEO) used by GPS satellites. Statement 2 correctly describes the primary function of the PSLV."
        },
        {
            question: "[P1-Q32] Consider the following statements regarding the Directive Principles of State Policy (DPSP):\n\n1. They are not enforceable by any court for their violation.\n2. The Constitution explicitly declares that these principles are fundamental in the governance of the country.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "C",
            explanation: "Both statements are correct and form the core constitutional essence of Part IV. Article 37 explicitly states that the provisions contained in this Part shall not be enforceable by any court (Statement 1), but the principles therein laid down are nevertheless fundamental in the governance of the country (Statement 2)."
        },
        {
            question: "[P1-Q33] With reference to India's financial markets, consider the following statements:\n\n1. Participatory Notes (P-Notes) are issued exclusively by the Reserve Bank of India to overseas investors.\n2. Masala Bonds are rupee-denominated bonds issued outside India by Indian entities.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 is an Authority Swap combined with 'exclusively'. P-Notes are issued by Registered Foreign Portfolio Investors (FPIs)—who are registered with SEBI, not the RBI—to overseas investors. Statement 2 is the exact, correct financial definition of Masala Bonds."
        },
        {
            question: "[P1-Q34] Consider the following statements regarding medieval Indian history:\n\n1. The Mansabdari system, a unique administrative framework, was first introduced in India by Sher Shah Suri.\n2. Under the Zabti system of taxation, the state's revenue demand was calculated based on the crop yields of exactly one previous year.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "D",
            explanation: "Statement 1 is an Authority/Ruler Swap. The Mansabdari system was introduced by Emperor Akbar, not Sher Shah Suri. Statement 2 is a Number/Timeframe Swap. The Zabti (or Dahsala) system calculated revenue based on the average yield and prices over the preceding ten years, not one year."
        },
        {
            question: "[P1-Q35] With reference to environmental pollution, consider the following statements:\n\n1. Bioaccumulation refers to the process where toxic substances increase in concentration within an organism over its lifetime.\n2. Microplastics are strictly defined internationally as any plastic fragments measuring less than 10 millimeters in length.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "A",
            explanation: "Statement 1 correctly defines Bioaccumulation (as opposed to Biomagnification, which is the increase across trophic levels). Statement 2 is a Number Swap trap; microplastics are officially defined by international environmental bodies (like NOAA) as plastic fragments less than 5 millimeters in length, not 10."
        },
        {
            question: "[P1-Q36] Consider the following statements regarding the High Courts in India:\n\n1. The power to increase the number of judges in a High Court lies exclusively with the Parliament of India.\n2. A judge of a High Court can be removed from office only on the grounds of proved misbehaviour or incapacity.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses the extreme trap 'exclusively' combined with an Authority Swap. Unlike the Supreme Court (where Parliament decides), the President of India has the power to determine the strength of a High Court depending on its workload. Statement 2 is factually correct as per Article 217."
        },
        {
            question: "[P1-Q37] With reference to India's fiscal policy, consider the following statements:\n\n1. The Fiscal Responsibility and Budget Management (FRBM) Act completely prohibits the Central Government from borrowing from the Reserve Bank of India under any circumstances.\n2. Capital receipts in the government budget always create a liability or cause a reduction in the assets of the government.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses the extreme qualifiers 'completely prohibits' and 'any circumstances'. The FRBM Act allows borrowing from the RBI under exceptional circumstances (like a national security crisis or severe economic shock) via Ways and Means Advances (WMA). Statement 2 is the exact, core economic definition of a capital receipt."
        },
        {
            question: "[P1-Q38] Consider the following statements regarding ancient Indian literature and texts:\n\n1. The Milinda Panha is a famous philosophical dialogue between the Indo-Greek king Menander and the Buddhist monk Ashvaghosha.\n2. The Sutta Pitaka is a collection of the strict disciplinary rules and regulations meant exclusively for the Buddhist monastic order.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "D",
            explanation: "Statement 1 is a Name/Authority Swap. The Milinda Panha is a dialogue with the monk Nagasena, not Ashvaghosha. Statement 2 is a Subject Swap combined with 'exclusively'. The Vinaya Pitaka contains the monastic rules; the Sutta Pitaka contains the primary teachings and sermons of the Buddha."
        },
        {
            question: "[P1-Q39] With reference to international environmental treaties, consider the following statements:\n\n1. The Basel Convention strictly regulates the transboundary movements of all types of radioactive waste and their disposal.\n2. The Rotterdam Convention promotes shared responsibilities in relation to the international trade of certain hazardous chemicals and pesticides.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses a Subject Swap trap. The Basel Convention explicitly EXCLUDES radioactive waste, which is instead regulated under the frameworks of the International Atomic Energy Agency (IAEA). Statement 2 correctly describes the core mechanism of the Rotterdam Convention (Prior Informed Consent)."
        },
        {
            question: "[P1-Q40] Consider the following statements regarding the soils of India:\n\n1. Black soil (Regur) is generally rich in lime, iron, magnesia, and alumina, but poor in nitrogen and phosphorus.\n2. Alluvial soils occupy the largest soil group area in India and are found exclusively in the northern river plains.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "A",
            explanation: "Statement 1 accurately describes the chemical composition and deficiencies of Black soil using the moderate word 'generally'. Statement 2 uses the extreme trap 'exclusively'. While alluvial soils dominate the northern plains, they are also extensively found in the eastern coastal plains and river deltas of the peninsula."
        },
        {
            question: "[P1-Q41] With reference to modern physics and space phenomena, consider the following statements:\n\n1. Gravitational waves are ripples in the fabric of spacetime that travel exactly at the speed of sound.\n2. A Black Hole is a region of spacetime where gravity is so strong that nothing, including light, can escape from it.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses a Physics/Number Swap trap. Gravitational waves travel exactly at the speed of light, not the speed of sound. Statement 2 is the fundamental, correct scientific definition of a black hole."
        },
        {
            question: "[P1-Q42] Consider the following statements regarding the Fundamental Duties in the Indian Constitution:\n\n1. The Fundamental Duties were originally incorporated into the Constitution during its formal adoption in 1949.\n2. The Constitution explicitly provides for the direct legal enforcement of Fundamental Duties by the Supreme Court via writ jurisdiction.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "D",
            explanation: "Statement 1 is a Chronology Swap. Fundamental Duties were not in the original constitution; they were added later by the 42nd Amendment Act in 1976. Statement 2 uses the extreme phrase 'explicitly provides for direct legal enforcement'. Fundamental Duties are non-justiciable; the Constitution does not provide for their direct enforcement by courts."
        },
        {
            question: "[P1-Q43] With reference to the socio-religious reform movements in modern Indian history, consider the following statements:\n\n1. Jyotirao Phule founded the Satyashodhak Samaj with the primary aim of securing human rights and social justice for low-caste people.\n2. The Brahmo Samaj, founded by Raja Ram Mohan Roy, strongly advocated for the worship of idols and polytheism.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "A",
            explanation: "Statement 1 correctly identifies the founder and core mission of the Satyashodhak Samaj. Statement 2 is a Concept Swap trap. The Brahmo Samaj vehemently OPPOSED idol worship and polytheism, advocating strictly for monotheism based on the Upanishads."
        },
        {
            question: "[P1-Q44] Consider the following statements regarding the banking sector in India:\n\n1. Priority Sector Lending (PSL) targets are mandatory for domestic commercial banks but are completely exempted for foreign banks operating in India.\n2. Non-Performing Assets (NPAs) are loans or advances where the principal or interest payment remains overdue for a continuous period of exactly 30 days.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "D",
            explanation: "Statement 1 uses the extreme trap 'completely exempted'. Foreign banks with 20 or more branches in India are subject to the exact same PSL targets (40%) as domestic banks. Statement 2 is a Number Swap. The standard overdue period for a loan to be classified as an NPA is 90 days, not 30 days."
        },
        {
            question: "[P1-Q45] With reference to global physical geography, consider the following statements:\n\n1. The Mediterranean Sea is entirely enclosed by the landmasses of Europe and Africa, with no natural marine connection to the Atlantic Ocean.\n2. The Red Sea separates the Arabian Peninsula from the Horn of Africa.\n\nWhich of the statements given above is/are correct?",
            options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            answer: "B",
            explanation: "Statement 1 uses extreme geographical modifiers ('entirely enclosed', 'no natural marine connection'). The Mediterranean Sea naturally connects to the Atlantic Ocean via the Strait of Gibraltar. Statement 2 is a correct statement regarding global map locations."
        }
    ],
    paper2: [
        {
            question: "[P2-Q1] Pointing to a photograph, a man said, \"I have no brother or sister, but that man's father is my father's son.\" Whose photograph was it?",
            options: ["His own", "His son's", "His father's", "His nephew's"],
            answer: "B",
            explanation: "Since the narrator has no brother or sister, 'my father's son' is the narrator himself. Therefore, the statement translates to: 'That man's father is ME.' This means the man in the photograph is his son."
        },
        {
            question: "[P2-Q2] A can do a piece of work in 15 days and B can do it in 20 days. If they work together on it for 4 days, what fraction of the work is left?",
            options: ["8/15", "7/15", "1/4", "1/10"],
            answer: "A",
            explanation: "A's 1 day work = 1/15. B's 1 day work = 1/20. Together, 1 day work = (1/15 + 1/20) = 7/60. Work done in 4 days = 4 * (7/60) = 7/15. Work left = 1 - (7/15) = 8/15."
        },
        {
            question: "[P2-Q3] Read the following passage:\n'Urbanization in developing countries is often accompanied by the proliferation of slums. While governments frequently view slums as an illegal encroachment to be eradicated, they often serve as the only affordable housing for the urban poor who provide essential cheap labor for the city's economy.'\n\nWhich of the following is the most logical and rational inference that can be drawn from the passage?",
            options: ["Governments should immediately legalize all slums to boost the urban economy.", "Slums are a necessary evil that cannot be eliminated from developing countries.", "Eradicating slums without providing alternative affordable housing could disrupt the city's economic functioning.", "The urban poor prefer living in slums even if affordable public housing is available."],
            answer: "C",
            explanation: "The passage states that slums are the only affordable housing for the poor, and these poor people provide essential cheap labor. If you eradicate the housing without an alternative, the labor force is displaced, disrupting the economy. Options A, B, and D make extreme leaps not supported by the text."
        },
        {
            question: "[P2-Q4] Consider the following statements:\n1. All cats are dogs.\n2. Some dogs are birds.\n3. No bird is a pig.\n\nConclusions:\nI. Some cats are birds.\nII. Some dogs are not pigs.\n\nWhich of the conclusions logically follows?",
            options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
            answer: "B",
            explanation: "Conclusion I does not follow because the overlapping 'some' relationship is between dogs and birds, which doesn't guarantee cats overlap with birds. Conclusion II follows because 'some dogs are birds', and 'no bird is a pig'. Therefore, those specific dogs that are birds can never be pigs."
        },
        {
            question: "[P2-Q5] A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
            options: ["120 metres", "150 metres", "180 metres", "324 metres"],
            answer: "B",
            explanation: "First, convert speed to m/s: 60 * (5/18) = 50/3 m/s. Distance (length of train) = Speed * Time = (50/3) * 9 = 150 metres."
        },
        {
            question: "[P2-Q6] A man walks 5 km toward the South and then turns to the right. After walking 3 km, he turns to the left and walks 5 km. Now in which direction is he from the starting place?",
            options: ["West", "South", "South-West", "North-East"],
            answer: "C",
            explanation: "He starts at origin (0,0). Walks 5km South -> (0, -5). Turns right (facing West) and walks 3km -> (-3, -5). Turns left (facing South) and walks 5km -> (-3, -10). Compared to (0,0), the point (-3, -10) is in the South-West direction."
        },
        {
            question: "[P2-Q7] The present ages of A and B are in the ratio 4:5. Five years hence, the ratio of their ages will be 5:6. What is A's present age?",
            options: ["10 years", "20 years", "25 years", "40 years"],
            answer: "B",
            explanation: "Let present ages be 4x and 5x. After 5 years: (4x + 5) / (5x + 5) = 5 / 6. Cross multiplying: 24x + 30 = 25x + 25. Solving this gives x = 5. A's present age = 4x = 4 * 5 = 20 years."
        },
        {
            question: "[P2-Q8] At what time between 3 o'clock and 4 o'clock will the hands of a clock be perfectly opposite to each other (180 degrees)?",
            options: ["3:45", "3:49 1/11", "3:50", "3:54 6/11"],
            answer: "B",
            explanation: "Formula for angle: theta = |30H - 5.5M|. We need theta = 180 and H = 3. 180 = |90 - 5.5M|. Since the minute hand is ahead, we use 5.5M - 90 = 180. 5.5M = 270. M = 270 / 5.5 = 540 / 11 = 49 1/11 minutes."
        },
        {
            question: "[P2-Q9] Find the missing number in the series: 2, 6, 12, 20, 30, ?",
            options: ["40", "42", "48", "50"],
            answer: "B",
            explanation: "The pattern relies on adding consecutive even numbers: 2 (+4) = 6. 6 (+6) = 12. 12 (+8) = 20. 20 (+10) = 30. 30 (+12) = 42. Alternatively, it is n^2 + n for n=1,2,3,4,5,6 (6^2 + 6 = 42)."
        },
        {
            question: "[P2-Q10] Read the following passage:\n'The rapid expansion of artificial intelligence in governance promises unprecedented efficiency. However, without transparent algorithms, this transition risks automating existing bureaucratic biases and removing human empathy from public service delivery.'\n\nWhich of the following is the most valid assumption made by the author?",
            options: ["Human bureaucrats are entirely free from bias when delivering public services.", "AI systems cannot be programmed to exhibit human-like empathy.", "Transparency in algorithms is a necessary condition to prevent the automation of biases.", "Efficiency in governance is less important than human empathy."],
            answer: "C",
            explanation: "The author explicitly links the 'risk of automating biases' to the condition of 'without transparent algorithms'. Therefore, the underlying assumption is that transparency is the necessary mechanism to mitigate or prevent this specific risk."
        },
        {
            question: "[P2-Q11] A mixture contains milk and water in the ratio 5:1. On adding 5 liters of water, the ratio of milk to water becomes 5:2. What is the quantity of milk in the original mixture?",
            options: ["16 liters", "25 liters", "30 liters", "35 liters"],
            answer: "B",
            explanation: "Let original milk = 5x and water = x. After adding 5 liters of water: 5x / (x + 5) = 5 / 2. Cross multiply: 10x = 5x + 25. 5x = 25. Since milk is 5x, the quantity of milk is 25 liters."
        },
        {
            question: "[P2-Q12] If in a certain code language 'WATER' is written as 'YCVGT', how is 'FIRE' written in that language?",
            options: ["HKTG", "HKVG", "HLTG", "HMTG"],
            answer: "A",
            explanation: "The coding pattern is +2 letters forward in the alphabet. W(+2)=Y, A(+2)=C, T(+2)=V, E(+2)=G, R(+2)=T. Applying this to FIRE: F(+2)=H, I(+2)=K, R(+2)=T, E(+2)=G. Result is HKTG."
        },
        {
            question: "[P2-Q13] Six persons A, B, C, D, E, and F are sitting in a row facing North. B is sitting exactly between A and C. E is sitting exactly between C and D. F is sitting to the immediate right of D. Who is sitting at the extreme right end?",
            options: ["C", "D", "E", "F"],
            answer: "D",
            explanation: "Let's build the row: B is between A and C -> A-B-C or C-B-A. E is between C and D -> C-E-D or D-E-C. Combining these: A-B-C-E-D. Finally, F is to the immediate right of D -> A-B-C-E-D-F. The extreme right end is F."
        },
        {
            question: "[P2-Q14] A merchant marks his goods 20% above the cost price and then allows a discount of 10%. What is his overall profit percentage?",
            options: ["8%", "10%", "12%", "15%"],
            answer: "A",
            explanation: "Let Cost Price = 100. Marked Price = 100 + 20% = 120. Discount = 10% on Marked Price = 10% of 120 = 12. Selling Price = 120 - 12 = 108. Profit = Selling Price - Cost Price = 108 - 100 = 8. Profit % = 8%."
        },
        {
            question: "[P2-Q15] Today is Monday. After 61 days, what day of the week will it be?",
            options: ["Tuesday", "Wednesday", "Saturday", "Sunday"],
            answer: "C",
            explanation: "Every 7 days, the day repeats. Divide 61 by 7 to find the remainder (odd days). 61 / 7 = 8 weeks with a remainder of 5 days. Monday + 5 days = Saturday."
        }
    ]
};
