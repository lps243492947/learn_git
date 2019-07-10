export default function (len = 32) {
  let num = '';
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  const maxPos = $chars.length
  for (let i = 0; i <= len ; i++) {
    num += $chars.charAt(Math.floor(Math.random()*maxPos))
  }
  return num;
}