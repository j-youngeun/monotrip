export function CommunityItem({ post }) {
  return (
    <article className="community-item">
      <div className="community-item__avatar" aria-hidden="true">
        {post.author}
      </div>
      <div className="community-item__content">
        <strong>{post.title}</strong>
        <span>{post.meta}</span>
      </div>
    </article>
  );
}
