"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* =======================
   Types
======================= */

type DescriptionKey = "phd" | "ug" | "pg" | "ug_record";

interface ImageMeta {
  src: string;
  alt: string;
  key: DescriptionKey;
}

interface DescriptionMeta {
  title: string;
  paragraphs: string[];
}

/* =======================
   Image Data (public/stats)
======================= */

const images: ImageMeta[] = [
  {
    src: "/stats/phd_data.png",
    alt: "Number of PhD Theses Submitted",
    key: "phd",
  },
  {
    src: "/stats/trend.png",
    alt: "Overall Placement Trends",
    key: "ug_record",
  },
  {
    src: "/stats/ug.png",
    alt: "Undergraduate Placement Statistics",
    key: "ug",
  },
  {
    src: "/stats/pg.png",
    alt: "Postgraduate Placement Statistics",
    key: "pg",
  },
];

/* =======================
   Descriptions
======================= */

const descriptions: Record<DescriptionKey, DescriptionMeta> = {
  phd: {
    title: "PhD Theses Submitted (2018–2022)",
    paragraphs: [
      "The chart shows a steady rise in PhD thesis submissions with a clear peak in 2021, indicating strong research output during this period.",
      "The slight decline afterward may be attributed to cohort transitions or changes in enrollment and supervision cycles.",
    ],
  },
  ug: {
    title: "Undergraduate Placement Overview",
    paragraphs: [
      "UG placements increased consistently until 2021, reflecting strong recruiter engagement and student preparedness.",
      "A marginal drop in later years suggests scope for strengthening placement training and outreach.",
    ],
  },
  pg: {
    title: "Postgraduate Placement Distribution",
    paragraphs: [
      "This visualization highlights PG placements across academic years, segmented into core and non-core roles.",
      "The overall upward trend indicates improving employment opportunities for postgraduate students.",
    ],
  },
  ug_record: {
    title: "UG Placement Records Summary",
    paragraphs: [
      "The data compares registered students with those placed, further divided into core and non-core sectors.",
      "An improving conversion rate from registration to placement is evident, though non-core roles remain dominant.",
    ],
  },
};

/* =======================
   Component
======================= */

const StatisticsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeImage = images[activeIndex];
  const meta = descriptions[activeImage.key];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
          Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* =======================
              Carousel (Left)
          ======================= */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-white rounded-2xl shadow p-4">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: ".stats-prev",
                  nextEl: ".stats-next",
                }}
                onSlideChange={(swiper) =>
                  setActiveIndex(swiper.activeIndex)
                }
                className="h-[360px]"
              >
                {images.map((img) => (
                  <SwiperSlide key={img.src}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Controls */}
              <div className="mt-4 flex justify-center gap-4">
                <button className="stats-prev px-4 py-2 border rounded-lg hover:bg-gray-100">
                  Prev
                </button>
                <button className="stats-next px-4 py-2 border rounded-lg hover:bg-gray-100">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* =======================
              Description (Right)
          ======================= */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {meta.title}
              </h3>

              <p className="text-sm text-gray-500 italic mb-4">
                {activeImage.alt}
              </p>

              <div className="space-y-3 text-gray-700">
                {meta.paragraphs.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>

              <div className="mt-6">
                <span className="text-sm text-gray-500">Quick insight</span>
                <p className="text-lg font-medium text-gray-800">
                  {quickTake(activeImage.key)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

/* =======================
   Helper
======================= */

function quickTake(key: DescriptionKey): string {
  switch (key) {
    case "phd":
      return "Peak PhD research output observed in 2021.";
    case "ug":
      return "UG placements strongest in 2021 with minor variation later.";
    case "pg":
      return "PG placement outcomes show steady improvement.";
    case "ug_record":
      return "UG placement conversion improving; non-core roles dominate.";
    default:
      return "";
  }
}
