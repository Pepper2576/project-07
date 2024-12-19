export async function getData() {
  try {
    const data = await fetch('http://localhost:3000/api/data');

    if (!data.ok) {
      throw new Error('Data not receved');
    }

    const dbData = await data.json();
    return dbData;
  } catch (error) {
    console.error(error);
  }
}
console.log(await getData());
