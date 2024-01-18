import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_PEOPLE_QUERY } from '../graphql/GraphqlQueries'; 
import * as XLSX from 'xlsx';

const ExportButton= () => {
  const [data, setData] = useState([]);
  const { data: queryData } = useQuery(ALL_PEOPLE_QUERY); 

  useEffect(() => {
    if (queryData) {
      setData(queryData.allPeople.people);
    }
  }, [queryData]);

  const exportToExcelFull = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'People Data');
    XLSX.writeFile(wb, 'people_data.xlsx');
  };

  const staticWarningMessage = (
    <div className="mt-2">
      <p className="text-red-500">
        Veri seti çok büyük olduğu için indirme işlemi uzun sürebilir.
      </p>
    </div>
  );

  return (
    <div className="mt-4 pb-5">
      <div>
        <button
          onClick={exportToExcelFull}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mr-4">
          Tüm Listeyi İndir
        </button>
      </div>
      {staticWarningMessage}
    </div>
  );
};

export default ExportButton;
