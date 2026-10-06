import { events } from './events.js';

const YEAR = 'ADG · 2026–27';

// ── Group photos: loaded automatically from src/assets/gallery ──────────────
const files = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default'
});

const titleFromFile = (path) => {
  const base = path.split('/').pop().replace(/\.[^.]+$/, '');
  const text = base
    .replace(/^\d+[\s._-]*/, '') // leading "01-"
    .replace(/[-_]+/g, ' ')
    .trim();
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : 'Group photo';
};

const groupPhotos = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src]) => ({ title: titleFromFile(path), caption: YEAR, src }));

// Nothing in the folder yet: show a few empty slots instead of a blank page.
const groupPlaceholders = ['Full committee', 'Core team', 'Domain heads'].map((title) => ({
  title,
  caption: YEAR,
  pending: 'Photo to come',
  label: 'Group photo to be added'
}));

// ── Upcoming events: one empty slot per event on the Events page ────────────
const upcomingSlots = events.map((e) => ({
  title: e.title,
  caption: YEAR,
  pending: 'Coming soon',
  label: 'Photos will be added after the event'
}));

const group = groupPhotos.length ? groupPhotos : groupPlaceholders;

export const albums = [
  {
    id: 'group',
    title: 'Group photos',
    meta: groupPhotos.length ? 'THE COMMITTEE · 2026–27' : 'THE COMMITTEE · PHOTOS COMING',
    count: `${group.length} ${groupPhotos.length ? 'PHOTOS' : 'SLOTS'}`,
    photos: group
  },
  {
    id: 'upcoming',
    title: 'Upcoming events',
    meta: 'NO EVENTS YET · PHOTOS WILL APPEAR HERE',
    count: `${upcomingSlots.length} SLOTS`,
    layout: 'even',
    photos: upcomingSlots
  }
];