export default function convertTry(inpNum) {
  try {
    if (!Number(inpNum)) {
      throw new Error('Введено не число');
    }
    return Number(inpNum);
  } catch (e) {
    return ('error');
  }
}
