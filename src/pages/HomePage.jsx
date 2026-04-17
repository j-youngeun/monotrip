import { SectionHeader } from "../components/common/SectionHeader";
import {
  communityPosts,
  destinationCircles,
  diningFilters,
  exclusiveDeals,
  featuredDestinations,
  restaurants,
  topBarAssets,
} from "../data/homeData";

function StatusBar() {
  return (
    <div className="status-bar">
      <span className="status-bar__time">09:47</span>
      <img src={topBarAssets.statusRight} alt="" aria-hidden="true" />
    </div>
  );
}

function ProfileBar() {
  return (
    <div className="profile-bar">
      <div className="profile-bar__user">
        <img src={topBarAssets.avatar} alt="프로필" />
        <span>영은님, 반가워요.</span>
      </div>
      <div className="profile-bar__actions">
        <button type="button" aria-label="공유">
          <img src={topBarAssets.share} alt="" aria-hidden="true" />
        </button>
        <button type="button" aria-label="알림">
          <img src={topBarAssets.alert} alt="" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function FeaturedRail() {
  return (
    <section className="featured-rail">
      <div className="featured-rail__title">
        <img src={topBarAssets.safetyIcon} alt="" aria-hidden="true" />
        <span>오늘의 추천 여행지</span>
      </div>

      <div className="featured-rail__scroll">
        {featuredDestinations.map((item) => (
          <article
            key={item.id}
            className={
              item.highlighted ? "featured-card is-highlighted" : "featured-card"
            }
          >
            <div className="featured-card__copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <div className="featured-card__safety">
              <div>
                <strong>{item.safetyTitle}</strong>
                <span>{item.safetyMeta}</span>
              </div>
              <div className="featured-card__score">
                <img src={topBarAssets.star} alt="" aria-hidden="true" />
                <strong>{item.score}</strong>
                <span>/ 10</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DestinationCircles() {
  return (
    <div className="destination-circles">
      {destinationCircles.map((item) => (
        <button key={item.id} className="destination-circles__item" type="button">
          <img src={item.image} alt={item.name} />
        </button>
      ))}
    </div>
  );
}

function DealCard({ item }) {
  return (
    <article className="exclusive-card">
      <div className="exclusive-card__imageWrap">
        {item.badge ? <span className="exclusive-card__badge">{item.badge}</span> : null}
        <img src={item.image} alt={item.title} className="exclusive-card__image" />
      </div>
      <div className="exclusive-card__body">
        <strong>{item.title}</strong>
        <span>{item.meta}</span>
        <div className="exclusive-card__price">
          <del>{item.originalPrice}</del>
          <div>
            <strong>{item.price}</strong>
            <span>/ 박</span>
          </div>
        </div>
        <button type="button">예약하기</button>
      </div>
    </article>
  );
}

function RestaurantCard({ item }) {
  return (
    <article className="restaurant-card">
      <img src={item.image} alt={item.title} className="restaurant-card__image" />
      <div className="restaurant-card__body">
        <div className="restaurant-card__top">
          <strong>{item.title}</strong>
          <span className="restaurant-card__rating">★ {item.rating}</span>
        </div>
        <p>{item.description}</p>
        <span>{item.location}</span>
      </div>
    </article>
  );
}

function CommunityCard({ item }) {
  return (
    <article className="community-card">
      <div
        className={
          item.platformType === "naver"
            ? "community-card__icon is-naver"
            : "community-card__icon is-youtube"
        }
      >
        {item.platform}
      </div>
      <div className="community-card__body">
        <strong>{item.title}</strong>
        <span>{item.meta}</span>
      </div>
      <span className="community-card__arrow">›</span>
    </article>
  );
}

export function HomePage() {
  return (
    <main className="page home-page">
      <StatusBar />
      <ProfileBar />

      <div className="home-scroll">
        <section className="hero-copy">
          <div className="hero-copy__text">
            <h1>
              국가 치안 데이터 기반
              <br />
              여행지 추천
            </h1>
            <p>
              <span>혼자 여행</span>도 안심할 수 있도록
              <br />
              실시간 안전 정보를 제공해드려요
            </p>
          </div>
          <img className="hero-copy__momo" src={topBarAssets.momo} alt="" aria-hidden="true" />
        </section>

        <FeaturedRail />

        <section className="home-section">
          <SectionHeader
            title="지금 인기있는 여행지"
            subtitle="인천공항 1인 출국 기준 인기 여행지"
          />
          <DestinationCircles />
        </section>

        <section className="home-section">
          <SectionHeader
            title="모노트립 단독 특가"
            subtitle="최대 40% 할인된 가격으로 떠나세요"
            action="›"
          />
          <div className="exclusive-scroll">
            {exclusiveDeals.map((item) => (
              <DealCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="home-section">
          <SectionHeader title="혼자서도 편한 식당" action="›" />
          <div className="filter-row">
            {diningFilters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={index === 0 ? "filter-chip is-active" : "filter-chip"}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="restaurant-list">
            {restaurants.map((item) => (
              <RestaurantCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="home-section home-section--last">
          <SectionHeader title="커뮤니티" action="›" />
          <div className="community-list">
            {communityPosts.map((item) => (
              <CommunityCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
