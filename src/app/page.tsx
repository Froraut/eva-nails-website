import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Героический блок */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Красивые ногти — <span className="text-primary">это просто</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Профессиональный мастер маникюра Ева создаст для вас идеальный образ.
                От классического маникюра до трендового дизайна — всё для вашей красоты.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contacts"
                  className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-dark transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Записаться на приём
                </Link>
                <Link
                  href="/gallery"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-200 font-semibold text-lg"
                >
                  Посмотреть работы
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Фото работ мастера</p>
                  <p className="text-sm text-gray-400 mt-2">Скоро здесь появится галерея</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают Еву?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Профессиональный подход и внимание к каждой детали
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Опыт и качество</h3>
              <p className="text-gray-600">
                Более 5 лет опыта в создании идеального маникюра. Использую только профессиональные материалы и современные техники.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Удобное время</h3>
              <p className="text-gray-600">
                Гибкий график работы. Запись в удобное для вас время, включая выходные и вечерние часы.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Индивидуальный подход</h3>
              <p className="text-gray-600">
                Каждый дизайн создаётся с учётом ваших пожеланий, формы ногтей и образа жизни.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Популярные услуги */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              От классики до современных трендов — выбирайте то, что подходит именно вам
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Фото услуги</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Классический маникюр</h3>
              <p className="text-gray-600 mb-4">Аккуратный и ухоженный вид ваших ногтей</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-primary text-xl">от 1 500 ₽</span>
                <span className="text-gray-500 text-sm">60 мин</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-full h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Фото услуги</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Гель-лак</h3>
              <p className="text-gray-600 mb-4">Долговременное покрытие с огромной палитрой цветов</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-primary text-xl">от 2 000 ₽</span>
                <span className="text-gray-500 text-sm">90 мин</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-full h-48 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Фото услуги</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Дизайн ногтей</h3>
              <p className="text-gray-600 mb-4">Уникальные рисунки и декоративные элементы</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-primary text-xl">от 500 ₽</span>
                <span className="text-gray-500 text-sm">30 мин</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-lg"
            >
              Посмотреть все услуги
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Что говорят клиентки
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Реальные отзывы о работе мастера
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Ева - настоящий профессионал! Уже несколько лет хожу только к ней. Качество всегда на высоте, и всегда прислушивается к пожеланиям.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Анна М.</div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Очень довольна работой Евы! Делала свадебный маникюр - получилось именно то, что хотела. Буду рекомендовать подругам!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Мария К.</div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Прекрасный мастер! Всегда чисто, аккуратно и стерильно. Ногти держатся долго, цвет не тускнеет. Рекомендую!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Елена В.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы к преображению?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Запишитесь на приём прямо сейчас и получите красивые ухоженные ногти уже сегодня!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacts"
              className="bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg shadow-lg"
            >
              Записаться онлайн
            </Link>
            <a
              href="tel:+79999999999"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-colors duration-200 font-semibold text-lg"
            >
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
