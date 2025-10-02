'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'Все работы' },
    { id: 'manicure', name: 'Маникюр' },
    { id: 'pedicure', name: 'Педикюр' },
    { id: 'design', name: 'Дизайн' },
    { id: 'wedding', name: 'Свадебный' },
    { id: 'seasonal', name: 'Сезонный' }
  ];

  const galleryItems = [
    { id: 1, category: 'manicure', title: 'Классический френч', description: 'Элегантный французский маникюр' },
    { id: 2, category: 'design', title: 'Цветочный дизайн', description: 'Нежные цветы на нюдовом фоне' },
    { id: 3, category: 'manicure', title: 'Гель-лак красный', description: 'Яркий красный гель-лак' },
    { id: 4, category: 'pedicure', title: 'Педикюр нюд', description: 'Натуральный педикюр в нюдовых тонах' },
    { id: 5, category: 'wedding', title: 'Свадебный маникюр', description: 'Нежный дизайн для невесты' },
    { id: 6, category: 'design', title: 'Геометрический паттерн', description: 'Современный геометрический дизайн' },
    { id: 7, category: 'seasonal', title: 'Осенний маникюр', description: 'Теплые осенние цвета' },
    { id: 8, category: 'manicure', title: 'Матовый топ', description: 'Матовое покрытие с дизайном' },
    { id: 9, category: 'design', title: 'Мраморный эффект', description: 'Мраморная текстура на ногтях' },
    { id: 10, category: 'pedicure', title: 'Яркий педикюр', description: 'Летний яркий педикюр' },
    { id: 11, category: 'wedding', title: 'Кружевной дизайн', description: 'Ажурный кружевной паттерн' },
    { id: 12, category: 'seasonal', title: 'Новогодний маникюр', description: 'Праздничный новогодний дизайн' }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Героический блок */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Галерея <span className="text-primary">работ</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Более 1000 выполненных работ различных техник и стилей
          </p>
        </div>
      </section>

      {/* Фильтры */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 aspect-square mb-4">
                  {/* Плейсхолдер для фото */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                  </div>

                  {/* Оверлей при наведении */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Работы не найдены</h3>
              <p className="text-gray-600">Попробуйте выбрать другую категорию</p>
            </div>
          )}
        </div>
      </section>

      {/* Статистика */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Мои достижения
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Цифры, которыми можно гордиться
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="font-serif text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">Выполненных работ</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="font-serif text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="font-serif text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="font-serif text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Техник маникюра</div>
            </div>
          </div>
        </div>
      </section>

      {/* Популярные дизайны */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные дизайны сезона
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Трендовые дизайны, которые выбирают мои клиентки
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 aspect-square mb-6 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                    </svg>
                  </div>
                  <p className="font-medium">Минимализм</p>
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Минимализм</h3>
              <p className="text-gray-600">Чистые линии и простые формы</p>
            </div>

            <div className="text-center">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 to-blue-100 aspect-square mb-6 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-medium">Флористика</p>
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Цветочные мотивы</h3>
              <p className="text-gray-600">Нежные цветы и растительные узоры</p>
            </div>

            <div className="text-center">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 aspect-square mb-6 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="font-medium">Геометрия</p>
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Геометрические фигуры</h3>
              <p className="text-gray-600">Современные геометрические паттерны</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Хотите такой же маникюр?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Покажите мне понравившуюся работу или опишите желаемый дизайн — создам именно то, что вы хотите!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacts"
              className="bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg shadow-lg"
            >
              Записаться на дизайн
            </Link>
            <a
              href="tel:+79999999999"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-colors duration-200 font-semibold text-lg"
            >
              Обсудить дизайн
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
