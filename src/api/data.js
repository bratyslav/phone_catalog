export const getPhoneCatalog = async () => {
  const url = 'https://mate-academy.github.io/phone-catalogue-static/api/phones.json';
  const response = await fetch(url);
  const data = response.json();

  return data;
};

export const getPhoneDetails = async (phoneId) => {
  const url = `https://mate-academy.github.io/phone-catalogue-static/api/phones/${phoneId}.json`;
  const response = await fetch(url);
  const data = response.json();

  return data;
};
