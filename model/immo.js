import data from './data.json' assert { type: 'json' };
let immos = data;

const getImmos = ({ query }) => {
  let immobilien = immos;
  const { city, priceLT } = query;
  if (city) immobilien = immobilien.filter((el) => el.city === city);
  if (priceLT) immobilien = immobilien.filter((el) => el.price < priceLT);
  return immobilien;
};

const getImmo = (id) => immos.find((el) => el.id === id);

const delImmos = () => (immos = []);
const delImmo = (id) => {
  const immo = immos.find((el) => el.id === id);
  if (!immo) return false;
  immos = immos.filter((el) => el.id !== id);
  return true;
};

const addImmo = (Im) => {
  let id = immos.reduce((a, el) => (el.id > a ? (a = el.id) : (a = a)), 0) + 1;
  let immo = { id, ...Im };
  immos.push(immo);
  return immos;
};

const updImmo = (id, obj) => {
  const immo = immos.find((el) => el.id === id);
  if (!immo) return false;
  for (const [key, val] of Object.entries(obj)) immo[key] = val;
  return true;
};
// console.log(
//   addImmo({
//     title: 'College for higher vocational education, Thaliastraße',
//     postCode: '1160',
//     city: 'Vienna',
//     country: 'Austria',
//     price: 14358321,
//   }),
// );

export { getImmos, getImmo, delImmos, delImmo, addImmo, updImmo };
