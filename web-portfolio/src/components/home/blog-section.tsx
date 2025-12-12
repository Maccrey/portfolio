"use client";

import { useEffect, useState } from "react";
import type { BlogPost } from "@/lib/tistory";
import { getLatestBlogPostsClient } from "@/lib/tistory";
import { BlogCard } from "./blog-card";

export function BlogSection({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const refreshPosts = async () => {
      setRefreshing(true);
      const latest = await getLatestBlogPostsClient(4);
      if (!isMounted) return;
      if (latest.length) {
        setPosts(latest);
      }
      setRefreshing(false);
    };

    refreshPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const hasPosts = posts.length > 0;

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
        <div className="hidden items-center gap-3 md:flex">
          {refreshing && (
            <span className="text-xs text-[var(--text-muted)]">Updating…</span>
          )}
          <a
            href="https://code-lab.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            View all posts →
          </a>
        </div>
      </div>

      {hasPosts ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <BlogCard key={post.link} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[var(--border-subtle)] bg-[var(--surface-muted)] p-8 text-center text-[var(--text-muted)]">
          Blog feed is unavailable right now. Please try again in a moment.
        </div>
      )}
      
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
