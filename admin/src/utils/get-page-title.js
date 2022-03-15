import defaultSettings from '@/settings'

const title = defaultSettings.title || '鲸云CMS'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
