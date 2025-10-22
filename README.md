EVA — сайт мастера маникюра в Москве

## Технологии
- Next.js 15 (App Router, Turbopack)
- TypeScript
- Tailwind CSS 4

## Запуск локально
```bash
npm run dev
# http://localhost:3001
```

## Структура
```
src/app/
  page.tsx        # Главная
  about/page.tsx  # О мастере
  services/page.tsx # Услуги и цены
  gallery/page.tsx  # Галерея
  contacts/page.tsx # Контакты
  layout.tsx      # SEO/шрифты/стили
  globals.css     # Глобальные стили
  icon.svg        # Иконка сайта (Е)
src/components/
  Header.tsx
  Footer.tsx
public/
  *.svg           # EVA-иконки
```

## Деплой
1) GitHub: push в `main`
2) Vercel: импортируйте репозиторий и нажмите Deploy

## Контакты (обновите в коде при необходимости)
- Телефон, email, соцсети — `src/components/Footer.tsx`
