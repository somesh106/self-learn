import Login from "./login";
import Order from "./order";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            token ? (
              <Navigate to="/order" replace />
            ) : (
              <Login setToken={setToken} />
            )
          }
        />
        <Route
          path="/order"
          element={
            token ? <Order setToken={setToken} /> : <Navigate to="/" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

// {
//     "hasError": false,
//     "result": {
//         "Orders": [
//             {
//                 "id": 21103,
//                 "orderNumber": "26-000751",
//                 "creationDate": "2026-01-20",
//                 "limsID": "L2N/W7YJg11fRwzQ08301L_",
//                 "projectedCurrency": null,
//                 "projectedNet": null,
//                 "projectedTax": null,
//                 "projectedGross": null,
//                 "reorderable": false,
//                 "lastModified": "2026-01-27 11:28:36",
//                 "registrationMaskId": null,
//                 "orderDocuments": [
//                     {
//                         "id": 640367,
//                         "filePath": "/customerPortal/storage/0954c628-4073-45b8-b5f1-4aed967ea95c",
//                         "fileName": "26-000751.coc.pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     }
//                 ],
//                 "processingState": {
//                     "id": 3,
//                     "name": "ORGUNITNUMBER",
//                     "limsId": "L2N/RbWM401cJuVu00301L_",
//                     "backGroundColor": "#fb542b",
//                     "textColor": "#111111"
//                 },
//                 "orgUnit": null,
//                 "sampleQuantity": "3",
//                 "dateReceived": "2026-01-20",
//                 "tatRequested": null,
//                 "reportDate": "2026-01-27",
//                 "projectName": null,
//                 "poNumber": null
//             },
//             {
//                 "id": 21228,
//                 "orderNumber": "26-000977",
//                 "creationDate": "2026-01-23",
//                 "limsID": "L2N/wRV~h11fSwD~0AF01L_",
//                 "projectedCurrency": null,
//                 "projectedNet": null,
//                 "projectedTax": null,
//                 "projectedGross": null,
//                 "reorderable": false,
//                 "lastModified": "2026-01-27 11:20:54",
//                 "registrationMaskId": null,
//                 "orderDocuments": [
//                     {
//                         "id": 640366,
//                         "filePath": "/customerPortal/storage/ba90cd3d-2695-4df1-95f7-30bd2d4a654e",
//                         "fileName": "26-000977.coc.pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     }
//                 ],
//                 "processingState": null,
//                 "orgUnit": null,
//                 "sampleQuantity": "4",
//                 "dateReceived": "2026-01-23",
//                 "tatRequested": null,
//                 "reportDate": "2026-01-30",
//                 "projectName": null,
//                 "poNumber": null
//             },
//             {
//                 "id": 20946,
//                 "orderNumber": "26-000339",
//                 "creationDate": "2026-01-09",
//                 "limsID": "L2N/iOYAT11fOJ0c06W01L_",
//                 "projectedCurrency": null,
//                 "projectedNet": null,
//                 "projectedTax": null,
//                 "projectedGross": null,
//                 "reorderable": false,
//                 "lastModified": "2026-01-16 11:46:25",
//                 "registrationMaskId": null,
//                 "orderDocuments": [
//                     {
//                         "id": 638378,
//                         "filePath": "/customerPortal/storage/4b5be7c0-e471-45c3-8b9c-b09e6d5fd6ff",
//                         "fileName": "26-000339-0001_PM Gummy Chews (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 638381,
//                         "filePath": "/customerPortal/storage/df5cb8d1-c34a-4059-b445-4b079fe76bce",
//                         "fileName": "26-000339-0002_COL.64 010826 (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 638379,
//                         "filePath": "/customerPortal/storage/b8cbf484-51b9-4a88-926b-008209716593",
//                         "fileName": "26-000339.coc.pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 638380,
//                         "filePath": "/customerPortal/storage/c5a56ce6-baae-48c0-a642-6e969d0d9184",
//                         "fileName": "26-000339-0003_COL.59 010826 (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     }
//                 ],
//                 "processingState": null,
//                 "orgUnit": null,
//                 "sampleQuantity": "3",
//                 "dateReceived": "2026-01-09",
//                 "tatRequested": null,
//                 "reportDate": "2026-01-16",
//                 "projectName": null,
//                 "poNumber": null
//             },
//             {
//                 "id": 20512,
//                 "orderNumber": "25-015466",
//                 "creationDate": "2025-12-18",
//                 "limsID": "L2N/CIWF001fH2xu08r01L_",
//                 "projectedCurrency": null,
//                 "projectedNet": null,
//                 "projectedTax": null,
//                 "projectedGross": null,
//                 "reorderable": false,
//                 "lastModified": "2025-12-24 15:43:08",
//                 "registrationMaskId": null,
//                 "orderDocuments": [
//                     {
//                         "id": 600524,
//                         "filePath": "/customerPortal/storage/4da227e5-dad6-4232-beba-2de011cadb97",
//                         "fileName": "25-015466-0001_500 MG Pet Drops 0412.121125 (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 600523,
//                         "filePath": "/customerPortal/storage/4bcb900e-0d13-4001-a935-33c240329b26",
//                         "fileName": "25-015466.coc.pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     }
//                 ],
//                 "processingState": null,
//                 "orgUnit": null,
//                 "sampleQuantity": "1",
//                 "dateReceived": "2025-12-18",
//                 "tatRequested": null,
//                 "reportDate": "2025-12-29",
//                 "projectName": null,
//                 "poNumber": null
//             },
//             {
//                 "id": 20513,
//                 "orderNumber": "25-015467",
//                 "creationDate": "2025-12-18",
//                 "limsID": "L2N/rmWF001fH2xu08r01L_",
//                 "projectedCurrency": null,
//                 "projectedNet": null,
//                 "projectedTax": null,
//                 "projectedGross": null,
//                 "reorderable": false,
//                 "lastModified": "2025-12-24 15:21:19",
//                 "registrationMaskId": null,
//                 "orderDocuments": [
//                     {
//                         "id": 600484,
//                         "filePath": "/customerPortal/storage/28d8ab21-3d74-4ac2-a231-201bcfe27f7d",
//                         "fileName": "25-015467.coc.pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 600485,
//                         "filePath": "/customerPortal/storage/a6628f94-3621-4e54-a09f-3566a5f1efb9",
//                         "fileName": "25-015467-0001_1500 MG Bacon Pet Drops 0411.120825 (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     }
//                 ],
//                 "processingState": null,
//                 "orgUnit": null,
//                 "sampleQuantity": "1",
//                 "dateReceived": "2025-12-18",
//                 "tatRequested": null,
//                 "reportDate": "2025-12-29",
//                 "projectName": null,
//                 "poNumber": null
//             },
//             {
//                 "id": 19545,
//                 "orderNumber": "25-015001",
//                 "creationDate": "2025-12-09",
//                 "limsID": "L2N/o42qp11fE5fK08m01L_",
//                 "projectedCurrency": null,
//                 "projectedNet": null,
//                 "projectedTax": null,
//                 "projectedGross": null,
//                 "reorderable": false,
//                 "lastModified": "2025-12-16 14:31:44",
//                 "registrationMaskId": null,
//                 "orderDocuments": [
//                     {
//                         "id": 598902,
//                         "filePath": "/customerPortal/storage/5ea03615-e8de-4732-90ae-72928fecf497",
//                         "fileName": "25-015001-0001_2000 MG Mango Passion 0408.112025 (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 598903,
//                         "filePath": "/customerPortal/storage/e4b14a10-8a6b-4c28-b3d0-be0c9724d29e",
//                         "fileName": "25-015001.coc.pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 598904,
//                         "filePath": "/customerPortal/storage/f703b2bf-b183-44f6-a10e-a780a1816929",
//                         "fileName": "25-015001-0002_500 MG Root Butter 0409.110925 (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     }
//                 ],
//                 "processingState": null,
//                 "orgUnit": null,
//                 "sampleQuantity": "2",
//                 "dateReceived": "2025-12-09",
//                 "tatRequested": null,
//                 "reportDate": "2025-12-16",
//                 "projectName": null,
//                 "poNumber": null
//             },
//             {
//                 "id": 19546,
//                 "orderNumber": "25-015005",
//                 "creationDate": "2025-12-09",
//                 "limsID": "L2N/P13qp11fE5fK08m01L_",
//                 "projectedCurrency": null,
//                 "projectedNet": null,
//                 "projectedTax": null,
//                 "projectedGross": null,
//                 "reorderable": false,
//                 "lastModified": "2025-12-16 14:28:51",
//                 "registrationMaskId": null,
//                 "orderDocuments": [
//                     {
//                         "id": 598895,
//                         "filePath": "/customerPortal/storage/aa82e913-def7-4310-9027-563ce4cc3458",
//                         "fileName": "25-015005.coc.pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 598894,
//                         "filePath": "/customerPortal/storage/94c79361-00b2-4366-8c30-3a24a93c2ea2",
//                         "fileName": "25-015005-0001_Active Relief Lotion 0407.111825 (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     }
//                 ],
//                 "processingState": null,
//                 "orgUnit": null,
//                 "sampleQuantity": "1",
//                 "dateReceived": "2025-12-09",
//                 "tatRequested": null,
//                 "reportDate": "2025-12-16",
//                 "projectName": null,
//                 "poNumber": null
//             },
//             {
//                 "id": 19271,
//                 "orderNumber": "25-014088",
//                 "creationDate": "2025-11-18",
//                 "limsID": "L2N/qR_Yz01f79ye07u01L_",
//                 "projectedCurrency": null,
//                 "projectedNet": null,
//                 "projectedTax": null,
//                 "projectedGross": null,
//                 "reorderable": false,
//                 "lastModified": "2025-11-25 10:45:27",
//                 "registrationMaskId": null,
//                 "orderDocuments": [
//                     {
//                         "id": 593404,
//                         "filePath": "/customerPortal/storage/1159d1f9-8346-4bad-8826-35b3172bfcdb",
//                         "fileName": "25-014088-0002_Paw Butter 0404.111325 (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 593405,
//                         "filePath": "/customerPortal/storage/a817353c-0de8-46de-808b-7479b0f7645d",
//                         "fileName": "25-014088-0003_5000 MG Root Butter 0405.111225 (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 593406,
//                         "filePath": "/customerPortal/storage/8aaffaf6-d677-4843-ba87-a0297cb70852",
//                         "fileName": "25-014088.coc.pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 593403,
//                         "filePath": "/customerPortal/storage/0f44cba6-2e77-4093-a7b6-19487171df8e",
//                         "fileName": "25-014088-0001_2,000 MG Root Butter 0403.110625 (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     }
//                 ],
//                 "processingState": null,
//                 "orgUnit": null,
//                 "sampleQuantity": "3",
//                 "dateReceived": "2025-11-18",
//                 "tatRequested": null,
//                 "reportDate": "2025-11-26",
//                 "projectName": null,
//                 "poNumber": null
//             },
//             {
//                 "id": 18849,
//                 "orderNumber": "25-012707",
//                 "creationDate": "2025-10-21",
//                 "limsID": "L2N/BWBKV11ezwX_0Ce01L_",
//                 "projectedCurrency": null,
//                 "projectedNet": null,
//                 "projectedTax": null,
//                 "projectedGross": null,
//                 "reorderable": false,
//                 "lastModified": "2025-10-28 10:01:28",
//                 "registrationMaskId": null,
//                 "orderDocuments": [
//                     {
//                         "id": 589590,
//                         "filePath": "/customerPortal/storage/7d621006-c3ac-442a-815e-48427455a8fe",
//                         "fileName": "25-012707-0002_1000 MG Natural Tincture (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 589589,
//                         "filePath": "/customerPortal/storage/ae773021-cb0e-4971-af0a-94de302e43cd",
//                         "fileName": "25-012707-0003_500 MG Pet CBD Drops (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 589591,
//                         "filePath": "/customerPortal/storage/e9f0ef32-9b6f-4742-b54c-186810b45fd3",
//                         "fileName": "25-012707.coc.pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 589592,
//                         "filePath": "/customerPortal/storage/d2b08b08-23c9-441a-a2ae-d838d05e1cab",
//                         "fileName": "25-012707-0001_2000 MG Mango Passion (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     }
//                 ],
//                 "processingState": null,
//                 "orgUnit": null,
//                 "sampleQuantity": "3",
//                 "dateReceived": "2025-10-21",
//                 "tatRequested": null,
//                 "reportDate": "2025-10-28",
//                 "projectName": null,
//                 "poNumber": null
//             },
//             {
//                 "id": 18529,
//                 "orderNumber": "25-012466",
//                 "creationDate": "2025-10-16",
//                 "limsID": "L2N/CSoTQ01eyHX20Al01L_",
//                 "projectedCurrency": null,
//                 "projectedNet": null,
//                 "projectedTax": null,
//                 "projectedGross": null,
//                 "reorderable": false,
//                 "lastModified": "2025-10-22 10:49:25",
//                 "registrationMaskId": null,
//                 "orderDocuments": [
//                     {
//                         "id": 588640,
//                         "filePath": "/customerPortal/storage/5d39afec-cc27-4922-bdee-b5aa84575de2",
//                         "fileName": "25-012466-0001_5,000 MG Root Butter (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 588642,
//                         "filePath": "/customerPortal/storage/fe57ebcf-2281-4dbd-9c46-28b95db1d493",
//                         "fileName": "25-012466.coc.pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     },
//                     {
//                         "id": 588641,
//                         "filePath": "/customerPortal/storage/984b441b-d2cd-409a-9483-69f658c0d7b4",
//                         "fileName": "25-012466-0002_D8 Arnica Lotion (consumer-facing).pdf",
//                         "data": null,
//                         "uploadedByLab": true
//                     }
//                 ],
//                 "processingState": null,
//                 "orgUnit": null,
//                 "sampleQuantity": "2",
//                 "dateReceived": "2025-10-15",
//                 "tatRequested": null,
//                 "reportDate": "2025-10-22",
//                 "projectName": null,
//                 "poNumber": null
//             }
//         ],
//         "totalItems": 480,
//         "totalPages": 48,
//         "currentPage": 0
//     }
// }
