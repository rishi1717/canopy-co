// Journal: post data, cards, and article modal

function escapeHtml(text) {
  const el = document.createElement('div');
  el.textContent = text;
  return el.innerHTML;
}

function escapeAttr(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

/**
 * @typedef {{ type: 'paragraph', text: string } | { type: 'image', src: string, alt: string }} ContentBlock
 */

/** @type {Array<{ id: number, title: string, excerpt: string, date: string, author: string, readTime: string, coverSrc?: string, coverAlt?: string, content: ContentBlock[] }>} */
const blogPosts = [
  {
    id: 1,
    title: 'The Art of Seamless Event Planning',
    excerpt:
      'Discover the key principles that transform ordinary gatherings into extraordinary experiences. At Canopy&Co, we believe every detail matters.',
    date: 'May 7, 2026',
    author: 'Serena Vance',
    readTime: '5 min read',
    coverSrc: 'assets/images/hello-from-canopy.png',
    coverAlt: 'Black and white portrait of a couple outdoors',
    content: [
      {
        type: 'paragraph',
        text: 'Planning an event that feels effortless is rarely accidental. It is the result of quiet choreography: timelines that breathe, vendors who understand the brief, and a host who can actually be present in the room.'
      },
      {
        type: 'image',
        src: 'assets/images/hello-from-canopy.png',
        alt: 'Couple in soft outdoor light, black and white'
      },
      {
        type: 'paragraph',
        text: 'We start from how you want guests to feel — not only how the room should look. From there, logistics become a tool for emotion: arrivals, pacing, light, and sound aligned so nothing pulls attention away from the moment.'
      },
      {
        type: 'paragraph',
        text: 'If you are planning something meaningful this season, start with one question: what should people remember when they leave? Everything else can follow.'
      }
    ]
  },
  {
    id: 2,
    title: "Sustainable Celebrations: The Future of Events",
    excerpt:
      'How Canopy&Co is leading the charge toward environmentally conscious event planning without compromising on luxury or experience.',
    date: 'April 28, 2026',
    author: 'Marcus Chen',
    readTime: '4 min read',
    coverSrc: 'assets/images/hello-from-canopy.png',
    coverAlt: 'Portrait study',
    content: [
      {
        type: 'paragraph',
        text: 'Luxury and responsibility are not opposites. The most memorable celebrations today are designed with intention: seasonal menus, local makers, rentals over disposables, and floral choices that respect the landscape.'
      },
      {
        type: 'paragraph',
        text: 'We work with clients to decide where impact matters most to them — travel, food waste, materials — and build a plan that fits the scale of the day without diluting the atmosphere they envision.'
      }
    ]
  },
  {
    id: 3,
    title: 'Corporate Events That Build Culture',
    excerpt:
      'Moving beyond the annual conference: strategies for creating corporate gatherings that genuinely strengthen team bonds and organizational culture.',
    date: 'April 20, 2026',
    author: 'Jordan Rivera',
    readTime: '6 min read',
    coverSrc: 'assets/images/hello-from-canopy.png',
    coverAlt: 'Outdoor gathering mood',
    content: [
      {
        type: 'paragraph',
        text: 'The best corporate gatherings do not feel like mandatory calendar blocks. They feel like a shared story — a clear purpose, room for conversation, and moments that are not entirely scripted.'
      },
      {
        type: 'paragraph',
        text: 'We recommend structuring the day around a small number of strong anchors: one memorable keynote or experience, intentional breaks, and spaces where people can talk without a microphone.'
      },
      {
        type: 'image',
        src: 'assets/images/hello-from-canopy.png',
        alt: 'Atmospheric detail — outdoor gathering'
      },
      {
        type: 'paragraph',
        text: 'Culture shows up in the gaps between sessions as much as on stage. Design those gaps with as much care as the programme itself.'
      }
    ]
  },
  {
    id: 4,
    title: 'Wedding Planning: Your Story, Our Craft',
    excerpt:
      "How Canopy&Co transforms personal love stories into unforgettable wedding experiences, honoring each couple's unique journey.",
    date: 'April 15, 2026',
    author: 'Serena Vance',
    readTime: '5 min read',
    coverSrc: 'assets/images/hello-from-canopy.png',
    coverAlt: 'Portrait study',
    content: [
      {
        type: 'paragraph',
        text: 'No two weddings should feel interchangeable. We listen for the threads — family, place, humour, tradition — and weave them into a day that feels honestly yours.'
      },
      {
        type: 'paragraph',
        text: 'Whether intimate or grand, the goal is coherence: every choice, from invitation to last dance, nodding to the same emotional truth.'
      }
    ]
  },
  {
    id: 5,
    title: 'The Psychology of Perfect Spaces',
    excerpt:
      'Understanding how environment shapes experience: the science and art of venue design that resonates on a human level.',
    date: 'April 10, 2026',
    author: 'Elias Wright',
    readTime: '4 min read',
    coverSrc: 'assets/images/hello-from-canopy.png',
    coverAlt: 'Portrait study',
    content: [
      {
        type: 'paragraph',
        text: 'People remember space through the body first: ceiling height, light quality, how sound travels, how far they walk between moments of rest.'
      },
      {
        type: 'paragraph',
        text: 'We map guest journeys early — where energy should peak, where quiet helps — so the venue supports the arc of the event instead of fighting it.'
      }
    ]
  },
  {
    id: 6,
    title: "Seasonal Celebrations: Embracing Nature's Rhythms",
    excerpt:
      'How Canopy&Co draws inspiration from the natural world to create events that feel perfectly timed to their moment.',
    date: 'April 3, 2026',
    author: 'Maya Patel',
    readTime: '3 min read',
    coverSrc: 'assets/images/hello-from-canopy.png',
    coverAlt: 'Portrait study',
    content: [
      {
        type: 'paragraph',
        text: 'Seasonality is not a trend here; it is a way to root an event in time. Light, temperature, and what is growing nearby all suggest a palette and a pace.'
      },
      {
        type: 'paragraph',
        text: 'When the setting and the season agree, guests feel it before they can name it — that is the quiet luxury we aim for.'
      }
    ]
  }
];

function renderContentBlocks(blocks) {
  return blocks
    .map((block) => {
      if (block.type === 'paragraph') {
        return `<p class="modal-prose__p">${escapeHtml(block.text)}</p>`;
      }
      if (block.type === 'image') {
        return `<figure class="modal-prose__figure"><img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt)}" loading="lazy" decoding="async"></figure>`;
      }
      return '';
    })
    .join('');
}

function findPostById(id) {
  return blogPosts.find((p) => p.id === id);
}

function openModal(post) {
  const modal = document.getElementById('article-modal');
  const bodyEl = document.getElementById('modal-body');
  if (!modal || !bodyEl) return;

  const cover =
    post.coverSrc != null
      ? `<div class="modal-cover"><img src="${escapeHtml(post.coverSrc)}" alt="${escapeHtml(post.coverAlt || '')}" loading="eager" decoding="async"></div>`
      : '';

  bodyEl.innerHTML = `
    ${cover}
    <header class="modal-article-header">
      <h2 id="modal-title" class="modal-title">${escapeHtml(post.title)}</h2>
      <p class="modal-meta">${escapeHtml(post.date)} · ${escapeHtml(post.author)} · ${escapeHtml(post.readTime)}</p>
    </header>
    <div class="modal-prose">
      ${renderContentBlocks(post.content)}
    </div>
  `;

  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  const modal = document.getElementById('article-modal');
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function renderPostCards(container) {
  container.innerHTML = blogPosts
    .map((post) => {
      let thumb;
      if (post.coverSrc != null) {
        thumb = `<div class="blog-post-card__thumb"><img src="${escapeHtml(post.coverSrc)}" alt="" loading="lazy"></div>`;
      } else {
        const variant = ['', 'v1', 'v2', 'v3'][post.id % 4];
        const variantClass = variant ? ` blog-post-card__thumb--${variant}` : '';
        thumb = `<div class="blog-post-card__thumb blog-post-card__thumb--empty${variantClass}" aria-hidden="true"></div>`;
      }

      return `
    <article class="blog-post-card" data-post-id="${post.id}" tabindex="0" role="button" aria-label="Open: ${escapeAttr(post.title)}">
      ${thumb}
      <div class="blog-post-card__body">
        <h2 class="blog-post-card__title">${escapeHtml(post.title)}</h2>
        <p class="blog-post-card__date">${escapeHtml(post.date)}</p>
        <p class="blog-post-card__excerpt">${escapeHtml(post.excerpt)}</p>
        <span class="blog-post-card__cta">Read full piece</span>
      </div>
    </article>`;
    })
    .join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const postsContainer = document.getElementById('posts-container');
  const modal = document.getElementById('article-modal');

  if (postsContainer) {
    renderPostCards(postsContainer);

    postsContainer.addEventListener('click', (e) => {
      const card = e.target.closest('.blog-post-card');
      if (!card) return;
      const id = parseInt(card.dataset.postId, 10);
      const post = findPostById(id);
      if (post) openModal(post);
    });

    postsContainer.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const card = e.target.closest('.blog-post-card');
      if (!card) return;
      e.preventDefault();
      const id = parseInt(card.dataset.postId, 10);
      const post = findPostById(id);
      if (post) openModal(post);
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop')) closeModal();
    });

    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.hidden) {
        closeModal();
      }
    });
  }
});
