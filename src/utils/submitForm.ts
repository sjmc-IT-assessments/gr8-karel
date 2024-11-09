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
  q11: "1873454256",
  q12: "478219276",
  q13: "1515429967",
  q14: "1335032006",
  q15: "857678676",
  // Add any remaining question IDs
};

interface Answers {
  [key: string]: string;
}

function convertToLabel(value: number | null): string {
  const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  return value !== null ? labels[value] : '';
}

export async function submitForm(answers: Answers) {
  const formData = new FormData();

  Object.keys(answers).forEach((qNumber) => {
    if (ENTRY_IDS[qNumber as keyof typeof ENTRY_IDS]) {
      formData.append(
        `entry.${ENTRY_IDS[qNumber as keyof typeof ENTRY_IDS]}`,
        answers[qNumber]
      );
    }
  });

  console.log('Form URL:', FORM_URL);
  console.log('Form Data:', Array.from(formData.entries()));

  try {
    const response = await fetch(FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });
    console.log('Response:', response);
    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
}
