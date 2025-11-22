import { MetadataRegistry } from '@/types/metadata';

/**
 * JSON 방식 (기본)
 */
async function getRegistryFromJson(): Promise<MetadataRegistry> {
  const registry = await import('@/data/registry.json');
  return registry.default as MetadataRegistry;
}

/**
 * API 방식 (DB/Supabase/Notion 등)
 */
async function getRegistryFromApi(): Promise<MetadataRegistry> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/metadata`,
    {
      next: { revalidate: 3600 }, // 1시간 캐싱
    },
  );
  return response.json();
}

/**
 * 환경변수로 전환
 * .env에서 METADATA_SOURCE=json 또는 api로 설정
 */
export async function getRegistry(): Promise<MetadataRegistry> {
  const source = process.env.METADATA_SOURCE || 'json';

  switch (source) {
    case 'api':
      return getRegistryFromApi();
    case 'json':
    default:
      return getRegistryFromJson();
  }
}
