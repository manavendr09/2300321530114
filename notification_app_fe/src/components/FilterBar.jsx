import "../css/filter.css";

function FilterBar({ filter, setFilter }) {
  return (
    <div className="filterBar">
      <select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
      >
        <option>All</option>

        <option>Result</option>

        <option>Placement</option>

        <option>Event</option>
      </select>
    </div>
  );
}

export default FilterBar;