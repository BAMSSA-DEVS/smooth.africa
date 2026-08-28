'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { WhatWeDoSection } from '@/components/WhatWeDoSection';
import { ProductsSection } from '@/components/ProductsSection';
import { StorySection } from '@/components/StorySection';
import { VisionMissionSection } from '@/components/VisionMissionSection';
import { ValuesSection } from '@/components/ValuesSection';
import { TeamSection } from '@/components/TeamSection';
import { GallerySection } from '@/components/GallerySection';
import { NumbersSection } from '@/components/NumbersSection';
import { WhatsNextSection } from '@/components/WhatsNextSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { DemoModal } from '@/components/DemoModal';
import { ProductDetailModal } from '@/components/ProductDetailModal';
import { GalleryLightboxModal } from '@/components/GalleryLightboxModal';
import { Product, GalleryItem } from '@/data/companyData';

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

      <main className="flex-grow">
        {/* 1. Hero */}
        <HeroSection onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* 2. What We Do */}
        <WhatWeDoSection />

        {/* 3. Products */}
        <ProductsSection onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* 4. Our Story */}
        <StorySection />

        {/* 4. Vision & Mission */}
        <VisionMissionSection />

        {/* 5. Philosophy / Values */}
        <ValuesSection />

        {/* 6. The Team */}
        <TeamSection />

        {/* 7. Gallery */}
        <GallerySection onSelectImage={(item) => setSelectedGalleryItem(item)} />

        {/* 8. Social Proof — Numbers */}
        <NumbersSection />

        {/* 10. What's Next */}
        <WhatsNextSection />

        {/* 11. Contact / CTA */}
        <ContactSection onOpenDemoModal={() => setDemoModalOpen(true)} />
      </main>

      <Footer />

      {/* Modals */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenDemo={() => setDemoModalOpen(true)}
      />

      <GalleryLightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
}
