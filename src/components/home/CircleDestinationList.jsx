export function CircleDestinationList({ items }) {
  return (
    <div className="circle-list" aria-label="인기 있는 여행지">
      {items.map((item) => (
        <button className="circle-list__item" key={item.id}>
          <span className="circle-list__image" aria-hidden="true">
            {item.emoji}
          </span>
          <span className="circle-list__title">{item.title}</span>
        </button>
      ))}
    </div>
  );
}
