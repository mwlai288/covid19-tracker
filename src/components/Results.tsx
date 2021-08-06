import { APIResponse } from '../types/interface';

type Props = {
  data: APIResponse;
  title: string;
  country: string;
};

const Results = ({ data, title, country }: Props): JSX.Element => {
  const formatNumbers = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const { Global, Countries } = data;

  const getCountry = Countries.find((item) => item.Country === country);

  return (
    <>
      <main className="flex flex-col align-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-10">{country ? country : title}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="shadow-md bg-blue-100 p-10 text-center rounded">
            <h3 className="text-3xl text-blue-900 font-bold mb-4">Cases</h3>
            <div className="text-2xl mb-4">
              <span className="font-bold">New: </span>
              {country ? formatNumbers(getCountry!.NewConfirmed) : formatNumbers(Global.NewConfirmed)}
            </div>
            <div className="text-2xl mb-4">
              <span className="font-bold">Total Confirmed: </span>
              {country ? formatNumbers(getCountry!.TotalConfirmed) : formatNumbers(Global.TotalConfirmed)}
            </div>
          </div>

          <div className="shadow-md bg-blue-200 p-10 text-center rounded">
            <h3 className="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>
            <div className="text-2xl mb-4">
              <span className="font-bold">New: </span>
              {country ? formatNumbers(getCountry!.NewDeaths) : formatNumbers(Global.NewDeaths)}
            </div>
            <div className="text-2xl mb-4">
              <span className="font-bold">Total Confirmed: </span>
              {country ? formatNumbers(getCountry!.TotalDeaths) : formatNumbers(Global.TotalDeaths)}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Results;
