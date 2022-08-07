import Item from "../shared/Item";

const Table = ({ onEdit, onRemove, DataList }) => {
  return (
    <div className="Table">
      <h2>자료 리스트</h2>
      <h4>{DataList.length}개의 자료가 있습니다.</h4>
      <div>
        {DataList.map((it) => (
          <Item key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

Table.defaultProps = {
  DataList: []
};

export default Table;
