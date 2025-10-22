'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'О мастере', href: '/about' },
    { name: 'Услуги и цены', href: '/services' },
    { name: 'Галерея', href: '/gallery' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">Е</span>
            </div>
            <span className="font-serif text-xl font-bold text-gray-900">ЕВА</span>
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Кнопка записи */}
          <div className="hidden md:block">
            <Link
              href="/contacts"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-200 font-medium"
            >
              Записаться
            </Link>
          </div>

          {/* Мобильное меню */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contacts"
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-200 font-medium text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Записаться
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


