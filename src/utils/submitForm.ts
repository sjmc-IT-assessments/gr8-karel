const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdfGAW25W0J7f4mn0BRTdDg6bqLcYlGlFczmXgp4yTSxS3cWw/formResponse";

const ENTRY_IDS = {
  name: "285121735",
  class: "1790999987",
  q1: "780784670",
  q2: "1506207358",
  q3: "1873887944",
  q4: "345086203",
  q5: "1457583099",
  q6: "602721540",
  q7: "206067364",
  q8: "737789541",
  q9: "796378202",
  q10: "1367341828",
  q11: "829425413",
  q12: "1873454256",
  q13: "478219276",
  q14: "1515429967",
  q15: "1335032006",
 // q16: "857678676",
 // code1: "1234567890"  // Example ID for the first code submission
};

interface Answers { [key: string]: string; } export async function submitForm(answers: Answers) { const formData = new FormData(); Object.keys(answers).forEach((qNumber) => { if (ENTRY_IDS[qNumber as keyof typeof ENTRY_IDS]) { formData.append( `entry.${ENTRY_IDS[qNumber as keyof typeof ENTRY_IDS]}`, answers[qNumber] ); } }); try { await fetch(FORM_URL, { method: 'POST', mode: 'no-cors', body: formData }); return true; } catch { return false; } }
