"use client";
import { useState } from "react";
import Image from "next/image";
import { Mollusk } from "../data/mollusks";

interface MolluskCardProps {
  mollusk: Mollusk;
  onSelect: (mollusk: Mollusk) => void;
}

export function MolluskCard({ mollusk, onSelect }: MolluskCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    <div
      className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(mollusk)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 z-10" />
        {!imageError ? (
          <Image
            src={mollusk.image}
            alt={mollusk.name}
            fill
            className={`object-cover transition-all duration-700 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            } ${isHovered ? 'scale-110' : 'scale-100'}`}
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
              <div className="text-6xl mb-4">
                {mollusk.category === 'cephalopod' ? '🐙' : 
                 mollusk.category === 'bivalve' ? '🦪' : '🐚'}
              </div>
              <div className="text-lg font-semibold">{mollusk.name}</div>
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(mollusk.category)}`}>
            {getCategoryName(mollusk.category)}
          </span>
        </div>

        {/* Conservation Status */}
        <div className="absolute top-4 right-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            mollusk.conservationStatus === 'Не вызывает опасений' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
          }`}>
            {mollusk.conservationStatus}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/40 z-15 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl mb-2">🔍</div>
              <div className="text-sm font-medium">Подробнее</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {mollusk.name}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
          {mollusk.scientificName}
        </p>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {mollusk.shortDescription}
        </p>

        {/* Size Info */}
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
          <span className="mr-2">📏</span>
          <span>{mollusk.size}</span>
        </div>

        {/* Diet Info */}
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
          <span className="mr-2">🍽️</span>
          <span>{mollusk.diet}</span>
        </div>
      </div>

      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-border transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} style={{
        background: isHovered ? 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)' : 'transparent',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude'
      }} />
    </div>
  );
}
