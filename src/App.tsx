import { useEffect, useState } from 'react';
import { fetchCovidData } from './api';
import './App.css';
import CountrySelect from './components/CountrySelect';
import DateTitle from './components/DateTitle';
import Header from './components/Header';
import Results from './components/Results';
import { APIResponse } from './types/interface';

const App = (): JSX.Element => {
  const [data, setData] = useState<APIResponse>();
  const [title, setTitle] = useState('Global');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchCovidData = async (): Promise<void> => {
      const res: Response = await fetch('https://api.covid19api.com/summary');
      const covidData: APIResponse = await res.json();
      setData(covidData);
    };

    fetchCovidData();
  }, []);

  const selectCountry = (e: React.FormEvent<HTMLSelectElement>): void => {
    setCountry(e.currentTarget.value);
    setTitle(country);
  };

  const clearCountryData = async () => {
    setCountry('');
    setTitle('Global');
  };

  return (
    <div className="container">
      {data ? (
        <>
          <Header />
          <DateTitle date={data.Date} />
          <Results data={data} title={title} country={country} />
          <CountrySelect countries={data} selectCountry={selectCountry} country={country} />
          {country && (
            <button
              onClick={() => {
                clearCountryData();
              }}
              className="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600"
            >
              Clear Country
            </button>
          )}
        </>
      ) : null}
    </div>
  );
};

export default App;
