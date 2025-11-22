import { getRegistry } from '@/lib/getRegistry';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default async function sitemap() {
  // Registry 가져오기 (JSON이든 API든 동일)
  const registry = await getRegistry();

  // 정적 라우트
  const staticRoutes = Object.keys(registry).map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date().toISOString(),
  }));

  // 동적 라우트 (선택)
  // const posts = await fetch(`${SITE_URL}/api/posts`).then(r => r.json())
  // const dynamicRoutes = posts.map((post: any) => ({
  //   url: `${SITE_URL}/blog/${post.slug}`,
  //   lastModified: post.updatedAt || new Date().toISOString()
  // }))

  return [
    ...staticRoutes,
    // ...dynamicRoutes
  ];
}
