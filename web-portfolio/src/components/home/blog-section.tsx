import { getLatestBlogPosts } from "@/lib/tistory";
import { BlogCard } from "./blog-card";

export async function BlogSection() {
  const posts = await getLatestBlogPosts(4);

  return (
    <section id="blog" className="py-20">
      <div className="mb-10 flex items-end justify-between px-4">
        <div>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            Thoughts, tutorials, and insights from my dev journey
          </p>
        </div>
        <a
          href="https://code-lab.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors md:block"
        >
          View all posts →
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <BlogCard key={post.link} post={post} />
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <a
          href="https://code-lab.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          View all posts →
        </a>
      </div>
    </section>
  );
}
