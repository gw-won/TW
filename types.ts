import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  colSpan?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
}