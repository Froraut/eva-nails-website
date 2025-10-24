import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Услуги и цены - Мастер маникюра Ева в Минске',
  description: 'Полный прайс-лист услуг мастера маникюра Евы в Минске. Классический маникюр, гель-лак, дизайн ногтей, педикюр и многое другое.',
};

export default function Services() {
  const services = [
    {
      category: 'Маникюр',
      items: [
        {
          name: 'Классический маникюр',
          description: 'Обрезной маникюр с обработкой кутикулы, полировкой ногтей и покрытием лаком',
          price: '50 BYN',
          duration: '60 мин'
        },
        {
          name: 'Европейский маникюр',
          description: 'Необрезной маникюр с использованием ремувера для кутикулы',
          price: '43 BYN',
          duration: '45 мин'
        },
        {
          name: 'Комбинированный маникюр',
          description: 'Сочетание обрезного и европейского маникюра',
          price: '60 BYN',
          duration: '75 мин'
        }
      ]
    },
    {
      category: 'Гель-лак',
      items: [
        {
          name: 'Гель-лак однотонный',
          description: 'Нанесение гель-лака выбранного цвета (включая маникюр)',
          price: '83 BYN',
          duration: '90 мин'
        },
        {
          name: 'Гель-лак с дизайном',
          description: 'Гель-лак с простым дизайном (френч, градиент, стемпинг)',
          price: '93 BYN',
          duration: '105 мин'
        },
        {
          name: 'Гель-лак премиум',
          description: 'Гель-лак премиум-класса с extended wear формулой',
          price: '107 BYN',
          duration: '90 мин'
        }
      ]
    },
    {
      category: 'Дизайн и нейл-арт',
      items: [
        {
          name: 'Френч классический',
          description: 'Классический французский маникюр с белой улыбкой',
          price: '17 BYN',
          duration: '30 мин'
        },
        {
          name: 'Градиент (омбре)',
          description: 'Плавный переход между двумя цветами',
          price: '13 BYN',
          duration: '25 мин'
        },
        {
          name: 'Стемпинг',
          description: 'Нанесение узора с помощью специальных пластин',
          price: '10 BYN',
          duration: '20 мин'
        },
        {
          name: 'Ручная роспись',
          description: 'Художественная роспись ногтей по индивидуальному эскизу',
          price: 'от 27 BYN',
          duration: 'от 45 мин'
        },
        {
          name: 'Стразы и декор',
          description: 'Украшение ногтей стразами, бульонками, фольгой',
          price: 'от 7 BYN',
          duration: 'от 15 мин'
        }
      ]
    },
    {
      category: 'Педикюр',
      items: [
        {
          name: 'Классический педикюр',
          description: 'Полный комплекс ухода за стопами и ногтями',
          price: '83 BYN',
          duration: '90 мин'
        },
        {
          name: 'Педикюр + гель-лак',
          description: 'Классический педикюр с покрытием гель-лаком',
          price: '117 BYN',
          duration: '120 мин'
        },
        {
          name: 'СПА-педикюр',
          description: 'Уходовый педикюр с парафинотерапией и массажем',
          price: '127 BYN',
          duration: '120 мин'
        }
      ]
    },
    {
      category: 'Коррекция и снятие',
      items: [
        {
          name: 'Снятие гель-лака',
          description: 'Безопасное снятие гель-лакового покрытия',
          price: '13 BYN',
          duration: '30 мин'
        },
        {
          name: 'Коррекция нарощенных ногтей',
          description: 'Поддержание формы и длины нарощенных ногтей',
          price: 'от 50 BYN',
          duration: 'от 60 мин'
        },
        {
          name: 'Ремонт ногтя',
          description: 'Восстановление сломанного ногтя',
          price: 'от 10 BYN',
          duration: 'от 20 мин'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Героический блок */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/10 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Услуги и <span className="text-primary">цены</span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг по уходу за ногтями с прозрачным ценообразованием
          </p>
        </div>
      </section>

      {/* Информация о ценах */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              Важная информация
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Качество гарантировано</h3>
                  <p className="text-gray-600 text-sm">Использую только профессиональные материалы</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Гибкий график</h3>
                  <p className="text-gray-600 text-sm">Работаю в удобное для вас время</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Индивидуальный подход</h3>
                  <p className="text-gray-600 text-sm">Учитываю все ваши пожелания</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Прайс-лист */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {services.map((category) => (
              <div key={category.category}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {category.items.map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6">
                      <div className="mb-4">
                        <div className="w-full h-28 md:h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-4 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">Фото услуги</span>
                        </div>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {service.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-primary text-xl">
                          {service.price}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Дополнительная информация */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Материалы и качество
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  В своей работе использую только профессиональные материалы от проверенных производителей:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>CND (Creative Nail Design) - премиум-класс гель-лаков</li>
                  <li>IBD - профессиональные базы и топы</li>
                  <li>Young Nails - материалы для наращивания</li>
                  <li>O.P.I - лаки и уходовые средства</li>
                  <li>EzFlow - акриловая система</li>
                </ul>
                <p>
                  Все инструменты проходят обязательную стерилизацию в сухожаровом шкафу после каждого использования.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Система скидок
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Постоянным клиентам</h3>
                  <p className="text-sm">Скидка 10% на все услуги при записи на постоянной основе</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Комплексные услуги</h3>
                  <p className="text-sm">Скидка 15% при записи на маникюр + педикюр в один день</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Свадебный маникюр</h3>
                  <p className="text-sm">Специальные цены для невест и их подружек</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Групповые записи</h3>
                  <p className="text-sm">Скидка 10% при записи от 3 человек</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-6">
            Готовы записаться?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Выберите удобное время и получите качественный маникюр уже сегодня!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacts"
              className="bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold text-base sm:text-lg shadow-lg w-full sm:w-auto"
            >
              Записаться онлайн
            </Link>
            <a
              href="tel:+375333014486"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-colors duration-200 font-semibold text-base sm:text-lg w-full sm:w-auto"
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


