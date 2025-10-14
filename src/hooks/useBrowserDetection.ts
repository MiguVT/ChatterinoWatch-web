import { useState, useEffect } from 'react'

export interface BrowserInfo {
  type: 'chrome' | 'firefox'
  name: string
  isChromium: boolean
  storeUrl: string
  extensionId: string
  isMobile: boolean
  isLinux: boolean
  platformWarning?: string
  iconName: string // For react-icons: 'SiGooglechrome', 'SiFirefox', 'SiLibrewolf', etc.
}

export function useBrowserDetection(): BrowserInfo {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo>({
    type: 'chrome',
    name: 'Chrome',
    isChromium: true,
    storeUrl: 'https://chromewebstore.google.com/detail/pnpdojeoploiomepdhikamokjmapkimh',
    extensionId: 'pnpdojeoploiomepdhikamokjmapkimh',
    isMobile: false,
    isLinux: false,
    iconName: 'SiGooglechrome',
  })

  useEffect(() => {
    const detectBrowser = () => {
      const ua = navigator.userAgent
      const isChromium = !!(window as any).chrome

      // Detect mobile devices
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)

      // Detect Linux (excluding Android)
      const isLinux = /Linux/i.test(ua) && !/Android/i.test(ua)

      // Generate platform warning
      const getPlatformWarning = () => {
        if (isMobile)
          return 'ChatterinoWatch only works on Windows. Mobile platforms are not supported.'
        if (isLinux) return 'ChatterinoWatch is confirmed for Windows. Linux support is untested.'
        return undefined
      }

      const platformWarning = getPlatformWarning()

      // Detect Firefox-based browsers
      if (ua.indexOf('Firefox') > -1) {
        // Waterfox detection (Waterfox DOES include its name in UA)
        if (ua.indexOf('Waterfox') > -1) {
          return {
            type: 'firefox' as const,
            name: 'Waterfox',
            isChromium: false,
            storeUrl: 'https://addons.mozilla.org/en-US/firefox/addon/chatterinowatch/',
            extensionId: 'chatterino-watch@chatterinowatch.miguvt.com',
            isMobile,
            isLinux,
            platformWarning,
            iconName: 'SiFirefox', // Waterfox uses Firefox icon
          }
        }

        // Standard Firefox (includes LibreWolf since it doesn't identify itself)
        return {
          type: 'firefox' as const,
          name: 'Firefox',
          isChromium: false,
          storeUrl: 'https://addons.mozilla.org/en-US/firefox/addon/chatterinowatch/',
          extensionId: 'chatterino-watch@chatterinowatch.miguvt.com',
          isMobile,
          isLinux,
          platformWarning,
          iconName: 'SiFirefox',
        }
      }

      // Detect Chromium-based browsers
      if (isChromium) {
        // IMPORTANT: Order matters! Check specific browsers before generic ones

        // Brave detection (has navigator.brave API)
        if ((window as any).navigator.brave !== undefined) {
          return {
            type: 'chrome' as const,
            name: 'Brave',
            isChromium: true,
            storeUrl: 'https://chromewebstore.google.com/detail/pnpdojeoploiomepdhikamokjmapkimh',
            extensionId: 'pnpdojeoploiomepdhikamokjmapkimh',
            isMobile,
            isLinux,
            platformWarning,
            iconName: 'SiBrave',
          }
        }

        // Edge detection (reports as "Edg/" in UA - yes, without the 'e'!)
        if (ua.indexOf('Edg/') > -1) {
          return {
            type: 'chrome' as const,
            name: 'Edge',
            isChromium: true,
            storeUrl: 'https://chromewebstore.google.com/detail/pnpdojeoploiomepdhikamokjmapkimh',
            extensionId: 'pnpdojeoploiomepdhikamokjmapkimh',
            isMobile,
            isLinux,
            platformWarning,
            iconName: 'FaEdge', // Using FaEdge
          }
        }

        // Opera/Opera GX detection (reports as "OPR/" in UA)
        if (ua.indexOf('OPR/') > -1) {
          return {
            type: 'chrome' as const,
            name: 'Opera',
            isChromium: true,
            storeUrl: 'https://chromewebstore.google.com/detail/pnpdojeoploiomepdhikamokjmapkimh',
            extensionId: 'pnpdojeoploiomepdhikamokjmapkimh',
            isMobile,
            isLinux,
            platformWarning,
            iconName: 'SiOpera',
          }
        }

        // Vivaldi detection (reports "Vivaldi" in UA)
        if (ua.indexOf('Vivaldi') > -1) {
          return {
            type: 'chrome' as const,
            name: 'Vivaldi',
            isChromium: true,
            storeUrl: 'https://chromewebstore.google.com/detail/pnpdojeoploiomepdhikamokjmapkimh',
            extensionId: 'pnpdojeoploiomepdhikamokjmapkimh',
            isMobile,
            isLinux,
            platformWarning,
            iconName: 'SiVivaldi',
          }
        }

        // Standard Chrome
        return {
          type: 'chrome' as const,
          name: 'Chrome',
          isChromium: true,
          storeUrl: 'https://chromewebstore.google.com/detail/pnpdojeoploiomepdhikamokjmapkimh',
          extensionId: 'pnpdojeoploiomepdhikamokjmapkimh',
          isMobile,
          isLinux,
          platformWarning,
          iconName: 'SiGooglechrome',
        }
      }

      // Default to Chrome
      return {
        type: 'chrome' as const,
        name: 'Chrome',
        isChromium: true,
        storeUrl: 'https://chromewebstore.google.com/detail/pnpdojeoploiomepdhikamokjmapkimh',
        extensionId: 'pnpdojeoploiomepdhikamokjmapkimh',
        isMobile,
        isLinux,
        platformWarning,
        iconName: 'SiGooglechrome',
      }
    }

    setBrowserInfo(detectBrowser())
  }, [])

  return browserInfo
}
