import { SectionHeader } from "../components/common/SectionHeader";
import rightArrow from "../assets/right_arrow.svg";
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
      <div className="status-bar__icons" aria-hidden="true">
        <svg
          className="status-bar__cellular"
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="11"
          viewBox="0 0 17 11"
          fill="none"
        >
          <path
            d="M1 6.875H2C2.55228 6.875 3 7.33671 3 7.90625V9.96875C3 10.5383 2.55228 11 2 11H1C0.447715 11 0 10.5383 0 9.96875V7.90625C0 7.33671 0.447715 6.875 1 6.875ZM5.66666 4.8125H6.66666C7.21894 4.8125 7.66666 5.27421 7.66666 5.84375V9.96875C7.66666 10.5383 7.21894 11 6.66666 11H5.66666C5.11437 11 4.66666 10.5383 4.66666 9.96875V5.84375C4.66666 5.27421 5.11437 4.8125 5.66666 4.8125ZM10.3333 2.40625H11.3333C11.8856 2.40625 12.3333 2.86796 12.3333 3.4375V9.96875C12.3333 10.5383 11.8856 11 11.3333 11H10.3333C9.78106 11 9.33334 10.5383 9.33334 9.96875V3.4375C9.33334 2.86796 9.78106 2.40625 10.3333 2.40625ZM15 0H16C16.5523 0 17 0.461706 17 1.03125V9.96875C17 10.5383 16.5523 11 16 11H15C14.4477 11 14 10.5383 14 9.96875V1.03125C14 0.461706 14.4477 0 15 0Z"
            fill="#2D3136"
          />
        </svg>
        <svg
          className="status-bar__wifi"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="11"
          viewBox="0 0 16 11"
          fill="none"
        >
          <path
            d="M8.00045 2.28448C10.3219 2.28457 12.5546 3.13869 14.2371 4.67028C14.3637 4.78852 14.5662 4.78703 14.691 4.66693L15.9021 3.4966C15.9653 3.43569 16.0005 3.35318 16 3.26733C15.9995 3.18148 15.9632 3.09937 15.8993 3.03917C11.4834 -1.01306 4.51677 -1.01306 0.100858 3.03917C0.0368901 3.09933 0.000603985 3.18141 7.11481e-06 3.26726C-0.000575146 3.35311 0.034602 3.43565 0.0977377 3.4966L1.30913 4.66693C1.43383 4.78721 1.63652 4.78871 1.76314 4.67028C3.44581 3.13859 5.67876 2.28447 8.00045 2.28448ZM8.00045 6.09206C9.27594 6.09199 10.5059 6.54594 11.4514 7.36571C11.5792 7.48206 11.7807 7.47954 11.9053 7.36003L13.115 6.1897C13.1787 6.12831 13.2141 6.04503 13.2132 5.9585C13.2122 5.87196 13.1751 5.78939 13.1101 5.72926C10.231 3.16485 5.7723 3.16485 2.89317 5.72926C2.82814 5.78939 2.79105 5.872 2.79019 5.95857C2.78935 6.04513 2.82481 6.1284 2.88865 6.1897L4.09797 7.36003C4.22263 7.47954 4.42407 7.48206 4.55195 7.36571C5.49679 6.54648 6.7258 6.09257 8.00045 6.09206ZM10.3252 8.88514C10.3899 8.82434 10.4255 8.74068 10.4236 8.6539C10.4218 8.56712 10.3826 8.48492 10.3154 8.4267C8.97904 7.34443 7.02182 7.34443 5.68548 8.4267C5.6182 8.48487 5.57897 8.56705 5.57705 8.65383C5.57513 8.7406 5.6107 8.82429 5.67536 8.88514L7.76821 10.9071C7.82955 10.9666 7.91319 11 8.00045 11C8.08771 11 8.17132 10.9666 8.23266 10.9071L10.3252 8.88514Z"
            fill="#2D3136"
          />
        </svg>
        <svg
          className="status-bar__battery"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="12"
          viewBox="0 0 26 12"
          fill="none"
        >
          <path
            opacity="0.35"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.748 0.5C20.8627 0.5 21.2744 0.597244 21.6839 0.81625C22.0523 1.01331 22.3415 1.3025 22.5386 1.67097C22.7576 2.08048 22.8548 2.49216 22.8548 3.6068V8.39319C22.8548 9.50784 22.7576 9.91952 22.5386 10.329C22.3415 10.6975 22.0523 10.9867 21.6839 11.1837C21.2744 11.4028 20.8627 11.5 19.748 11.5H3.6068C2.49216 11.5 2.08048 11.4028 1.67097 11.1837C1.3025 10.9867 1.01331 10.6975 0.81625 10.329C0.597244 9.91952 0.5 9.50784 0.5 8.39319V3.6068C0.5 2.49216 0.597244 2.08048 0.81625 1.67097C1.01331 1.3025 1.3025 1.01331 1.67097 0.81625C2.08048 0.597244 2.49216 0.5 3.6068 0.5H19.748Z"
            stroke="#2D3136"
          />
          <path
            opacity="0.4"
            d="M24.4512 3.871V8.12907C25.3078 7.76843 25.8649 6.9295 25.8649 6.00003C25.8649 5.07057 25.3078 4.23164 24.4512 3.871Z"
            fill="#2D3136"
          />
          <path
            d="M3.91621 2.09677H19.4384C20.0711 2.09677 20.3006 2.16265 20.5319 2.28635C20.7632 2.41005 20.9447 2.59158 21.0684 2.82288C21.1921 3.05418 21.258 3.28361 21.258 3.9163V8.08369C21.258 8.71638 21.1921 8.94581 21.0684 9.17711C20.9447 9.40842 20.7632 9.58994 20.5319 9.71364C20.3006 9.83735 20.0711 9.90322 19.4384 9.90322H3.91621C3.28352 9.90322 3.05409 9.83735 2.82279 9.71364C2.59149 9.58994 2.40996 9.40842 2.28626 9.17711C2.16256 8.94581 2.09668 8.71638 2.09668 8.08369V3.9163C2.09668 3.28361 2.16256 3.05418 2.28626 2.82288C2.40996 2.59158 2.59149 2.41005 2.82279 2.28635C3.05409 2.16265 3.28352 2.09677 3.91621 2.09677Z"
            fill="#2D3136"
          />
        </svg>
      </div>
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
              <p>
                <span>{item.description}</span>
                <img className="featured-card__arrow" src={rightArrow} alt="" aria-hidden="true" />
              </p>
            </div>

            <div className="featured-card__safety">
              <div className="featured-card__safety-copy">
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
