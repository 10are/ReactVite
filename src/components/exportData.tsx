// import { useState, useEffect } from 'react';
// import { useQuery } from '@apollo/client';
// import { EXCEL_QUERY } from '../graphql/GraphqlQueries';
// import * as XLSX from 'xlsx';

// const ExportData = () => {
//   const [data, setData] = useState([]);
//   const { data: queryData } = useQuery(EXCEL_QUERY);

//   useEffect(() => {
//     if (queryData) {
//       setData(queryData.allPeople.people);
//     }
//   }, [queryData]);

//   const exportToExcelFull = () => {
//       const ws = XLSX.utils.json_to_sheet(data);
//       const wb = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(wb, ws, 'People Data');
//       XLSX.writeFile(wb, 'people_data.xlsx');
//   };

//   const exportToExcelCurrentPage = () => {
//     const currentPageData = data.slice(0, 10);
//     const ws = XLSX.utils.json_to_sheet(currentPageData);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Current Page Data');
//     XLSX.writeFile(wb, 'current_page_data.xlsx');
//   };

//   const staticWarningMessage = (
//     <div className="mt-2">
//       <p className="text-red-500">
//         Veri seti çok büyük olduğu için indirme işlemi uzun sürebilir.
//       </p>
//     </div>
//   );

//   return (
//     <div className="mt-4 pb-5">
//       <div>
//         <button
//           onClick={exportToExcelFull}
//           className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mr-4"
//         >
//           İndir Tüm Veri
//         </button>

//         <button
//           onClick={exportToExcelCurrentPage}
//           className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
//         >
//           İndir Anlık Sayfa
//         </button>
//       </div>
//       {staticWarningMessage}
//     </div>
//   );
// };

// export default ExportData;
