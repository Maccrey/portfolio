"use client";

import { useEffect, useState } from "react";
import { TISTORY_CATEGORY, type BlogPost } from "@/lib/tistory";
import { getLatestBlogPostsClient } from "@/lib/tistory";
import { BlogCard } from "./blog-card";

export function BlogSection({ initialPosts, limit = 4 }: { initialPosts: BlogPost[]; limit?: number }) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const refreshPosts = async () => {
      setRefreshing(true);
      const latest = await getLatestBlogPostsClient(limit);
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
  }, [limit]);

  const hasPosts = posts.length > 0;

  return (
    <section id="blog" className="py-20">
      <div className="mb-10 flex items-end justify-between px-4">
        <div>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            개발 기록 <span className="text-gradient">& 고민</span>
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            {TISTORY_CATEGORY} 카테고리에서 진행 중인 개발과 문제 해결 기록을 소개합니다.
          </p>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          {refreshing && (
            <span className="text-xs text-[var(--text-muted)]">Updating…</span>
          )}
          <a
            href="https://code-lab.tistory.com/category/50%20year%20old%20flutter%20developer%20challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            티스토리에서 전체 글 보기 →
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
          글을 불러오지 못했습니다. 티스토리에서 기록을 확인해주세요.
        </div>
      )}
      
      <div className="mt-8 text-center md:hidden">
        <a
          href="https://code-lab.tistory.com/category/50%20year%20old%20flutter%20developer%20challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          티스토리에서 전체 글 보기 →
        </a>
      </div>
    </section>
  );
}
