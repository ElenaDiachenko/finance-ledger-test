import { UserInput } from 'components/Form';
const encode = (data: { [x: string]: string | number | boolean }) => {
 return Object.keys(data)
  .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  .join('&');
};

export const sendForm = (credentials: UserInput) => {
 fetch('/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: encode({ 'form-name': 'contact', ...credentials }),
 })
  .then(() => alert('Success!'))
  .catch((error) => alert(error));
};
