
import { getLatestBlogPosts } from './src/lib/tistory';

async function testRSS() {
  console.log("Fetching RSS...");
  const posts = await getLatestBlogPosts(4);
  console.log(`Found ${posts.length} posts`);
  posts.forEach((post, i) => {
    console.log(`[${i}] Title: ${post.title}`);
    console.log(`    Image: ${post.imageUrl}`);
    console.log(`    Link: ${post.link}`);
  });
}

testRSS();
