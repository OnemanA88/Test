type Entry = { count: number; expiresAt: number };

const store = new Map<string, Entry>();

export function rateLimit(key: string, limit = 10, windowMs = 60_000) {
  const now = Date.now();
  const current = store.get(key);
  if (!current || current.expiresAt < now) {
    store.set(key, { count: 1, expiresAt: now + windowMs });
    return { allowed: true } as const;
  }
  if (current.count >= limit) {
    return { allowed: false } as const;
  }
  current.count += 1;
  store.set(key, current);
  return { allowed: true } as const;
}

