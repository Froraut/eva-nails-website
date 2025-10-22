import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'О мастере Еве - Профессиональный маникюр в Москве',
  description: 'Узнайте больше о мастере маникюра Еве. Опыт более 5 лет, профессиональное образование и индивидуальный подход к каждому клиенту.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Героический блок */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/10 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            О мастере <span className="text-primary">Еве</span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональный мастер маникюра с многолетним опытом работы
          </p>
        </div>
      </section>

      {/* Основная информация */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
                Моя история
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Здравствуйте! Меня зовут Ева, и я профессиональный мастер маникюра с более чем 5-летним опытом работы в индустрии красоты.
                </p>
                <p>
                  Моя страсть к маникюру началась много лет назад, когда я осознала, насколько важно для женщины чувствовать себя уверенной и красивой. Я прошла профессиональное обучение в лучших школах маникюра Москвы и регулярно повышаю квалификацию, изучая новейшие техники и тенденции.
                </p>
                <p>
                  За годы работы я помогла тысячам женщин обрести красивые и ухоженные ногти. Каждая клиентка для меня особенная, и я всегда стремлюсь понять её индивидуальные предпочтения и стиль жизни, чтобы создать идеальный маникюр.
                </p>
                <p>
                  В своей работе я использую только профессиональные материалы премиум-класса и соблюдаю все стандарты стерилизации инструментов. Ваша безопасность и качество результата — мой главный приоритет.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-64 md:h-80 lg:h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Фото мастера Евы</p>
                  <p className="text-sm text-gray-400 mt-2">Профессиональный портрет</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Навыки и сертификаты */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Навыки и специализации
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Постоянно развиваюсь и изучаю новые техники для создания идеального маникюра
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Классический маникюр</h3>
              <p className="text-gray-600 text-sm">Традиционные техники ухода за ногтями</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Гель-лак</h3>
              <p className="text-gray-600 text-sm">Долговременное покрытие с огромной палитрой</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Нейл-арт</h3>
              <p className="text-gray-600 text-sm">Художественный дизайн и роспись ногтей</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Стерилизация</h3>
              <p className="text-gray-600 text-sm">Максимальная безопасность и гигиена</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Мои принципы работы
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Что важно для меня в работе с клиентами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Качество</h3>
              <p className="text-gray-600">
                Использую только профессиональные материалы и современное оборудование для достижения идеального результата.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Комфорт</h3>
              <p className="text-gray-600">
                Создаю уютную атмосферу, где каждая клиентка чувствует себя расслабленно и уверенно.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Индивидуальность</h3>
              <p className="text-gray-600">
                Каждый дизайн создаётся с учётом ваших пожеланий, формы ногтей и стиля жизни.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-6">
            Готовы записаться на приём?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь со мной для записи или консультации. Буду рада помочь вам создать идеальный маникюр!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacts"
              className="bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold text-base sm:text-lg shadow-lg w-full sm:w-auto"
            >
              Записаться
            </Link>
            <a
              href="tel:+79999999999"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-colors duration-200 font-semibold text-base sm:text-lg w-full sm:w-auto"
            >
              Позвонить
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


