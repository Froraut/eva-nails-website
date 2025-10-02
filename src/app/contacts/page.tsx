'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Форма отправлена:', formData);
    // Показать уведомление об успехе
    alert('Спасибо! Ваша заявка отправлена. Свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Героический блок */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Свяжитесь <span className="text-primary">со мной</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Готовы записаться на приём или есть вопросы? Буду рада помочь!
          </p>
        </div>
      </section>

      {/* Контактная информация и форма */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Контактная информация */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
                Контактная информация
              </h2>

              <div className="space-y-8">
                {/* Телефон */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                    <a href="tel:+79999999999" className="text-primary hover:text-primary-dark text-lg">
                      +7 (999) 999-99-99
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Звоните с 9:00 до 21:00 без выходных
                    </p>
                  </div>
                </div>

                {/* Адрес */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                    <p className="text-gray-600">
                      Москва, Россия<br />
                      Метро ближайшее: уточнить при записи
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Работаю на выезде или в салоне по договорённости
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:eva.nails@example.com" className="text-primary hover:text-primary-dark">
                      eva.nails@example.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Отвечаю в течение 2 часов
                    </p>
                  </div>
                </div>

                {/* Социальные сети */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Социальные сети</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://instagram.com" className="text-gray-600 hover:text-primary transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="https://vk.com" className="text-gray-600 hover:text-primary transition-colors">
                        <span className="sr-only">VK</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15.684 0H8.316C3.703 0 0 3.703 0 8.316v7.368C0 20.297 3.703 24 8.316 24h7.368C20.297 24 24 20.297 24 15.684V8.316C24 3.703 20.297 0 15.684 0zm3.692 17.123h-2.058c-.169 0-.338-.053-.421-.158l-2.861-3.697v3.421c0 .434-.35.784-.784.784h-1.789c-.434 0-.784-.35-.784-.784V6.077c0-.434.35-.784.784-.784h2.058c.169 0 .338.053.421.158l2.861 3.697V6.727c0-.434.35-.784.784-.784h1.789c.434 0 .784.35.784.784v10.612c0 .434-.35.784-.784.784z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Режим работы */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  Режим работы
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница:</span>
                    <span className="font-medium">9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота:</span>
                    <span className="font-medium">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье:</span>
                    <span className="font-medium">11:00 - 19:00</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  ⚡ Срочные записи возможны вне графика по договорённости
                </p>
              </div>
            </div>

            {/* Форма записи */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
                Запишитесь онлайн
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900 placeholder:text-gray-500"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900 placeholder:text-gray-500"
                    placeholder="+7 (999) 999-99-99"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Интересующая услуга
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="classic">Классический маникюр</option>
                    <option value="gel">Гель-лак</option>
                    <option value="design">Дизайн ногтей</option>
                    <option value="pedicure">Педикюр</option>
                    <option value="complex">Комплекс (маникюр + педикюр)</option>
                    <option value="wedding">Свадебный маникюр</option>
                    <option value="consultation">Консультация</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none text-gray-900 placeholder:text-gray-500"
                    placeholder="Опишите желаемый дизайн, удобное время или задайте вопрос..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Отправить заявку
                </button>

                <p className="text-gray-600 text-sm text-center">
                  * Обязательные поля для заполнения
                </p>
              </form>

              {/* Альтернативные способы связи */}
              <div className="mt-8 p-6 bg-primary/5 rounded-2xl">
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
                  Другие способы связи
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+79999999999"
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors p-3 rounded-lg hover:bg-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Позвонить сейчас</span>
                  </a>
                  <a
                    href="https://wa.me/79999999999"
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors p-3 rounded-lg hover:bg-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                    </svg>
                    <span>Написать в WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Карта (заглушка) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Как меня найти
            </h2>
            <p className="text-lg text-gray-600">
              Работаю на выезде по Москве или в партнёрских салонах
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <p className="text-lg font-medium">Карта расположения</p>
                <p className="text-sm text-gray-400 mt-2">Адрес уточняется при записи</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
