import { SearchIcon, BellIcon, StarIcon } from "../icons/AppIcons";

export function HeroCard({ profile, hero }) {
  return (
    <section className="hero-section">
      <div className="hero-topbar">
        <div className="avatar-badge" aria-hidden="true">
          MT
        </div>
        <div className="profile-copy">
          <span>{profile.greeting}</span>
          <strong>{profile.subtitle}</strong>
        </div>
        <button className="icon-button" aria-label="알림">
          <BellIcon />
        </button>
      </div>

      <div className="hero-heading">
        <p>추천해드려요</p>
        <h1>
          매칭지 추천
          <br />
          여행지 큐레이션
        </h1>
        <span>{hero.copy}</span>
      </div>

      <div className="hero-card">
        <div className="hero-card__header">
          <span className="hero-badge">
            <SearchIcon />
            {hero.badge}
          </span>
        </div>

        <div className="hero-character" aria-hidden="true">
          <div className="hero-character__shadow" />
          <div className="hero-character__body">
            <div className="hero-character__eye hero-character__eye--left" />
            <div className="hero-character__eye hero-character__eye--right" />
          </div>
          <div className="hero-character__wing" />
        </div>

        <div className="hero-route">
          <div>
            <strong>{hero.route}</strong>
            <p>{hero.routeMeta}</p>
          </div>
          <div className="hero-score">
            <StarIcon />
            <span>{hero.rating}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
