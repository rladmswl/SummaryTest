// import { useRef, useState } from "react";
// // import "./App.css";
// import PostWrite from "../pages/PostWrite";
// import Table from "../shared/Table";

// const List = () => {
//   const [data, setData] = useState([]);

//   const dataId = useRef(0);

//   const onCreate = (author, summary) => {
//     const created_date = new Date().getTime();
//     const newItem = {
//       author,
//       summary,
//       created_date,
//       id: dataId.current
//     };
//     dataId.current += 1;
//     setData([newItem, ...data]);
//   };

//   const onRemove = (targetId) => {
//     const newDiaryList = data.filter((it) => it.id !== targetId);
//     setData(newDiaryList);
//   };

//   const onEdit = (targetId, newSummary) => {
//     setData(
//       data.map((it) =>
//         it.id === targetId ? { ...it, summary: newSummary } : it
//       )
//     );
//   };

//   return (
//     <div className="Data">
//       <PostWrite onCreate={onCreate} />
//       <Table onEdit={onEdit} onRemove={onRemove} diaryList={data} /> 
//     </div>
//   );
// };
// export default List;
