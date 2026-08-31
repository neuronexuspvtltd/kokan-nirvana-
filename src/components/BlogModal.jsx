import React from 'react';
import { X, Calendar, Clock } from 'lucide-react';

export default function BlogModal({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-slate/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-cyan/20 my-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 sm:h-80 bg-brand-slate">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-slate via-transparent to-black/30"></div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white mb-2 shadow-sm">
              {post.category}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              {post.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-brand-cyan-light mt-2 font-bold font-sans">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-orange" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-6 max-h-[60vh] overflow-y-auto font-sans text-gray-700 text-sm sm:text-base leading-relaxed">
          <p className="font-serif text-lg text-brand-slate italic border-l-4 border-brand-cyan pl-4 py-1 bg-brand-cyan-tint rounded-r-xl font-medium">
            {post.excerpt}
          </p>

          <div className="space-y-4 pt-2">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('###')) {
                return (
                  <h3 key={index} className="font-serif text-xl font-bold text-brand-slate pt-4">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              return (
                <p key={index}>
                  {paragraph.trim()}
                </p>
              );
            })}
          </div>
        </div>

        <div className="p-6 bg-brand-cyan-tint border-t border-brand-cyan/15 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-bold">Kokan Nirvana Journal</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-slate hover:bg-brand-cyan shadow-sm"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
}
