"use client";
import { useState, useEffect } from "react";
import { SplashCursor } from "./components/SplashCursor";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { MolluskCard } from "./components/MolluskCard";
import { MolluskModal } from "./components/MolluskModal";
import { CategoryFilter } from "./components/CategoryFilter";
import { mollusks, Mollusk } from "./data/mollusks";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMollusk, setSelectedMollusk] = useState<Mollusk | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredMollusks = selectedCategory === "all" 
    ? mollusks 
    : mollusks.filter(mollusk => mollusk.category === selectedCategory);

  const handleMolluskSelect = (mollusk: Mollusk) => {
    setSelectedMollusk(mollusk);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedMollusk(null);
  };

  return (
    <>
      <SplashCursor />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navigation />
        
        {/* Hero Section */}
        <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Морские{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Моллюски
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Исследуйте удивительный мир морских моллюсков — от гигантских осьминогов 
                до крошечных улиток. Каждый вид уникален и заслуживает внимания.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Исследовать
                </button>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  Узнать больше
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                О проекте
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Наш проект посвящен изучению и популяризации знаний о морских моллюсках — 
                одной из самых разнообразных групп морских животных на планете.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Научный подход
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Все данные основаны на последних научных исследованиях и проверены экспертами.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Морская экосистема
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Изучаем роль моллюсков в морских экосистемах и их значение для океана.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Сохранение видов
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Информируем о статусе сохранения видов и важности их защиты.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Галерея моллюсков
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Исследуйте разнообразие морских моллюсков. Нажмите на карточку, 
                чтобы узнать больше о каждом виде.
              </p>
            </div>

            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMollusks.map((mollusk, index) => (
                <div
                  key={mollusk.id}
                  className={`transition-all duration-700 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <MolluskCard 
                    mollusk={mollusk} 
                    onSelect={handleMolluskSelect}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Есть вопросы о морских моллюсках? Хотите поделиться своими наблюдениями? 
              Мы будем рады услышать от вас!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@mollusks.ru"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Написать нам
              </a>
              <a
                href="#"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Подписаться на новости
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <MolluskModal 
        mollusk={selectedMollusk}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
}
