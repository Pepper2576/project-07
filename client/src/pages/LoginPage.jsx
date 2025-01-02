import React, { useEffect, useState } from 'react';
import Login from '../components/login/Login';

function LoginPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbData = await fetch('http://localhost:3000/api/data');

        if (!dbData.ok) {
          throw new Error('No data received');
        }

        const dbDataJson = await dbData.json();
        setData(dbDataJson);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log('test', data);

  return (
    <div className='tw-flex tw-flex-col tw-items-center'>
      <Login key={data.id} data={data} />
    </div>
  );
}

export default LoginPage;
