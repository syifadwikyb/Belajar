const API_URL = "https://script.google.com/macros/s/AKfycbyzRS9K7zlJRyCCdXIA83U3l6ADozI6IE41-lk6jh0JeqSel-bCgPbNbsIPoaq3j_Sg/exec";

export async function validateId(id) {
  const res = await fetch(`${API_URL}?id=${id}`);
  return res.json();
}

export async function submitData(id, bb, tb) {
  const formData = new URLSearchParams();
  formData.append("id", id);
  formData.append("bb", bb);
  formData.append("tb", tb);

  const res = await fetch(API_URL, {
    method: "POST",
    body: formData
  });

  return res.text();
}
