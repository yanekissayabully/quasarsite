"use client"
import React from 'react';
import ScrollReveal from './ScrollReveal';

const SimpleExplanation = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={4}
          blurStrength={12}
          containerClassName="text-center mb-4"
        >
          Да-да, вы правильно поняли — сайт за 2 дня
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.2}
          enableBlur={true}
          blurStrength={8}
          containerClassName="text-sm text-gray-400 leading-relaxed mb-4"
        >
          Полнофункциональный сайт за 48 часов. Готовые модули + опытная команда = результат без компромиссов.
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          containerClassName="text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors text-sm">
            Хочу такой же результат!
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SimpleExplanation;