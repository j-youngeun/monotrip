import { StarIcon } from "../icons/AppIcons";

export function RestaurantItem({ item }) {
  return (
    <article className="restaurant-item">
      <div className="restaurant-item__thumb" aria-hidden="true">
        {item.title.slice(0, 1)}
      </div>
      <div className="restaurant-item__content">
        <div className="restaurant-item__topline">
          <span className="pill">{item.pill}</span>
          <div className="rating">
            <StarIcon />
            <span>{item.rating}</span>
          </div>
        </div>
        <strong>{item.title}</strong>
        <p>{item.cuisine}</p>
        <span>{item.summary}</span>
      </div>
    </article>
  );
}
