import React from 'react';
import {
  Home,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  ArrowUpRight,
  ArrowUp,
  CreditCard,
  ExternalLink,
  Unlock,
  Video,
  Heart,
  Shuffle,
  Navigation,
  Clock,
  RotateCw,
  List,
  Calendar,
  Eye,
} from 'react-feather';

const icons = {
  Home,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  ArrowUpRight,
  ArrowUp,
  CreditCard,
  ExternalLink,
  Unlock,
  Video,
  Heart,
  Shuffle,
  Navigation,
  Clock,
  RotateCw,
  List,
  Calendar,
  Eye,
};

export const FeatherIcon = ({ icon, ...props }) => {
  if (icon in icons) {
    const Icon = icons[icon];
    return <Icon {...props} />;
  }
  return null;
};
