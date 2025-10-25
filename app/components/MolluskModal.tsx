"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Mollusk } from "../data/mollusks";

interface MolluskModalProps {
  mollusk: Mollusk | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MolluskModal({ mollusk, isOpen, onClose }: MolluskModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mollusk) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'gastropod':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'bivalve':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'cephalopod':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'gastropod':
        return 'Брюхоногие';
      case 'bivalve':
        return 'Двустворчатые';
      case 'cephalopod':
        return 'Головоногие';
      default:
        return 'Другие';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100 flex flex-col animate-modal-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 shadow-lg"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row flex-1 min-h-0">
          {/* Image Section */}
          <div className="lg:w-1/2 relative h-64 lg:h-auto flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 z-10" />
            {!imageError ? (
              <Image
                src={mollusk.image}
                alt={mollusk.name}
                fill
                className={`object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
                priority={false}
                unoptimized={mollusk.image.startsWith('data:') || mollusk.image.includes('ytimg.com') || mollusk.image.includes('userapi.com') || mollusk.image.includes('petzona.ru')}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">
                    {mollusk.category === 'cephalopod' ? '🐙' : 
                     mollusk.category === 'bivalve' ? '🦪' : '🐚'}
                  </div>
                  <div className="text-2xl font-semibold">{mollusk.name}</div>
                </div>
              </div>
            )}
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(mollusk.category)}`}>
                {getCategoryName(mollusk.category)}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 overflow-y-auto flex-1 min-h-0 relative">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {mollusk.name}
                </h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  {mollusk.scientificName}
                </p>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Описание
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {mollusk.fullDescription}
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <span className="mr-2">🌊</span>
                    Ареал обитания
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {mollusk.habitat}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <span className="mr-2">📏</span>
                    Размер
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {mollusk.size}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <span className="mr-2">🍽️</span>
                    Питание
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {mollusk.diet}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <span className="mr-2">🛡️</span>
                    Статус сохранения
                  </h3>
                  <p className={`text-sm font-medium ${
                    mollusk.conservationStatus === 'Не вызывает опасений' 
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-orange-600 dark:text-orange-400'
                  }`}>
                    {mollusk.conservationStatus}
                  </p>
                </div>
              </div>

              {/* Interesting Facts */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">✨</span>
                  Интересные факты
                </h2>
                <ul className="space-y-3">
                  {mollusk.interestingFacts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {fact}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Scroll indicator */}
              <div className="text-center py-4 text-gray-400 dark:text-gray-500 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span>Прокрутите для просмотра всей информации</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
