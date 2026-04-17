import React from 'react';

const JournalCard = ({ journal }) => {
  const { title, type, image, content, author, authorImage, wide } = journal;

  if (wide) {
    return (
      <div className="md:col-span-2 group surface-container-lowest rounded-lg p-6 shadow-[0_20px_40px_rgba(0,32,26,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 aspect-video md:aspect-square rounded-DEFAULT overflow-hidden">
          <img alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={image} />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary/50 mb-2">{type}</span>
          <h4 className="text-3xl font-black tracking-tighter mb-4 leading-none">{title}</h4>
          <p className="text-on-surface-variant leading-relaxed mb-6">{content}</p>
          <button className="w-fit flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[11px] hover:gap-4 transition-all">
            Read Full Journal <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group surface-container-lowest rounded-lg p-4 shadow-[0_20px_40px_rgba(0,32,26,0.08)] hover:-translate-y-2 transition-all duration-500">
      <div className="relative aspect-[4/5] rounded-DEFAULT overflow-hidden mb-6">
        <img alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={image} />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">{type}</div>
      </div>
      <h4 className="text-xl font-bold tracking-tight mb-2">{title}</h4>
      <p className="text-on-surface-variant text-sm line-clamp-2">{content}</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-secondary-container overflow-hidden">
          {authorImage && <img src={authorImage} />}
        </div>
        <span className="text-xs font-bold text-primary">{author}</span>
      </div>
    </div>
  );
};

const RelatedJournals = () => {
  const journals = [
    {
      title: 'Morning Light in Positano',
      type: 'Journal',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuuxf6TBFAhIA22PZHngwbvVsyjIme7yqCqgFTZqw7ia0LZ1UFTB9N9RWwLKJa1jOhO-Ana862FwtW8SQdN48PfgflcXMS-4Lcw2sikY_sUqz5k_BxU99yWpRyhQqM9dZhqGsqJSQGq4wII7qrI8Xy16uDlgv0hIlJrUaRW1Hg1DM43dj06F6zRRal-pmNZAY_AkBYCKbu4ZyqYIagyV9JydMrMud3gGvElUMWq5Zho6vBpaYlCnYo9kOg9lk04_JOy9t3AcnffcI7',
      content: 'Tracing the narrow stone steps of the vertical city before the crowds arrive.',
      author: 'Elena Rossi',
      authorImage: null
    },
    {
      title: 'The Gardens of Ravello',
      type: 'Guide',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkYjXZpDUkxDCwzx-WU8BV0EN7Wo-OxcZnjwLQIYgS4wgma2BbRZdrVn59rSkSo7FW0rxK9FpCsYL77lVCJv99_stK4srbexZ2YCRjnlMPhAsW9g5VZyn-2Jw4KA69BVWv72WlFsWNDEX72Y0VbJxj1znx-m2Wk7Y7oqz1ra2ft-hUwJQq-ans-J7BH3ZfE0k_kPordOln6wfbTrKPjm5fmPbBT-oewEKAydoC3XzPdcIlemUKh8eHfbpXD4EjiPE2Wlh87wrmLu-5',
      content: 'A guide to the most exquisite villas tucked away in the clouds above the coast.',
      author: 'Marcus Thorne',
      authorImage: null
    },
    {
      title: 'The Lemon Trails',
      type: 'Gastronomy',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE6tTTN1tCMrN8XPuwTa0icwo84NvO6kWh5BIRYKvaYW-Mjf8K3Sl6UAvcTrzNUrQyfXwuM3xuntvLHcRF97iJ37rsPNk31XcIS1QLJr125GcVKh9qxix09vaxz60WKHc9_VFxRcZneC9Oi6TzSkrQTPEec5GC4n17do1OZyF8-9s8uyr5bc5CQfqJZNRcQVqwp5UZ2HIJcMIlFtKyI5EKHX2qatOTK15-IXIXsHh2Xcr8o8vcu3ygryzyyRcw74XcphvyVUxPf9w3',
      content: "Discover the ancient citrus groves where the world's most aromatic limoncello is born. A sensory journey through the heart of Amalfi's agriculture.",
      wide: true
    }
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
        <div className="space-y-8">
          <div>
            <h2 className="text-label-md uppercase tracking-[0.3em] text-primary/40 mb-4">The Curator's Note</h2>
            <p className="text-2xl font-medium tracking-tight text-on-surface leading-snug">
              "Positano bites deep. It is a dream place that isn’t quite real when you are there and becomes beckoningly real after you have gone."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
            <div>
              <span className="block text-3xl font-black text-primary">12.4k</span>
              <span className="text-xs uppercase tracking-widest text-on-surface-variant">Check-ins</span>
            </div>
            <div>
              <span className="block text-3xl font-black text-primary">4.9</span>
              <span className="text-xs uppercase tracking-widest text-on-surface-variant">Rating</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8">
        <h3 className="text-2xl font-bold tracking-tight mb-8">Related Journals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {journals.map(journal => (
            <JournalCard key={journal.title} journal={journal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedJournals;
