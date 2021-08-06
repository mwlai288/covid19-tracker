import { format } from 'date-fns';

type Props = {
  date: Date;
};
const DateTitle = ({ date }: Props) => {
  const getDate = new Date(date);

  const formatDate = `${getDate.getFullYear()} ${getDate.getMonth()} ${getDate.getDate()}`;
  const result = format(new Date(formatDate), 'MM/dd/yyyy');
  return (
    <div className="text-center">
      <div className="text-2xl mt-4 mb-10">{result}</div>
    </div>
  );
};

export default DateTitle;
