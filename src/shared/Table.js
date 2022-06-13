import Item from "../shared/Item";

const Table = ({ onEdit, onRemove, List }) => {
  return (
    <div className="Table">
      <h2>자료 리스트</h2>
      <h4>{List.length}개의 자료가 있습니다.</h4>
      <div>
        {List.map((it) => (
          <Item key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

Table.defaultProps = {
  List: []
};

export default Table;
