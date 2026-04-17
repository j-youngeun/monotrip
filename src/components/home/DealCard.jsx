export function DealCard({ deal }) {
  return (
    <article className="deal-card">
      <div className="deal-card__image" style={{ background: deal.image }}>
        <span className="deal-card__tag">{deal.city}</span>
      </div>
      <div className="deal-card__body">
        <strong>{deal.title}</strong>
        <p>{deal.description}</p>
        <div className="deal-card__footer">
          <span>{deal.price}</span>
          <button>예약하기</button>
        </div>
      </div>
    </article>
  );
}
