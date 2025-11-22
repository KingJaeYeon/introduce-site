import { getRegistry } from './getRegistry';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

/**
 * @param path
 * @param override
 * @example
 * // 정적 페이지
 * export async function generateMetadata() {
 *   return getMetadata("/about")
 * }
 *
 * // 동적 페이지
 * type Props = { params: { slug: string }}
 *
 * export async function generateMetadata({ params }: Props) {
 *   // 실제 포스트 데이터 가져오기
 *   const post = await fetch(`/api/posts/${params.slug}`).then(r => r.json())
 *
 *   return getMetadata(`/blog/${params.slug}`, {
 *     title: post?.title,
 *     description: post?.excerpt,
 *     openGraph: {
 *       images: [post?.thumbnail]
 *     }
 *   })
 * }
 */
export async function getMetadata(
  path: string,
  override?: Partial<Metadata>,
): Promise<Metadata> {
  // Registry를 가져온다 (JSON이든 API든 상관없음!)
  const registry = await getRegistry();

  // 정확한 매치 시도
  let match = registry[path];

  // 동적 라우트 매칭 (긴 경로 우선)
  if (!match) {
    const dynamicKey = Object.keys(registry)
      .filter((key) => key !== '/')
      .sort((a, b) => b.length - a.length)
      .find((key) => path.startsWith(key + '/') || path === key);

    if (dynamicKey) {
      match = registry[dynamicKey];
    }
  }

  const title = override?.title || match?.title || '기본 제목';
  const description =
    override?.description || match?.description || '기본 설명';
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: override?.openGraph?.images || match?.image,
      siteName: 'Introduce Site',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    ...override,
  };
}
