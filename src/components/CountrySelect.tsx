import { APIResponse } from '../types/interface';

type Props = {
  countries: APIResponse;
  country: string;
  selectCountry: (e: React.FormEvent<HTMLSelectElement>) => void;
};

const CountrySelect = ({ countries, country, selectCountry }: Props): JSX.Element => {
  const { Countries } = countries;

  return (
    <select className="form-select mt-10 block w-full border p-3 rounded" onChange={selectCountry}>
      <option>Select A Country</option>
      {Countries.map((location) => {
        return (
          <option value={location.Country} key={location.Slug}>
            {location.Country}
          </option>
        );
      })}
    </select>
  );
};

export default CountrySelect;
