"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { Container } from "/components/container";
import styles from "/styles/index.module.scss";
import Link from "next/link"

const callouts = [
  {
    name: 'Data Strucutres & Algorith',
    description: 'Handwritten & Conceptual',
    imageSrc: 'dsa.png',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/subjects/dsa',
    tag: 'Not Available'
  },
  {
    name: 'Computer Networks',
    description: 'Handwritten & Conceptual',
    imageSrc: 'cn.png',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/subjects/cn',
    tag: 'Not Available'
  },
  {
    name: 'Operating System',
    description: 'Handwritten & Conceptual',
    imageSrc: 'os.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    tag: 'Not Available'
  },
  {
    name: 'Amazone Web Services',
    description: 'Handwritten & Conceptual',
    imageSrc: 'aws.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    tag: 'Not Available'
  },
  {
    name: 'Distributed System',
    description: 'Handwritten & Conceptual',
    imageSrc: 'ds.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    tag: 'Not Available'
  },
  {
    name: 'Information Security',
    description: 'Handwritten & Conceptual',
    imageSrc: 'is.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    tag: 'Not Available'
  },
  {
    name: 'Machine Learning',
    description: 'Handwritten & Conceptual',
    imageSrc: 'ml.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    tag: 'Not Available'
  },
  {
    name: 'Artificial Intelligence',
    description: 'Handwritten & Conceptual',
    imageSrc: 'ai.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/subjects/ai',
    tag: 'Available'
  },
  {
    name: 'Theory Of Computation',
    description: 'Handwritten & Conceptual',
    imageSrc: 'toc.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    tag: 'Not Available'
  },
]
export default function Example() {
  const [filter, setFilter] = useState('all');

  const filteredCallouts = filter === 'all'
    ? callouts
    : callouts.filter(callout => callout.tag === filter);

  return (
    <Container>
      <div className={styles.heading}>
    
      </div>
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end mb-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-2 py-2 text-sm font-medium rounded-md bg-white text-gray-900 hover:bg-gray-100"
            >
              <option value="all">All</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {filteredCallouts.map((callout) => (
                <div key={callout.name} className="group relative py-2">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                    <div
                      className="absolute bottom-0 right-0 p-1 bg-white rounded-sm shadow-md"
                    >
                      <span className="text-sm text-gray-600">{callout.tag}</span>
                    </div>
                  </div>
                  <h3 className="mt-6 text-sm text-gray-200">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-600">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}