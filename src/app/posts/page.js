import Link from "next/link";
import { CONFIG } from "../config";

export default async function PostsPage() {
  const res = await fetch(`${CONFIG.BASE_URL}/api/posts`);
  const { posts } = await res.json();

  return (
    // Styles are for readability; customize as you wish!
    <div>
      <h1>All Blog Posts</h1>
      <hr style={{ width: "220px" }} />
      <div style={{ paddingTop: "40px" }}>
        {posts.map((post) => (
          <div style={{ paddingTop: "2rem" }} key={post.id}>
            <article>
              <div style={{ fontSize: "20px", paddingBottom: "1rem" }}>
                <Link href={`posts/${post.id}`}>
                  <h2>{post.title}</h2>
                </Link>
              </div>
              <p style={{ paddingBottom: "30px" }}>{post.body}</p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
