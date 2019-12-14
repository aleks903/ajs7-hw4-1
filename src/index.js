export default function convertTry(inpNum) {
  try {
    if (inpNum.search(/[a-z,*+\\/\\]+/i) !== -1) {
      throw new Error('Введено не число');
    }
    return Number(inpNum);
  } catch (e) {
    return ('error');
  }
}
