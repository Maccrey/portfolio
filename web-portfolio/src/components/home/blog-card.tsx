"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/tistory";
import { getAssetPath } from "@/lib/utils";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card group flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl h-full"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.imageUrl || getAssetPath("/blog-fallback.png")}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
      </div>
      
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2 text-xs text-[var(--text-muted)]">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>Tistory</span>
        </div>
        
        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-[var(--text-primary)] group-hover:text-gradient transition-colors">
          {post.title}
        </h3>
        
        <p className="line-clamp-3 text-sm text-[var(--text-secondary)]">
          {post.summary}
        </p>
        
        <div className="mt-auto pt-4 text-sm font-medium text-accent-primary group-hover:text-accent-secondary transition-colors flex items-center gap-1">
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
