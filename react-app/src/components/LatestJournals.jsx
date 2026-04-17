import React from 'react';

const JournalEntry = ({ entry }) => {
  const { title, category, readTime, author, authorImage, image, content, reverse } = entry;

  return (
    <article className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}>
      <div className="w-full md:w-1/2 aspect-square rounded-lg overflow-hidden atmospheric-shadow">
        <img alt={title} className="w-full h-full object-cover" src={image} />
      </div>
      <div className="w-full md:w-1/2">
        <span className="text-primary-container font-bold text-xs uppercase tracking-widest mb-4 block">{category} • {readTime} min read</span>
        <h4 className="text-3xl font-bold text-primary mb-4 tracking-tight leading-tight">{title}</h4>
        <p className="text-on-surface-variant mb-6 line-clamp-3">{content}</p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
            <img src={authorImage} />
          </div>
          <span className="text-sm font-bold text-on-surface">By {author}</span>
        </div>
      </div>
    </article>
  );
};

const LatestJournals = () => {
  const entries = [
    {
      title: 'The Brutalist Oasis of the Sahara',
      category: 'Architecture',
      readTime: 8,
      author: 'Julian Vossen',
      authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuykcM7dKeszmyeMflYV4leYR_MNGb0wlUpfPnVvtSfF-r52Kco3x0cT-aEH0UfmPbd5-8bTo6Q9bD1iWyTYt-xSGqQERui-iWNkfL3LU9YGA0S5PBzDCA5Pp8rV_zvZi82sdkxmgoHvxr9iLigyZvA40boGoJZa4Y_zuVcrRTF90sNdrXpVaT1zIg8N6vJKWbXwQlS_WMA0OZE8cUmIRvYr7NzTIXzz2OU813PFqqd09B5cbweGWHo9cPJJIXkxwJvK_NoMlBlb8q',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw2r2veDAXYmWqyFHLPkPs-cyW1wdfYg9-MpCk1UPsEbH8lczlLuMQrJHPQT9ML1f4J4uyipGkxa5m_Ew30hQYS7fuL6acDMKaes4niF3_I_1WcIotjyNWjEYoCt_wll-6eZzoIPC_HO4AcPL39awRGtNe05Wxr-ENAHNo4SS4wxC8L_jCBhO25GbXARWbXuOQu_eWcR0d8-jTV5IkIu53dATcY1wdUsm60PwMLuJViiASbjPjkp7S7dePrW6fiCxuDrStoFpxR1EX',
      content: 'How a new wave of architects is using raw materials to create sustainable luxury in the harshest climates on earth.',
    },
    {
      title: 'The Silence of the Onsen',
      category: 'Tradition',
      readTime: 12,
      author: 'Elena Moretti',
      authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDht-iFvXGIeoXd3bNWhMfd2G-MXrO80mdxKbQAg5JxK4yTRXNjSBQ8U6jgJr4l_zJ1LGxw88qM3ka4fOJZa_HmXe492oqUIr7g5M0csjRIlmGq9CSHEoaZ-K8Gd6IY0QaXw32W4knBshBlvd6pFHeXARLwZUpJEy5dz_4LzD3eb2_aI_Riq5usTQzuA3FPiV7upBJ7_ojZzSB0x5acrnsliieyBT6MzTx_daqWLL0CiKCxCTLYbvQ9zuMV0SBUlE6bGmqJYlPa89lU',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsidF_KS40Kd3jkDGISNwCs6pAms79kgeSkZ0rqTOaY-1zMpv3_1olYRRLFMT5O5GuLx3gldMin06dje89xPGZK6cRHJOlwSD-rkbYjoYYLWiGiwB6fVd7o7YhOMTBkSwpvnN2yDc0hdYVPyHRuiIfLxx1gatfLK-2UWo4iIq8SQsXa6yYsIyDL1Eirv8gQnT1WNoUxfPOvrqORo_wZ8xkhp886Latz-8INWffyFias6HoZz4YC-qTQQEdL918H4Mtd8qavPv_qFLW',
      content: 'Uncovering the ancient rituals of Japanese bathing and why true luxury often sounds like absolutely nothing.',
      reverse: true,
    }
  ];
  return (
    <section className="px-6 md:px-12 py-32 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4 md:sticky md:top-32">
            <span className="text-on-surface-variant font-label uppercase tracking-[0.2em] text-xs font-bold mb-4 block">The Weekly Digest</span>
            <h3 className="text-5xl font-black text-primary tracking-tighter leading-none mb-8">Latest <br />Journals</h3>
            <p className="text-on-surface-variant mb-10 leading-relaxed">Stories of travel, culture, and architecture curated from our global network of explorers.</p>
            <a className="inline-flex items-center gap-4 text-primary font-bold border-b-2 border-primary pb-1 group" href="#">
              Explore Archive
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="md:col-span-8 flex flex-col gap-24">
            {entries.map(entry => (
              <JournalEntry key={entry.title} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestJournals;
