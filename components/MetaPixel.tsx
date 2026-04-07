// components/MetaPixel.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const PIXEL_ID = '1500943491547667';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export default function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // Загружаем скрипт пикселя один раз
    if (typeof window.fbq === 'undefined') {
      window.fbq = function () {
        window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
      };
      window.fbq.push = window.fbq;
      window.fbq.queue = [];

      const script = document.createElement('script');
      script.src = `https://connect.facebook.net/en_US/fbevents.js`;
      script.async = true;
      document.head.appendChild(script);

      // Инициализация
      window.fbq('init', PIXEL_ID);
      window.fbq('track', 'PageView');
    } else {
      // Если пиксель уже загружен, просто отправляем PageView
      window.fbq('track', 'PageView');
    }
  }, []);

  // Отслеживаем изменение маршрута в Next.js (SPA переходы)
  useEffect(() => {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return null;
}