/* eslint-disable no-alert */
/* eslint-disable no-console */
console.log('webpack💫');
// default parameters
const show = (m = 'holis☠') => {
  alert(m);
};
show();

// promises
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('functio resolve');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling asyn funtion!!!');
  const result = await resolveAfter2Seconds();
  console.log(result); // imprime "funcion resolve" en la consola
}
asyncCall();
