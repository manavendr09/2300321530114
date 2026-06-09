import { useState, useEffect } from 'react';

export function useReadNotifications() {
  const [readIds, setReadIds] = useState(() => {
    const saved = localStorage.getItem('readNotifications');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch (e) {
        return new Set();
      }
    }
    return new Set();
  });

  useEffect(() => {
    localStorage.setItem('readNotifications', JSON.stringify(Array.from(readIds)));
  }, [readIds]);

  const markAsRead = (id) => {
    setReadIds(prev => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  return { readIds, markAsRead };
}
