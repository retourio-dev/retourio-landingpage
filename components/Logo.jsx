'use client';
import React from 'react';

export function RetourioLogo({ className = 'h-10' }) {
  return (
    <img 
      src="/logo.svg" 
      alt="Retourio Logo" 
      className={`block shrink-0 ${className}`}
      style={{ width: 'auto' }} // Verhindert das Quetschen
    />
  );
}